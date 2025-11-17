export default function EyeDivider(){
  return (
    <div className="relative my-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 100" className="h-10 w-20 text-cyan-300">
          <defs>
            <radialGradient id="pupil" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>
          </defs>
          <path d="M10 50 Q100 -10 190 50 Q100 110 10 50Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <circle cx="100" cy="50" r="10" fill="url(#pupil)" />
        </svg>
      </div>
    </div>
  )
}
