interface SectionStarStripProps {
  index: string;
  label: string;
  caption: string;
  reverse?: boolean;
}

const CREAM_STAR_ITEMS = [
  { id: 's1', size: 'w-5 h-5', duration: '[animation-duration:6s]', opacity: 'opacity-95' },
  { id: 's2', size: 'w-3.5 h-3.5', duration: '[animation-duration:9s]', opacity: 'opacity-75' },
  { id: 's3', size: 'w-6 h-6', duration: '[animation-duration:7s]', opacity: 'opacity-100' },
  { id: 's4', size: 'w-4 h-4', duration: '[animation-duration:8s]', opacity: 'opacity-80' },
  { id: 's5', size: 'w-5 h-5', duration: '[animation-duration:5.5s]', opacity: 'opacity-90' },
  { id: 's6', size: 'w-3 h-3', duration: '[animation-duration:10s]', opacity: 'opacity-70' },
  { id: 's7', size: 'w-6 h-6', duration: '[animation-duration:6.5s]', opacity: 'opacity-95' },
  { id: 's8', size: 'w-4 h-4', duration: '[animation-duration:8.5s]', opacity: 'opacity-85' },
];

export function SectionStarStrip({
  index,
  label,
  caption,
  reverse = false,
}: SectionStarStripProps) {
  return (
    <div
      data-testid="section-star-strip"
      className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#090A0D] via-[#24114E] to-[#0B0C10] border border-[#6E44FF]/35 px-4 py-3.5 sm:px-6 sm:py-4 shadow-[0_18px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(202,190,255,0.2)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 relative overflow-hidden"
    >
      {/* Ambient Violet Aura Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/3 w-72 h-28 rounded-full bg-[#6E44FF]/25 blur-3xl"
      />

      {/* Continuous Right-to-Left Rotating Cream Stars Stream */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative sm:absolute sm:inset-y-0 sm:left-0 sm:right-0 h-8 sm:h-auto flex items-center overflow-hidden order-2 sm:order-none"
      >
        <div className="w-max flex items-center gap-8 sm:gap-10 animate-marquee-rtl">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 sm:gap-10 pr-8 sm:pr-10">
              {CREAM_STAR_ITEMS.map((star) => (
                <svg
                  key={`${dup}-${star.id}`}
                  viewBox="0 0 48 48"
                  className={`${star.size} ${star.opacity} animate-orbit-reverse ${star.duration} shrink-0 drop-shadow-[0_0_8px_rgba(250,244,232,0.55)]`}
                >
                  <path
                    d="M24 2 L28.6 19.4 L46 24 L28.6 28.6 L24 46 L19.4 28.6 L2 24 L19.4 19.4 Z"
                    fill="#FAF4E8"
                    stroke="#EFE0C4"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 12 L26.2 21.8 L36 24 L26.2 26.2 L24 36 L21.8 26.2 L12 24 L21.8 21.8 Z"
                    transform="rotate(45 24 24)"
                    fill="#F3E5CC"
                    fillOpacity="0.85"
                  />
                </svg>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Left Frosted Identity Chip */}
      <div className="relative z-10 flex items-center gap-3.5 min-w-0 bg-[#0B0C0E]/75 backdrop-blur-md border border-[#F6EFE2]/20 rounded-xl px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.45)] max-w-full sm:max-w-[74%]">
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF4E8]/12 backdrop-blur-md border border-[#FAF4E8]/35 flex items-center justify-center shrink-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className={`w-6 h-6 [animation-duration:7s] drop-shadow-[0_0_8px_rgba(250,244,232,0.55)] ${
              reverse ? 'animate-orbit-slow' : 'animate-orbit-reverse'
            }`}
          >
            <path
              d="M24 3 L28.8 19.2 L45 24 L28.8 28.8 L24 45 L19.2 28.8 L3 24 L19.2 19.2 Z"
              fill="#FAF4E8"
              stroke="#EFE0C4"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="2.4" fill="#211146" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[11px] leading-[14px] tracking-[0.1em] uppercase text-[#CABEFF] font-semibold">
            {index} · {label}
          </div>
          <div className="text-[13px] sm:text-[14px] leading-[19px] font-bold text-[#FAF4E8] truncate mt-0.5">
            {caption}
          </div>
        </div>
      </div>
    </div>
  );
}
