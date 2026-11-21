import { Lock, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { PROJECT_CODE_TABS } from '../data/portfolioData';
import { SectionStarStrip } from './SectionStarStrip';

const TONE_CLASS: Record<string, string> = {
  orange: 'text-aura-orange',
  primary: 'text-primary',
  tertiary: 'text-tertiary',
  muted: 'text-on-surface-variant/80',
  pure: 'text-paper-pure',
};

export function ProjectsSection() {
  const [activeTabId, setActiveTabId] = useState<string>(PROJECT_CODE_TABS[0].id);
  const [refreshCount, setRefreshCount] = useState(0);

  const activeTab =
    PROJECT_CODE_TABS.find((tab) => tab.id === activeTabId) ?? PROJECT_CODE_TABS[0];

  const handleCycleTab = () => {
    const currentIndex = PROJECT_CODE_TABS.findIndex((tab) => tab.id === activeTabId);
    const nextTab = PROJECT_CODE_TABS[(currentIndex + 1) % PROJECT_CODE_TABS.length];
    setActiveTabId(nextTab.id);
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <section id="projects" className="py-16 w-full scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3 border-b border-border-dark pb-5">
        <div>
          <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
            (04) // SELECTED WORK
          </span>
          <h2 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] font-bold text-paper-pure tracking-[-0.02em] mt-1">
            Featured Projects
          </h2>
        </div>
        <a
          className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-paper-pure hover:text-primary transition-colors flex items-center gap-1.5 w-fit"
          href="https://github.com/Kostadinanta"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>github.com/Kostadinanta</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Main Project Showcase Bento Box */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-surface-container-low/80 border border-border-dark backdrop-blur-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[300px] bg-gradient-to-r from-aura-violet/20 via-aura-orange/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Project Description (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant uppercase tracking-[0.1em]">
                Nov 2026 – Sekarang
              </span>
              <span className="text-border-dark" aria-hidden="true">·</span>
              <span className="px-2.5 py-0.5 rounded-full bg-aura-orange/10 border border-aura-orange/25 font-mono text-[11px] leading-[14px] text-aura-orange uppercase font-semibold">
                Developer &amp; Architect
              </span>
            </div>

            <div>
              <h3 className="text-[32px] sm:text-[40px] leading-[40px] sm:leading-[44px] tracking-[-0.02em] font-extrabold text-paper-pure">
                Personal Portfolio Web
              </h3>
              <p className="text-[18px] leading-[28px] font-medium text-on-surface-variant mt-2">
                Modern personal portfolio &amp; interactive CV showcase with bespoke editorial bento
                structure.
              </p>
            </div>

            <div className="space-y-2.5 text-[14px] leading-[20px] text-on-surface/85 pt-1">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold" aria-hidden="true">✦</span>
                <span>
                  <strong className="text-paper-pure">Tech Stack:</strong> Python, PHP, Laravel,
                  TailwindCSS &amp; JavaScript
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-aura-orange font-bold" aria-hidden="true">✦</span>
                <span>
                  <strong className="text-paper-pure">Architecture:</strong> Responsive multi-section
                  layout with light refraction and telemetry metrics
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'PHP', 'Laravel', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono text-paper-pure"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                className="px-5 py-2.5 rounded-full bg-paper-pure text-ink-primary text-[14px] font-semibold hover:bg-primary transition-all duration-200 flex items-center gap-1.5 shadow-md hover:-translate-y-0.5 whitespace-nowrap"
                href="https://portfolio-website-theta-lyart-40.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Live Demo</span>
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </a>
              <a
                className="px-5 py-2.5 rounded-full bg-surface-container-high/80 text-paper-pure text-[14px] font-medium border border-border-dark hover:border-paper-pure/40 transition-all duration-200 flex items-center gap-1.5 hover:-translate-y-0.5 whitespace-nowrap"
                href="https://github.com/Kostadinanta/portfolio-website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View Repository</span>
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Project Mock / Visual Frame (Cols 7-12) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-canvas-dark border border-border-dark overflow-hidden shadow-2xl relative">
              {/* Simulated Browser/App Header */}
              <div className="px-4 py-3 bg-surface-container-lowest border-b border-border-dark flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-surface-container-high/60 border border-border-dark font-mono text-[11px] leading-[14px] text-on-surface-variant flex items-center gap-1.5 min-w-0">
                  <Lock className="w-3 h-3 text-tertiary shrink-0" aria-hidden="true" />
                  <span className="truncate">portfolio-website-theta-lyart-40.vercel.app</span>
                </div>
                <button
                  type="button"
                  onClick={handleCycleTab}
                  aria-label="Cycle project code inspection file"
                  className="p-1 rounded-md text-on-surface-variant hover:text-paper-pure hover:bg-surface-container-high transition-colors shrink-0"
                >
                  <RefreshCw
                    className={`w-4 h-4 transition-transform duration-300 ${
                      refreshCount > 0 ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Code Tab Switcher */}
              <div className="px-4 pt-3 bg-surface-container-lowest/60 border-b border-border-dark/60 flex items-center gap-2 overflow-x-auto">
                {PROJECT_CODE_TABS.map((tab) => {
                  const isActive = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3 py-1.5 rounded-t-lg font-mono text-[11px] transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
                        isActive
                          ? 'text-paper-pure bg-canvas-dark border-primary'
                          : 'text-on-surface-variant border-transparent hover:text-paper-pure'
                      }`}
                    >
                      {tab.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Inside Screen Frame */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-surface-container-lowest to-surface font-mono text-[11px] space-y-3">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>{activeTab.filename}</span>
                  <span className="text-tertiary">{activeTab.status}</span>
                </div>

                <div className="p-4 rounded-xl bg-canvas-dark/90 border border-border-dark/60 font-mono text-[12px] sm:text-[13px] leading-[20px] space-y-1.5 text-paper-pure overflow-x-auto">
                  {activeTab.lines.map((line, lineIdx) => (
                    <p key={lineIdx} className={line.indent ? 'pl-4 whitespace-nowrap' : 'whitespace-nowrap'}>
                      {line.parts.map((part, partIdx) => (
                        <span key={partIdx} className={TONE_CLASS[part.tone ?? 'pure']}>
                          {part.text}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-2 rounded bg-surface-container-high/40 border border-border-dark/60">
                    <div className="text-tertiary font-bold tabular-nums">100%</div>
                    <div className="text-[10px] text-on-surface-variant">Lighthouse</div>
                  </div>
                  <div className="p-2 rounded bg-surface-container-high/40 border border-border-dark/60">
                    <div className="text-primary font-bold tabular-nums">&lt; 0.4s</div>
                    <div className="text-[10px] text-on-surface-variant">First Paint</div>
                  </div>
                  <div className="p-2 rounded bg-surface-container-high/40 border border-border-dark/60">
                    <div className="text-aura-orange font-bold">Fluid</div>
                    <div className="text-[10px] text-on-surface-variant">Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="04"
        label="SELECTED WORK"
        caption="Production Architecture, Telemetry & Swiss-Editorial Design"
      />
    </section>
  );
}
