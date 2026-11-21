interface SectionStarStripProps {
  index: string;
  label: string;
  caption: string;
  reverse?: boolean;
}

export function SectionStarStrip({
  index,
  label,
  caption,
  reverse = false,
}: SectionStarStripProps) {
  return (
    <div
      data-testid="section-star-strip"
      className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#F6EFE2] via-[#FAF4E8] to-[#EFE5D2] border border-[#DFD2BA] px-4 py-3.5 sm:px-6 sm:py-4 shadow-[0_14px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.85)] flex items-center justify-between gap-4 relative overflow-hidden"
    >
      {/* Soft Glassy Specular Highlight Across Cream Surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-16 w-44 h-24 rounded-full bg-white/55 blur-2xl"
      />

      <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 min-w-0">
        {/* Glassy Rotating Star Medallion */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/45 backdrop-blur-xl border border-white/90 shadow-[0_8px_20px_rgba(17,18,21,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] flex items-center justify-center shrink-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-white/75 via-aura-violet/15 to-aura-orange/15 pointer-events-none"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className={`relative z-10 w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_2px_6px_rgba(110,68,255,0.25)] ${
              reverse ? 'animate-orbit-reverse' : 'animate-orbit-slow'
            }`}
          >
            <defs>
              <linearGradient id={`glassStar-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="48%" stopColor="#CABEFF" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id={`glassStarInner-${index}`} x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#6E44FF" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            {/* Outer 4-Point Glassy Star */}
            <path
              d="M24 3 L28.8 19.2 L45 24 L28.8 28.8 L24 45 L19.2 28.8 L3 24 L19.2 19.2 Z"
              fill={`url(#glassStar-${index})`}
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Secondary Diagonal Glass Facet */}
            <path
              d="M24 11 L26.5 21.5 L37 24 L26.5 26.5 L24 37 L21.5 26.5 L11 24 L21.5 21.5 Z"
              transform="rotate(45 24 24)"
              fill={`url(#glassStarInner-${index})`}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="2.6" fill="#FFFFFF" fillOpacity="0.95" />
          </svg>
        </div>

        <div className="min-w-0">
          <div className="font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-[#5C5343] font-semibold">
            {index} · {label}
          </div>
          <div className="text-[14px] sm:text-[15px] leading-[20px] font-bold text-[#111215] truncate mt-0.5">
            {caption}
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/55 backdrop-blur-md border border-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-aura-orange" aria-hidden="true" />
        <span className="font-mono text-[10px] leading-[14px] tracking-[0.1em] uppercase text-[#111215] font-semibold whitespace-nowrap">
          GLASS STAR // CREAM
        </span>
      </div>
    </div>
  );
}
