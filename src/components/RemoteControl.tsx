import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePresentationSync } from '../hooks/usePresentationSync';

type RemoteControlProps = {
  sessionId: string;
};

export function RemoteControl({ sessionId }: RemoteControlProps) {
  const { activeSlide, goNext, goPrev, goTo, totalSlides, currentSlide } =
    usePresentationSync(sessionId);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 gap-8">
      <div className="text-center">
        <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2">Remote</p>
        <h1 className="text-xl font-semibold">{currentSlide.title}</h1>
        <p className="text-sm text-muted mt-1">
          Section {activeSlide + 1} of {totalSlides}
        </p>
      </div>

      <div className="flex gap-4 w-full max-w-sm">
        <button
          onClick={goPrev}
          disabled={activeSlide === 0}
          className="flex-1 flex items-center justify-center gap-2 py-6 rounded-2xl bg-surface border border-border disabled:opacity-30"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goNext}
          disabled={activeSlide === totalSlides - 1}
          className="flex-1 flex items-center justify-center gap-2 py-6 rounded-2xl bg-accent text-background disabled:opacity-30"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
        {Array.from({ length: totalSlides }, (_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`py-3 rounded-lg text-sm font-mono border transition-colors ${
              activeSlide === idx
                ? 'bg-accent text-background border-accent'
                : 'bg-surface border-border text-muted'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
