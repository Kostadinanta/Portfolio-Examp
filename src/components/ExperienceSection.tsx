import { MapPin } from 'lucide-react';
import { SectionStarStrip } from './SectionStarStrip';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 w-full scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3 border-b border-border-dark pb-5">
        <div>
          <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
            (02) // TRACK RECORD
          </span>
          <h2 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] font-bold text-paper-pure tracking-[-0.02em] mt-1">
            Experience &amp; Education
          </h2>
        </div>
        <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-on-surface-variant uppercase">
          2023 — Present · Verified Record
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Work Experience (Cols 1-7) */}
        <div className="lg:col-span-7 p-6 sm:p-7 lg:p-8 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl relative overflow-hidden space-y-6 hover:border-white/25 transition-colors">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-aura-violet/20 to-aura-orange/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[11px] leading-[14px] uppercase tracking-[0.1em] font-semibold">
              LEADERSHIP &amp; ENGINEERING
            </span>
            <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-on-surface-variant">
              Mei 2025 – Nov 2025
            </span>
          </div>

          <div>
            <h3 className="text-[24px] sm:text-[28px] leading-[34px] tracking-[-0.01em] font-bold text-paper-pure">
              Lead Full-Stack Developer
            </h3>
            <div className="text-[15px] leading-[24px] text-primary font-medium mt-0.5">
              Neumedira Indonesia
            </div>
          </div>

          <div className="space-y-3 pt-2 text-on-surface/85">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-aura-orange mt-2.5 shrink-0" aria-hidden="true" />
              <p className="text-[15px] leading-[24px]">
                Led a multidisciplinary team of <strong className="text-paper-pure">8 developers</strong>{' '}
                in designing and building responsive, high-performance, and scalable websites using{' '}
                <strong className="text-paper-pure">Laravel</strong> and{' '}
                <strong className="text-paper-pure">TailwindCSS</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-aura-violet mt-2.5 shrink-0" aria-hidden="true" />
              <p className="text-[15px] leading-[24px]">
                Translated high-fidelity UI designs into structured, reusable code; engineered routing
                structures, relational database schemas, and core application workflows.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" aria-hidden="true" />
              <p className="text-[15px] leading-[24px]">
                Conducted regular code reviews, automated diagnostics, debugging, and continuous feature
                updates to ensure 99.9% application uptime and stability.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border-dark/60 flex flex-wrap gap-2">
            {[
              'Team of 8 Devs',
              'Laravel',
              'TailwindCSS',
              'Database Design',
              'System Maintenance',
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-surface-container-high text-xs font-mono text-paper-pure"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Education Stack (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl hover:border-white/25 transition-all space-y-3">
            <div className="flex items-center justify-between text-on-surface-variant font-mono text-[12px] leading-[16px]">
              <span>2026 – Sekarang</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                West Jakarta
              </span>
            </div>
            <div>
              <h4 className="text-[20px] leading-[26px] font-bold text-paper-pure">
                Institut Teknologi PLN
              </h4>
              <p className="text-[15px] leading-[24px] text-on-surface-variant">
                S1 Informatics Engineering
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 font-mono text-[11px] leading-[14px] uppercase">
                Active Undergraduate
              </span>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                IRC Member
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-low/70 border border-border-dark backdrop-blur-xl hover:border-white/25 transition-all space-y-3">
            <div className="flex items-center justify-between text-on-surface-variant font-mono text-[12px] leading-[16px]">
              <span>2023 – 2026</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Banjarbaru
              </span>
            </div>
            <div>
              <h4 className="text-[20px] leading-[26px] font-bold text-paper-pure">
                SMK Telkom Banjarbaru
              </h4>
              <p className="text-[15px] leading-[24px] text-on-surface-variant">
                Rekayasa Perangkat Lunak (Software Eng.)
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-paper-pure border border-border-dark font-mono text-[11px] leading-[14px] uppercase">
                Graduated
              </span>
              <span className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                Vocational Diploma
              </span>
            </div>
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="02"
        label="TRACK RECORD"
        caption="Lead Full-Stack Experience & Academic Foundation"
      />
    </section>
  );
}
