import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { NETWORK_LINKS } from '../data/portfolioData';
import { SectionStarStrip } from './SectionStarStrip';

const EMAIL_ADDRESS = 'jagadartho250@gmail.com';

export function ContactSection() {
  const [copiedState, setCopiedState] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopyEmail = async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        const tempInput = document.createElement('input');
        tempInput.value = EMAIL_ADDRESS;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, EMAIL_ADDRESS.length);
        copied = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch {
        copied = false;
      }
    }

    setCopiedState(copied ? 'copied' : 'error');
    window.setTimeout(() => setCopiedState('idle'), 2400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aura-violet/10 to-aura-orange/10 rounded-3xl pointer-events-none" />

      <div className="p-6 sm:p-8 lg:p-14 rounded-3xl bg-surface-container-lowest/90 border border-border-dark backdrop-blur-2xl relative overflow-hidden shadow-2xl space-y-10">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-border-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-status-emerald animate-ping" aria-hidden="true" />
            <span className="font-mono text-[11px] leading-[14px] uppercase tracking-[0.1em] text-primary">
              (06) // GET IN TOUCH
            </span>
          </div>

          <h2 className="text-[36px] leading-[40px] sm:text-[52px] sm:leading-[54px] lg:text-[64px] lg:leading-[64px] tracking-[-0.03em] font-extrabold text-paper-pure">
            Let&apos;s build something{' '}
            <span className="italic font-serif text-aura-orange font-normal text-[1.08em]">
              intelligent.
            </span>
          </h2>

          <p className="text-[18px] leading-[28px] font-medium text-on-surface-variant max-w-xl">
            Open for software engineering internships, web development collaborations, and robotics
            projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            className="px-7 py-4 rounded-full bg-paper-pure text-ink-primary text-[16px] sm:text-[18px] leading-[28px] font-bold hover:bg-primary transition-all duration-200 flex items-center justify-between sm:justify-start gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            href={`mailto:${EMAIL_ADDRESS}`}
          >
            <span className="truncate">{EMAIL_ADDRESS}</span>
            <span className="font-mono text-[13px]" aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={`px-5 py-4 rounded-full bg-surface-container-high/80 border text-[14px] font-medium transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap ${
              copiedState === 'copied'
                ? 'border-status-emerald text-tertiary'
                : 'text-paper-pure border-border-dark hover:border-paper-pure/40'
            }`}
          >
            {copiedState === 'copied' ? (
              <Check className="w-4 h-4 text-tertiary" aria-hidden="true" />
            ) : (
              <Copy className="w-4 h-4" aria-hidden="true" />
            )}
            <span>
              {copiedState === 'copied'
                ? 'Copied!'
                : copiedState === 'error'
                ? 'Failed to copy'
                : 'Copy Email'}
            </span>
          </button>
        </div>

        <div className="pt-8 border-t border-border-dark/60">
          <div className="font-mono text-[11px] leading-[14px] uppercase text-on-surface-variant tracking-[0.1em] mb-4">
            DIRECT NETWORK LINKS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {NETWORK_LINKS.map((link) => {
              const valueColor =
                link.accent === 'orange'
                  ? 'text-aura-orange'
                  : link.accent === 'tertiary'
                  ? 'text-tertiary'
                  : 'text-paper-pure';
              const hoverBorder =
                link.accent === 'orange'
                  ? 'hover:border-aura-orange'
                  : link.accent === 'tertiary'
                  ? 'hover:border-tertiary'
                  : 'hover:border-primary';
              const arrowHover =
                link.accent === 'orange'
                  ? 'group-hover:text-aura-orange'
                  : link.accent === 'tertiary'
                  ? 'group-hover:text-tertiary'
                  : 'group-hover:text-primary';

              return (
                <a
                  key={`${link.label}-${link.value}`}
                  className={`p-3.5 rounded-xl bg-surface-container-high/50 border border-border-dark flex items-center justify-between ${hoverBorder} hover:bg-surface-container-high transition-all group`}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] leading-[14px] text-on-surface-variant">
                      {link.label}
                    </div>
                    <div className={`text-[14px] leading-[20px] font-semibold mt-0.5 truncate ${valueColor}`}>
                      {link.value}
                    </div>
                  </div>
                  <span
                    className={`font-mono text-[12px] text-on-surface-variant ${arrowHover} transition-colors shrink-0 ml-2`}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <SectionStarStrip
        index="06"
        label="GET IN TOUCH"
        caption="Available for Internships, Full-Stack Builds & Robotics Collaborations"
        reverse
      />
    </section>
  );
}
