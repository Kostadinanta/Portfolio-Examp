import { useState } from 'react';
import {
  CV_TECH_STACK,
  TECH_CATEGORY_TABS,
  type TechCategory,
} from '../data/portfolioData';
import { filterTechStack, selectTechSkillItem } from '../utils/portfolioHelpers';
import { SectionStarStrip } from './SectionStarStrip';
import { TechIcon } from './TechIcons';

export function CosmicLabSection() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');
  const [selectedId, setSelectedId] = useState<string>(CV_TECH_STACK[0].id);

  const visibleItems = filterTechStack(CV_TECH_STACK, activeCategory);
  const activeSkill = selectTechSkillItem(visibleItems, selectedId);

  const handleCategoryChange = (cat: TechCategory) => {
    setActiveCategory(cat);
    const nextList = filterTechStack(CV_TECH_STACK, cat);
    if (!nextList.some((item) => item.id === selectedId) && nextList.length > 0) {
      setSelectedId(nextList[0].id);
    }
  };

  return (
    <section id="cosmic-lab" className="py-16 w-full relative scroll-mt-24">
      <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-surface-container-lowest/90 border border-border-dark relative overflow-hidden shadow-2xl starfield-bg">
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-tr from-aura-violet/25 via-aura-orange/15 to-transparent rounded-full blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-gradient-to-bl from-aura-orange/20 via-primary/15 to-transparent rounded-full blur-[100px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Orbital Tech Spotlight */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-4 space-y-5">
            <div className="relative flex items-center justify-center w-56 h-56">
              <div className="absolute inset-0 rounded-full border border-primary/30 border-dashed animate-orbit-slow" />
              <div className="absolute inset-4 rounded-full border border-aura-orange/40 animate-orbit-reverse" />
              <div className="absolute inset-8 rounded-full border border-white/15 animate-orbit-slow" />
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-aura-violet via-primary-container to-aura-orange p-[1.5px] shadow-[0_0_40px_rgba(110,68,255,0.55)]">
                <div className="w-full h-full rounded-[15px] bg-canvas-dark/95 backdrop-blur-xl flex flex-col items-center justify-center px-2 text-center">
                  <TechIcon id={activeSkill.id} className="w-10 h-10" />
                  <span className="font-mono text-[10px] leading-[13px] text-paper-pure tracking-[0.08em] uppercase mt-1">
                    {activeSkill.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Skill Detail Card */}
            <div className="w-full p-5 rounded-2xl bg-surface-glass-dark border border-border-dark backdrop-blur-xl space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] leading-[14px] uppercase tracking-[0.08em] text-primary">
                  {activeSkill.role}
                </span>
                <span className="font-mono text-[10px] leading-[14px] uppercase tracking-[0.08em] text-tertiary">
                  CV VERIFIED
                </span>
              </div>
              <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
                {activeSkill.name}
              </h3>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">
                {activeSkill.cvContext}
              </p>
            </div>
          </div>

          {/* Right Programming Stack & Icon Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
                (05.5) // CV TECH ARSENAL
              </span>
              <h2 className="text-[30px] leading-[34px] sm:text-[40px] sm:leading-[44px] font-bold text-paper-pure tracking-[-0.02em]">
                Programming Languages &amp; Tools
              </h2>
              <p className="text-[15px] leading-[24px] text-on-surface-variant">
                Full-stack development stack verified in CV — spanning backend engines, responsive
                UI frameworks, local environments, and robotics scripting.
              </p>
            </div>

            {/* Category Filter Controls */}
            <div
              role="group"
              aria-label="Filter programming skills by category"
              className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-high/50 border border-border-dark"
            >
              {TECH_CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[11px] leading-[14px] transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-paper-pure text-ink-primary font-semibold shadow-sm'
                        : 'text-on-surface-variant hover:text-paper-pure hover:bg-surface-container-high/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Interactive Programming Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {visibleItems.map((item) => {
                const isSelected = item.id === activeSkill.id;
                const activeBorder =
                  item.accent === 'orange'
                    ? 'border-aura-orange/80 bg-surface-container-high/80'
                    : item.accent === 'tertiary'
                    ? 'border-tertiary/80 bg-surface-container-high/80'
                    : 'border-primary/80 bg-surface-container-high/80';

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(item.id)}
                    className={`text-left p-3.5 rounded-2xl border backdrop-blur-xl transition-all duration-200 cursor-pointer flex flex-col gap-2.5 group ${
                      isSelected
                        ? activeBorder
                        : 'border-border-dark bg-surface-container-high/40 hover:border-white/30 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-canvas-dark/80 border border-border-dark flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <TechIcon id={item.id} className="w-7 h-7" />
                      </div>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected
                            ? item.accent === 'orange'
                              ? 'bg-aura-orange'
                              : item.accent === 'tertiary'
                              ? 'bg-tertiary'
                              : 'bg-primary'
                            : 'bg-white/20'
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <div className="text-[14px] leading-[18px] font-bold text-paper-pure">
                        {item.name}
                      </div>
                      <div className="font-mono text-[10px] leading-[14px] text-on-surface-variant mt-0.5 truncate">
                        {item.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="05.5"
        label="CV TECH ARSENAL"
        caption="PHP, Laravel, Laragon, Python, React, Go, TailwindCSS & Git/GitHub"
      />
    </section>
  );
}
