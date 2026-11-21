import { Bot, Layers, Network } from 'lucide-react';
import { SectionStarStrip } from './SectionStarStrip';

export function VisionSection() {
  return (
    <section id="about" className="py-16 lg:py-24 relative scroll-mt-24">
      <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-surface-container-lowest/90 border border-border-dark relative backdrop-blur-2xl overflow-hidden shadow-2xl">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-aura-violet/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
            (01) // VISION &amp; INTERESTS
          </span>
        </div>

        <div className="max-w-4xl space-y-4">
          <blockquote className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[56px] lg:leading-[60px] text-paper-pure font-bold tracking-[-0.03em]">
            Passionate about <span className="text-primary font-normal">Web Development</span>,{' '}
            <span className="italic font-serif text-aura-orange font-normal text-[1.08em]">
              Robotics
            </span>
            , and Intelligent Systems, eager to lead and contribute as part of the{' '}
            <span className="underline decoration-white/25 decoration-2 underline-offset-8">
              Intelligent Robotic Club (IRC)
            </span>
            .
          </blockquote>
          <p className="text-[18px] leading-[28px] font-medium text-on-surface-variant pt-2 max-w-2xl">
            Focused on bridging scalable full-stack web architecture with intelligent hardware
            systems and algorithmic telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
          <div className="p-6 rounded-2xl bg-surface-container-high/40 border border-border-dark backdrop-blur-md hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[12px] tracking-[0.08em] text-on-surface-variant group-hover:text-primary transition-colors">
                01
              </span>
              <Layers className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">Full-Stack Web</h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-2">
              Laravel, React, Blade &amp; TailwindCSS. Crafting responsive interfaces and structured
              backend execution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-high/40 border border-border-dark backdrop-blur-md hover:border-aura-orange/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[12px] tracking-[0.08em] text-on-surface-variant group-hover:text-aura-orange transition-colors">
                02
              </span>
              <Network className="w-5 h-5 text-aura-orange" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
              System Architecture
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-2">
              Routing, database schema design, and clean RESTful API logic built for scalable
              production traffic.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-high/40 border border-border-dark backdrop-blur-md hover:border-tertiary/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[12px] tracking-[0.08em] text-on-surface-variant group-hover:text-tertiary transition-colors">
                03
              </span>
              <Bot className="w-5 h-5 text-tertiary" aria-hidden="true" />
            </div>
            <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure">
              Robotics &amp; AI
            </h3>
            <p className="text-[14px] leading-[20px] text-on-surface-variant mt-2">
              Intelligent Robotic Club (IRC) exploration, microcontroller interfacing, and
              intelligent automation logic.
            </p>
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="01"
        label="VISION & INTERESTS"
        caption="Bridging Web Architecture, Robotics & Intelligent Systems"
        reverse
      />
    </section>
  );
}
