import { Terminal } from 'lucide-react';
import { useState } from 'react';
import { SectionStarStrip } from './SectionStarStrip';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-8 pb-16 lg:pb-24 w-full scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column (Cols 1-5): Identity, Narrative & Quick Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 border border-border-dark backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-aura-orange" aria-hidden="true" />
              <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-on-surface-variant">
                • (PORTFOLIO) // ARCH_V26
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-[36px] leading-[40px] sm:text-[46px] sm:leading-[48px] xl:text-[52px] xl:leading-[54px] tracking-[-0.03em] font-extrabold text-paper-pure text-balance">
                M. JAGAD ARTHOSENO{' '}
                <span className="font-mono text-[12px] leading-[16px] tracking-[0.04em] text-primary align-top whitespace-nowrap">
                  (*18)
                </span>
              </h1>
              <p className="text-[18px] leading-[28px] font-medium text-on-surface-variant">
                Full-Stack Developer{' '}
                <span className="italic font-serif text-paper-pure font-normal text-[1.12em]">
                  &amp; Informatics Student
                </span>
              </p>
            </div>

            <p className="text-[15px] leading-[24px] text-on-surface/85 max-w-md">
              Informatics Engineering student at Institut Teknologi PLN and Full-Stack Developer
              experienced in building responsive, structured, and scalable web applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('projects');
                }}
                className="px-5 py-2.5 rounded-full bg-paper-pure text-ink-primary text-[14px] font-semibold hover:bg-primary transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>Explore Projects</span>
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </a>
              <a
                href="https://rx.cv/jagadartho250/cv-ukm"
                rel="noopener noreferrer"
                target="_blank"
                className="px-5 py-2.5 rounded-full bg-surface-container-high/70 text-on-surface text-[14px] font-medium border border-border-dark hover:border-paper-pure/40 hover:text-paper-pure transition-all duration-200 flex items-center gap-1.5 backdrop-blur-md hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>View CV</span>
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Left Bento Metrics Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {/* Card A */}
            <div className="p-4 rounded-xl bg-surface-container/60 border border-border-dark backdrop-blur-xl relative overflow-hidden group hover:border-white/25 transition-all duration-300">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-aura-violet/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <span className="text-[32px] leading-[36px] tracking-[-0.02em] font-extrabold text-paper-pure tabular-nums">
                  8+
                </span>
                <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-tertiary tabular-nums">
                  &apos;25
                </span>
              </div>
              <div className="text-[14px] leading-[20px] font-semibold text-paper-pure/95">
                Lead Full-Stack
              </div>
              <div className="font-mono text-[11px] leading-[16px] text-on-surface-variant truncate mt-0.5">
                Neumedira Indonesia
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/80 text-[10px] font-mono text-primary">
                  Laravel
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/80 text-[10px] font-mono text-primary">
                  React
                </span>
              </div>
            </div>

            {/* Card B */}
            <div className="p-4 rounded-xl bg-surface-container/60 border border-border-dark backdrop-blur-xl relative overflow-hidden group hover:border-white/25 transition-all duration-300">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-aura-orange/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <span className="text-[24px] xl:text-[28px] leading-[36px] tracking-[-0.02em] font-bold text-paper-pure whitespace-nowrap">
                  IT PLN
                </span>
                <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant font-medium tabular-nums shrink-0">
                  &apos;26
                </span>
              </div>
              <div className="text-[14px] leading-[20px] font-semibold text-paper-pure/95">
                Informatics Eng.
              </div>
              <div className="font-mono text-[11px] leading-[16px] text-on-surface-variant truncate mt-0.5">
                West Jakarta · Robotics
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/80 text-[10px] font-mono text-aura-orange whitespace-nowrap">
                  IRC Club
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/80 text-[10px] font-mono text-on-surface-variant">
                  S1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column (Cols 6-9): Prismatic Holographic Focal Window */}
        <div className="lg:col-span-4 min-h-[400px] lg:min-h-[420px] rounded-2xl bg-surface-container-low/50 border border-border-dark backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
          <div className="absolute inset-0 bg-gradient-to-br from-aura-violet/25 via-transparent to-aura-orange/20 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-aura-violet/35 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-primary font-semibold">
              GRID // LAT-6.1754
            </span>
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.08em] text-on-surface-variant">
              CORE.SYS.01
            </span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-6">
            <div className="relative flex items-center justify-center w-40 h-40">
              <div className="absolute inset-0 rounded-full border border-primary/30 border-dashed animate-orbit-slow" />
              <div className="absolute inset-2 rounded-full border border-aura-orange/30 animate-orbit-reverse" />
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-aura-violet to-aura-orange p-[2px] flex items-center justify-center shadow-[0_0_40px_rgba(110,68,255,0.6)] backdrop-blur-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {!imgError ? (
                  <img
                    src="/assets/aistudio/profile_45cd97a0.jpg"
                    alt="M. Jagad Arthoseno"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full rounded-[14px] object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full rounded-[14px] bg-surface-container-lowest flex items-center justify-center">
                    <span className="text-[20px] font-black text-paper-pure tracking-tighter">
                      JAY
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 px-4 py-1.5 rounded-full bg-surface-glass-dark border border-border-dark backdrop-blur-xl flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-ping" aria-hidden="true" />
              <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-paper-pure uppercase whitespace-nowrap">
                JAGAD.DEV · SYS RUNNING
              </span>
              <Terminal className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5">
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.08em] text-on-surface-variant/85 tabular-nums">
              LATENCY · 18ms
            </span>
            <span className="font-mono text-[11px] leading-[14px] tracking-[0.08em] text-tertiary">
              STABLE PROTOCOL
            </span>
          </div>
        </div>

        {/* Right Column (Cols 10-12): Telemetry, Drift & Featured Preview */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-surface-container/70 border border-border-dark backdrop-blur-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-status-emerald" />
                </span>
                <span className="font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-paper-pure">
                  Focus Orbit
                </span>
              </div>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant tabular-nums">
                2026.Q1
              </span>
            </div>
            <p className="text-[14px] leading-[20px] text-on-surface-variant">
              Full-Stack Web Architecture &amp; Intelligent Robotics Club (IRC) hardware exploration.
            </p>
            <div className="flex items-center justify-between pt-1 font-mono text-[11px] leading-[14px] text-on-surface-variant">
              <span>LOCATION</span>
              <span className="text-paper-pure font-semibold">WEST JAKARTA / IDN</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-surface-container-low/80 border border-border-dark backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/25 font-mono text-[11px] leading-[14px] text-primary">
                LATEST BUILD
              </span>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">NOV 2026</span>
            </div>
            <h2 className="text-[20px] leading-[26px] font-bold text-paper-pure group-hover:text-primary transition-colors">
              Personal Portfolio Web
            </h2>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1 line-clamp-2">
              Swiss-editorial design system with live light refraction and performance tuning.
            </p>

            <div className="mt-4 p-3 rounded-lg bg-canvas-dark/90 border border-border-dark flex items-center justify-between gap-2">
              <div className="space-y-0.5 min-w-0">
                <div className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                  FRAMEWORK
                </div>
                <div className="font-mono text-[12px] leading-[16px] text-paper-pure font-medium truncate">
                  Laravel · Python
                </div>
              </div>
              <a
                aria-label="Open Personal Portfolio Web live demo"
                className="w-8 h-8 rounded-full bg-surface-container-high border border-border-dark flex items-center justify-center text-paper-pure hover:bg-primary hover:text-ink-primary transition-all shrink-0"
                href="https://portfolio-website-theta-lyart-40.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="px-4 py-2.5 rounded-lg bg-surface-container/40 border border-border-dark/60 flex items-center justify-between">
            <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
              COMMITS (2026)
            </span>
            <span className="font-mono text-[12px] leading-[16px] font-semibold text-tertiary tabular-nums">
              380+ PUSHES
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Micro-Strip */}
      <div className="mt-10 pt-4 border-t border-border-dark/60 flex flex-wrap items-center justify-between gap-4 text-on-surface-variant font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase">
        <div>EST 2023 // RPL → INFORMATICS IT PLN</div>
        <button
          type="button"
          onClick={() => onNavigate('about')}
          className="hidden sm:flex items-center gap-2 hover:text-paper-pure transition-colors cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span>SCROLL DOWN TO EXPLORE</span>
          <span aria-hidden="true">↓</span>
        </button>
        <div>PRECISION ENGINEERING · WEST JAKARTA</div>
      </div>

      <SectionStarStrip
        index="00"
        label="IDENTITY & PROFILE"
        caption="M. Jagad Arthoseno (*18) — Full-Stack Developer & Informatics Engineering"
      />
    </section>
  );
}
