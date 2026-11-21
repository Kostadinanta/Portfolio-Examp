import { Braces, Code2, Terminal, Users, Webhook, Wrench } from 'lucide-react';
import { SectionStarStrip } from './SectionStarStrip';

const CORE_STACK = [
  { name: 'PHP', dot: 'bg-aura-violet', hover: 'hover:border-primary' },
  { name: 'Laravel', dot: 'bg-aura-orange', hover: 'hover:border-aura-orange' },
  { name: 'Blade', dot: 'bg-primary', hover: 'hover:border-primary' },
  { name: 'TailwindCSS', dot: 'bg-tertiary', hover: 'hover:border-tertiary' },
  { name: 'React', dot: 'bg-primary', hover: 'hover:border-primary' },
  { name: 'JavaScript', dot: 'bg-aura-orange', hover: 'hover:border-aura-orange' },
  { name: 'Go', dot: 'bg-tertiary', hover: 'hover:border-tertiary' },
  { name: 'Python', dot: 'bg-primary', hover: 'hover:border-primary' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 w-full scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3 border-b border-border-dark pb-5">
        <div>
          <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
            (03) // CAPABILITIES
          </span>
          <h2 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] font-bold text-paper-pure tracking-[-0.02em] mt-1">
            Tech Stack &amp; Skills
          </h2>
        </div>
        <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-on-surface-variant uppercase">
          Runtime · Frameworks · Paradigms
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento 01: Core Engineering */}
        <div className="p-6 lg:p-7 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl relative flex flex-col justify-between space-y-6 group hover:border-primary/40 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[12px] tracking-[0.08em] text-primary">01 // CODE</span>
              <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
              Core Engineering
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">
              Foundational programming languages &amp; web engines.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {CORE_STACK.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high/60 border border-border-dark font-mono text-[12px] leading-[16px] text-paper-pure ${item.hover} transition-colors`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} aria-hidden="true" />
                {item.name}
              </div>
            ))}
          </div>

          <div className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-on-surface-variant/80 border-t border-border-dark/60 pt-3">
            SYNTAX · FULL STACK PARADIGM
          </div>
        </div>

        {/* Bento 02: Tools & Ecosystem */}
        <div className="p-6 lg:p-7 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl relative flex flex-col justify-between space-y-6 group hover:border-aura-orange/40 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[12px] tracking-[0.08em] text-aura-orange">
                02 // OPS
              </span>
              <Wrench className="w-5 h-5 text-aura-orange" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
              Tools &amp; Ecosystem
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">
              Deployment, versioning, and interface protocols.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-surface-container-high/50 border border-border-dark flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-paper-pure shrink-0" aria-hidden="true" />
                <span className="text-[14px] leading-[20px] text-paper-pure font-semibold">
                  Git / GitHub
                </span>
              </div>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                Version Control
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-high/50 border border-border-dark flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Braces className="w-4 h-4 text-paper-pure shrink-0" aria-hidden="true" />
                <span className="text-[14px] leading-[20px] text-paper-pure font-semibold">
                  REST API &amp; JSON
                </span>
              </div>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                Data Contract
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-high/50 border border-border-dark flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Webhook className="w-4 h-4 text-paper-pure shrink-0" aria-hidden="true" />
                <span className="text-[14px] leading-[20px] text-paper-pure font-semibold">
                  Postman / Docker
                </span>
              </div>
              <span className="font-mono text-[11px] leading-[14px] text-tertiary">Configured</span>
            </div>
          </div>

          <div className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-on-surface-variant/80 border-t border-border-dark/60 pt-3">
            STANDARDIZED WORKFLOWS
          </div>
        </div>

        {/* Bento 03: Human & Team Leadership */}
        <div className="p-6 lg:p-7 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl relative flex flex-col justify-between space-y-6 group hover:border-tertiary/40 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[12px] tracking-[0.08em] text-tertiary">
                03 // SYNERGY
              </span>
              <Users className="w-5 h-5 text-tertiary" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
              Human &amp; Team
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">
              Cross-functional collaboration and leadership.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            <div className="border-l-2 border-aura-violet pl-3">
              <div className="text-[14px] leading-[20px] font-semibold text-paper-pure">
                Team Leadership
              </div>
              <div className="font-mono text-[11px] leading-[16px] text-on-surface-variant mt-0.5">
                Steered 8-person dev sprint delivery at Neumedira.
              </div>
            </div>
            <div className="border-l-2 border-aura-orange pl-3">
              <div className="text-[14px] leading-[20px] font-semibold text-paper-pure">
                Design-to-Code Sync
              </div>
              <div className="font-mono text-[11px] leading-[16px] text-on-surface-variant mt-0.5">
                Harmonizing Figma component libraries with code logic.
              </div>
            </div>
            <div className="border-l-2 border-tertiary pl-3">
              <div className="text-[14px] leading-[20px] font-semibold text-paper-pure">
                Systematic Debugging
              </div>
              <div className="font-mono text-[11px] leading-[16px] text-on-surface-variant mt-0.5">
                Structured trace logs, issue resolution, and clean refactors.
              </div>
            </div>
          </div>

          <div className="font-mono text-[11px] leading-[14px] tracking-[0.1em] text-on-surface-variant/80 border-t border-border-dark/60 pt-3">
            COLLABORATIVE CULTURE
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="03"
        label="CAPABILITIES"
        caption="Full-Stack Engineering, DevOps Workflows & Leadership"
        reverse
      />
    </section>
  );
}
