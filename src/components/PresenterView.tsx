import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { SLIDES } from '../data/slides';
import {
  buildPresentationUrl,
  usePresentationSync,
} from '../hooks/usePresentationSync';

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

type PresenterViewProps = {
  sessionId: string;
};

export function PresenterView({ sessionId }: PresenterViewProps) {
  const { activeSlide, goNext, goPrev, goTo, totalSlides, currentSlide, nextSlide } =
    usePresentationSync(sessionId);
  const [copied, setCopied] = useState<'audience' | 'remote' | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  const audienceUrl = buildPresentationUrl('present', sessionId);
  const remoteUrl = buildPresentationUrl('remote', sessionId);

  useEffect(() => {
    if (!timerRunning) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [timerRunning]);

  const copyUrl = async (url: string, type: 'audience' | 'remote') => {
    await navigator.clipboard.writeText(url);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const openWindow = (url: string, name: string) => {
    window.open(url, name, 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/80 backdrop-blur-md shrink-0">
        <div>
          <h1 className="text-lg font-semibold">Presenter Script</h1>
          <p className="text-xs text-muted mt-0.5">
            Session <span className="font-mono text-foreground/70">{sessionId}</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTimerRunning(!timerRunning)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent/40 text-sm transition-colors"
          >
            <Clock size={14} className="text-muted" />
            <span className="font-mono tabular-nums">{formatTime(elapsed)}</span>
          </button>

          <span className="text-sm text-muted">
            Section{' '}
            <span className="text-foreground font-medium">
              {activeSlide + 1} / {totalSlides}
            </span>
          </span>
        </div>
      </header>

      <div className="px-6 py-3 border-b border-border bg-accent/[0.06] shrink-0">
        <p className="text-sm text-muted">
          <span className="font-medium text-foreground">How to present:</span> keep this window
          for your script and controls. Open the{' '}
          <span className="text-accent">Audience Window</span> and share it in Zoom or on a second
          monitor. Navigate here — the audience view follows automatically.
        </p>
      </div>

      <div className="px-6 py-3 border-b border-border bg-surface/40 flex flex-wrap gap-3 shrink-0">
        <button
          onClick={() => openWindow(audienceUrl, 'cnbc-audience')}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-background hover:opacity-90 rounded-lg text-sm font-medium transition-opacity"
        >
          <Monitor size={16} />
          Open Audience Window
        </button>

        <button
          onClick={() => openWindow(remoteUrl, 'cnbc-remote')}
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border hover:border-accent/40 rounded-lg text-sm font-medium transition-colors"
        >
          <Smartphone size={16} />
          Open Remote Control
        </button>

        <button
          onClick={() => copyUrl(audienceUrl, 'audience')}
          className="flex items-center gap-2 px-3 py-2 bg-surface/80 hover:bg-surface border border-border rounded-lg text-xs text-muted transition-colors"
        >
          {copied === 'audience' ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} />
          )}
          Copy audience URL
        </button>

        <button
          onClick={() => copyUrl(remoteUrl, 'remote')}
          className="flex items-center gap-2 px-3 py-2 bg-surface/80 hover:bg-surface border border-border rounded-lg text-xs text-muted transition-colors"
        >
          {copied === 'remote' ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} />
          )}
          Copy remote URL
        </button>

        <a
          href={audienceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-2 text-xs text-muted hover:text-accent transition-colors ml-auto"
        >
          <ExternalLink size={12} />
          Preview audience
        </a>
      </div>

      <div className="flex-1 grid lg:grid-cols-[1fr_320px] gap-0 min-h-0">
        <div className="flex flex-col min-h-0">
          <div className="px-8 py-5 border-b border-border shrink-0">
            <p className="text-xs text-accent font-mono uppercase tracking-[0.25em] mb-2">
              Script — read aloud
            </p>
            <h2 className="text-3xl font-bold text-gradient">{currentSlide.title}</h2>
          </div>
          <div className="flex-1 overflow-y-auto px-8 py-8">
            {currentSlide.notes.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col border-l border-border bg-surface/20 min-h-0">
          <div className="p-6 space-y-4 flex-1">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-2">Now showing</p>
              <div className="rounded-xl border border-border bg-surface p-5">
                <span className="text-3xl font-bold text-foreground/15 mb-1 block">
                  {String(activeSlide + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold">{currentSlide.title}</h3>
                <p className="text-xs text-muted mt-1 font-mono">#{currentSlide.id}</p>
              </div>
            </div>

            {nextSlide && (
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-2">Up next</p>
                <div className="rounded-lg border border-border/60 bg-surface/50 p-4">
                  <span className="text-xl font-bold text-foreground/10 block mb-1">
                    {String(activeSlide + 2).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-medium">{nextSlide.title}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="shrink-0 border-t border-border bg-surface/80 backdrop-blur-md px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            disabled={activeSlide === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border hover:border-accent/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <div className="flex gap-1.5 flex-wrap justify-center max-w-xl">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goTo(idx)}
                title={slide.title}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-200',
                  activeSlide === idx ? 'bg-accent w-8' : 'bg-border hover:bg-muted'
                )}
                aria-label={`Go to section ${idx + 1}: ${slide.title}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={activeSlide === totalSlides - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="text-center text-xs text-muted mt-3">
          Arrow keys or Space advance slides across all synced windows
        </p>
      </footer>
    </div>
  );
}
