import { CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CERTIFICATIONS, type CertificationItem } from '../data/portfolioData';
import { SectionStarStrip } from './SectionStarStrip';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certs" className="py-16 w-full scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 border-b border-border-dark pb-5">
        <div>
          <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-primary uppercase">
            (05) // CREDENTIALS
          </span>
          <h2 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] font-bold text-paper-pure tracking-[-0.02em] mt-1">
            Certifications &amp; Training
          </h2>
        </div>
        <span className="font-mono text-[12px] leading-[16px] tracking-[0.08em] text-on-surface-variant uppercase">
          Industry Standards · Verified
        </span>
      </div>

      <div className="rounded-2xl bg-surface-container-low/60 border border-border-dark backdrop-blur-xl overflow-hidden">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={cert.id}
            className={`p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-container-high/40 transition-colors group ${
              idx < CERTIFICATIONS.length - 1 ? 'border-b border-border-dark' : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-[13px] leading-[18px] text-on-surface-variant min-w-[90px] tabular-nums">
                {cert.date}
              </span>
              <div>
                <h3 className="text-[20px] leading-[26px] font-bold text-paper-pure group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-on-surface-variant mt-0.5">
                  {cert.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto shrink-0">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-border-dark font-mono text-[11px] leading-[14px] text-paper-pure uppercase">
                {cert.type}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                aria-label={`Verify ${cert.title}`}
                className="px-4 py-1.5 rounded-full bg-paper-pure text-ink-primary text-[14px] font-semibold hover:bg-primary transition-all flex items-center gap-1 shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Verify</span>
                <span className="font-mono text-[11px]" aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-surface-container-lowest border border-border-dark p-6 sm:p-8 shadow-2xl space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-tertiary font-mono text-[11px] uppercase tracking-[0.08em]">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>{selectedCert.status}</span>
                </div>
                <h3 id="cert-modal-title" className="text-[22px] leading-[28px] font-bold text-paper-pure">
                  {selectedCert.title}
                </h3>
                <p className="font-mono text-[12px] text-on-surface-variant">
                  {selectedCert.issuer} · {selectedCert.date}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close credential verification dialog"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-surface-container-high border border-border-dark flex items-center justify-center text-paper-pure hover:border-primary transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[14px] leading-[22px] text-on-surface/85">{selectedCert.summary}</p>

            <div className="p-4 rounded-2xl bg-surface-container-low/80 border border-border-dark space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
                <span>CREDENTIAL ID</span>
                <span className="text-primary font-semibold">{selectedCert.credentialCode}</span>
              </div>
              <div className="border-t border-border-dark/70 pt-3 space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-surface-variant">
                  Validated Competencies
                </div>
                {selectedCert.competencies.map((comp) => (
                  <div key={comp} className="flex items-center gap-2 text-[14px] text-paper-pure">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" aria-hidden="true" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-full bg-paper-pure text-ink-primary text-[14px] font-semibold hover:bg-primary transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <SectionStarStrip
        index="05"
        label="CREDENTIALS"
        caption="Verified Industry Training, Cyber Security & Technical Fluency"
        reverse
      />
    </section>
  );
}
