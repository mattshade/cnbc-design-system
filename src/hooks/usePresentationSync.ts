import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from '../data/slides';

const CHANNEL_NAME = 'cnbc-design-system-presentation';

type SyncMessage = {
  type: 'SYNC';
  slide: number;
  sessionId: string;
};

function storageKey(sessionId: string) {
  return `cnbc-design-system-presentation-${sessionId}`;
}

function readStoredSlide(sessionId: string): number {
  try {
    const raw = localStorage.getItem(storageKey(sessionId));
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as { slide: number };
    return Math.max(0, Math.min(parsed.slide, SLIDES.length - 1));
  } catch {
    return 0;
  }
}

function writeStoredSlide(sessionId: string, slide: number) {
  localStorage.setItem(
    storageKey(sessionId),
    JSON.stringify({ slide, updatedAt: Date.now() })
  );
}

export function generateSessionId(): string {
  return Math.random().toString(36).slice(2, 8);
}

export function getSessionFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get('session');
}

export function getModeFromUrl(): 'present' | 'presenter' | 'remote' | null {
  const mode = new URLSearchParams(window.location.search).get('mode');
  if (mode === 'present' || mode === 'presenter' || mode === 'remote') return mode;
  return null;
}

export function buildPresentationUrl(
  mode: 'present' | 'presenter' | 'remote',
  sessionId: string
): string {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('mode', mode);
  url.searchParams.set('session', sessionId);
  return url.toString();
}

export function usePresentationSync(sessionId: string, enabled = true) {
  const [activeSlide, setActiveSlideState] = useState(() => readStoredSlide(sessionId));
  const channelRef = useRef<BroadcastChannel | null>(null);
  const isRemoteUpdate = useRef(false);

  const broadcastSlide = useCallback(
    (slide: number) => {
      const clamped = Math.max(0, Math.min(slide, SLIDES.length - 1));
      writeStoredSlide(sessionId, clamped);

      channelRef.current?.postMessage({
        type: 'SYNC',
        slide: clamped,
        sessionId,
      } satisfies SyncMessage);
    },
    [sessionId]
  );

  const setActiveSlide = useCallback(
    (slide: number | ((prev: number) => number)) => {
      setActiveSlideState((prev) => {
        const next = typeof slide === 'function' ? slide(prev) : slide;
        const clamped = Math.max(0, Math.min(next, SLIDES.length - 1));
        if (!isRemoteUpdate.current) {
          broadcastSlide(clamped);
        }
        return clamped;
      });
    },
    [broadcastSlide]
  );

  const goNext = useCallback(() => {
    setActiveSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, [setActiveSlide]);

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => Math.max(prev - 1, 0));
  }, [setActiveSlide]);

  const goTo = useCallback(
    (index: number) => {
      setActiveSlide(index);
    },
    [setActiveSlide]
  );

  useEffect(() => {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channelRef.current = channel;

    channel.onmessage = (event: MessageEvent<SyncMessage>) => {
      const { slide, sessionId: msgSession } = event.data;
      if (msgSession !== sessionId) return;
      isRemoteUpdate.current = true;
      setActiveSlideState(Math.max(0, Math.min(slide, SLIDES.length - 1)));
      isRemoteUpdate.current = false;
    };

    return () => {
      channel.close();
      channelRef.current = null;
    };
  }, [sessionId]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey(sessionId) || !event.newValue) return;
      try {
        const parsed = JSON.parse(event.newValue) as { slide: number };
        isRemoteUpdate.current = true;
        setActiveSlideState(Math.max(0, Math.min(parsed.slide, SLIDES.length - 1)));
        isRemoteUpdate.current = false;
      } catch {
        // ignore
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [sessionId]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(SLIDES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goTo, enabled]);

  return {
    activeSlide,
    setActiveSlide,
    goNext,
    goPrev,
    goTo,
    totalSlides: SLIDES.length,
    currentSlide: SLIDES[activeSlide],
    nextSlide: activeSlide < SLIDES.length - 1 ? SLIDES[activeSlide + 1] : null,
  };
}
