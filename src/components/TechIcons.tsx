export type TechIconId =
  | 'php'
  | 'laravel'
  | 'laragon'
  | 'python'
  | 'react'
  | 'tailwindcss'
  | 'javascript'
  | 'blade'
  | 'go'
  | 'json'
  | 'git'
  | 'mysql';

interface TechIconProps {
  id: TechIconId;
  className?: string;
}

export function TechIcon({ id, className = 'w-7 h-7' }: TechIconProps) {
  switch (id) {
    case 'php':
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <ellipse cx="24" cy="24" rx="21" ry="13" fill="#777BB4" fillOpacity="0.24" stroke="#A6ACE8" strokeWidth="1.8" />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            fill="#E6E8FF"
            fontSize="13.5"
            fontWeight="800"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="-0.5"
          >
            php
          </text>
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path
            d="M10 10L18 14.5V29.5L26 25V15L34 19.5V29.5L18 38.5L10 34V10Z"
            stroke="#FF5A1F"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="#FF5A1F"
            fillOpacity="0.16"
          />
          <path d="M26 25L34 29.5L39 26.5V16.5L34 19.5" stroke="#FFB59E" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'laragon':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <rect x="7" y="7" width="34" height="34" rx="9" fill="#0EA5E9" fillOpacity="0.18" stroke="#38BDF8" strokeWidth="1.8" />
          <path
            d="M26 12L16 26H24L22 36L32 22H24L26 12Z"
            fill="#7DD3FC"
            stroke="#E0F2FE"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path
            d="M24 8C17.5 8 18 11 18 11V15H24.5V16.5H15C15 16.5 10 16 10 23.5C10 31 14.5 30.5 14.5 30.5H17V26.5C17 26.5 16.8 22 21.5 22H28C28 22 32 22.1 32 18V12C32 12 32.5 8 24 8Z"
            fill="#60A5FA"
            fillOpacity="0.85"
          />
          <path
            d="M24 40C30.5 40 30 37 30 37V33H23.5V31.5H33C33 31.5 38 32 38 24.5C38 17 33.5 17.5 33.5 17.5H31V21.5C31 21.5 31.2 26 26.5 26H20C20 26 16 25.9 16 30V36C16 36 15.5 40 24 40Z"
            fill="#FACC15"
            fillOpacity="0.85"
          />
          <circle cx="20.5" cy="11.5" r="1.4" fill="#0B0C0E" />
          <circle cx="27.5" cy="36.5" r="1.4" fill="#0B0C0E" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="3.4" fill="#61DAFB" />
          <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.7" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" stroke="#61DAFB" strokeWidth="1.7" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" stroke="#61DAFB" strokeWidth="1.7" />
        </svg>
      );
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path
            d="M15 20C16.5 14 20.5 12 25.5 13.5C28.8 14.5 30.2 17.2 32.5 17.8C34.8 18.4 36.8 17.4 38 15.5C36.5 21.5 32.5 23.5 27.5 22C24.2 21 22.8 18.3 20.5 17.7C18.2 17.1 16.2 18.1 15 20Z"
            fill="#38BDF8"
          />
          <path
            d="M10 29.5C11.5 23.5 15.5 21.5 20.5 23C23.8 24 25.2 26.7 27.5 27.3C29.8 27.9 31.8 26.9 33 25C31.5 31 27.5 33 22.5 31.5C19.2 30.5 17.8 27.8 15.5 27.2C13.2 26.6 11.2 27.6 10 29.5Z"
            fill="#38BDF8"
            fillOpacity="0.85"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="7" fill="#F7DF1E" fillOpacity="0.2" stroke="#FACC15" strokeWidth="1.8" />
          <text
            x="26"
            y="33"
            textAnchor="middle"
            fill="#FDE047"
            fontSize="16"
            fontWeight="800"
            fontFamily="JetBrains Mono, monospace"
          >
            JS
          </text>
        </svg>
      );
    case 'blade':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <rect x="8" y="10" width="32" height="28" rx="6" fill="#FF5A1F" fillOpacity="0.14" stroke="#FFB59E" strokeWidth="1.7" />
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fill="#FFD5C7"
            fontSize="13.5"
            fontWeight="700"
            fontFamily="JetBrains Mono, monospace"
          >
            {'@{{}}'}
          </text>
        </svg>
      );
    case 'go':
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <rect x="7" y="12" width="34" height="24" rx="12" fill="#00ADD8" fillOpacity="0.2" stroke="#67E8F9" strokeWidth="1.8" />
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fill="#A5F3FC"
            fontSize="15"
            fontWeight="800"
            fontFamily="JetBrains Mono, monospace"
          >
            GO
          </text>
        </svg>
      );
    case 'json':
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#62DF7D" fillOpacity="0.14" stroke="#62DF7D" strokeWidth="1.7" />
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fill="#B1FFB9"
            fontSize="15"
            fontWeight="700"
            fontFamily="JetBrains Mono, monospace"
          >
            {'{ }'}
          </text>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <rect x="10" y="10" width="28" height="28" rx="6" transform="rotate(45 24 24)" fill="#F97316" fillOpacity="0.18" stroke="#FB923C" strokeWidth="1.8" />
          <circle cx="24" cy="18" r="2.6" fill="#FDBA74" />
          <circle cx="24" cy="30" r="2.6" fill="#FDBA74" />
          <circle cx="30" cy="24" r="2.6" fill="#FDBA74" />
          <path d="M24 20.5V27.5M24 21L28.5 23.5" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <ellipse cx="24" cy="14" rx="13" ry="5" fill="#CABEFF" fillOpacity="0.24" stroke="#CABEFF" strokeWidth="1.8" />
          <path d="M11 14V34C11 36.8 16.8 39 24 39C31.2 39 37 36.8 37 34V14" stroke="#CABEFF" strokeWidth="1.8" />
          <path d="M11 24C11 26.8 16.8 29 24 29C31.2 29 37 26.8 37 24" stroke="#CABEFF" strokeWidth="1.6" strokeOpacity="0.7" />
        </svg>
      );
  }
}
