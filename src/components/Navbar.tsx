import { Clock, Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';
import { formatJakartaTime } from '../utils/portfolioHelpers';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [timeLabel, setTimeLabel] = useState<string>(() => formatJakartaTime(new Date()));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLabel(formatJakartaTime(new Date()));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 sm:pt-4 px-[4vw] pointer-events-none">
      <div className="pointer-events-auto h-14 sm:h-16 w-full max-w-[1320px] bg-surface-glass-dark backdrop-blur-xl border border-border-dark rounded-full px-3 sm:px-4 flex items-center justify-between gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
        {/* Brand Monogram */}
        <div className="flex items-center gap-2 pl-1 shrink-0">
          <span className="h-2 w-2 rounded-full bg-aura-violet animate-pulse" aria-hidden="true" />
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="font-mono text-xs tracking-wider uppercase text-on-surface hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span className="text-[15px] font-bold tracking-tight text-paper-pure font-sans">JAY</span>
            <span className="text-on-surface-variant font-mono text-[11px]">(*18)</span>
          </a>
        </div>

        {/* Center Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/50"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-4 py-1.5 rounded-full text-[14px] leading-[20px] transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-surface-container-high text-paper-pure font-bold shadow-sm'
                    : 'text-on-surface-variant hover:text-paper-pure hover:bg-surface-container-high/60 font-medium'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Telemetry & Primary CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/60 border border-border-dark">
            <Clock className="w-3.5 h-3.5 text-on-surface-variant" aria-hidden="true" />
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-on-surface-variant uppercase tabular-nums whitespace-nowrap">
              {timeLabel}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-lowest/60 border border-border-dark">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-emerald" />
            </span>
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.08em] text-on-surface uppercase whitespace-nowrap">
              Open to collaborate
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-paper-pure text-ink-primary text-[13px] sm:text-[14px] font-semibold hover:bg-primary transition-all flex items-center gap-1 shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Say Hello</span>
            <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
          </a>

          <a
            href="#about"
            aria-label="Jump to About profile"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 hover:scale-105 transition-transform"
          >
            <User className="w-4 h-4 text-on-primary" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 rounded-full bg-surface-container-high border border-border-dark flex items-center justify-center text-paper-pure hover:border-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="pointer-events-auto lg:hidden mt-2 w-full max-w-[1320px] rounded-2xl bg-surface-container-lowest/95 backdrop-blur-2xl border border-border-dark p-3 shadow-2xl grid grid-cols-2 gap-2"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-surface-container-high text-paper-pure font-semibold border border-primary/30'
                    : 'text-on-surface-variant hover:text-paper-pure hover:bg-surface-container-high/60'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-primary" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
