import { Camera } from './Icons'

export function ProfileAvatar() {
  return (
    <div className="relative h-[76px] w-[76px] shrink-0">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(180deg,#f2f2f2_0%,#ddd_100%)]">
        <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="skin" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#f7d7c4" />
              <stop offset="100%" stopColor="#efc2a8" />
            </linearGradient>
          </defs>
          <rect width="96" height="96" fill="#ececec" />
          <circle cx="48" cy="36" r="18" fill="url(#skin)" />
          <path d="M30 85c2-15 14-24 18-24s16 9 18 24" fill="#1f2937" />
          <path d="M27 38c2-16 12-25 22-25 13 0 22 10 23 24-5-3-10-6-13-11-5 7-15 12-32 12Z" fill="#2c1f1c" />
          <circle cx="40" cy="37" r="2" fill="#33231d" />
          <circle cx="56" cy="37" r="2" fill="#33231d" />
          <path d="M43 47c3 2 7 2 10 0" stroke="#c77f6b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white shadow-md">
        <Camera className="h-3.5 w-3.5" />
      </div>
    </div>
  )
}
