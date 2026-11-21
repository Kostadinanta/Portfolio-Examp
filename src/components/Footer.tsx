import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-dark mt-auto">
      <div className="max-w-[1320px] mx-auto px-[4vw] py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant">
        <div className="flex items-center gap-1">
          <span className="text-[14px] leading-[20px] text-paper-muted">
            © 2026 Muhammad Jagad Arthoseno (Jay)
          </span>
        </div>

        <div className="flex items-center gap-2 text-on-surface-variant/85">
          <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="text-[14px] leading-[20px]">West Jakarta, Indonesia</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-aura-orange" aria-hidden="true" />
          <span>Full-Stack · Robotics · Intelligent Systems</span>
        </div>
      </div>
    </footer>
  );
}
