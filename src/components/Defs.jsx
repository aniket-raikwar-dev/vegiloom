export default function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="chipGrad" cx="38%" cy="32%" r="80%">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset=".45" stopColor="#f7bf45" />
          <stop offset=".85" stopColor="#e39a1f" />
          <stop offset="1" stopColor="#c97b10" />
        </radialGradient>
        <radialGradient id="chipHi" cx="30%" cy="25%" r="55%">
          <stop offset="0" stopColor="#fff6cf" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff6cf" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="stickGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#d28a17" />
          <stop offset=".35" stopColor="#ffd466" />
          <stop offset=".65" stopColor="#f2b134" />
          <stop offset="1" stopColor="#c97b10" />
        </linearGradient>
        <linearGradient id="pouchDeep" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#3f8068" />
          <stop offset=".55" stopColor="#2b624e" />
          <stop offset="1" stopColor="#1c4535" />
        </linearGradient>
        <linearGradient id="pouchCream" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset=".55" stopColor="#f1ebdc" />
          <stop offset="1" stopColor="#ddd3bd" />
        </linearGradient>
        <linearGradient id="pouchSage" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8fc0ab" />
          <stop offset=".55" stopColor="#62a088" />
          <stop offset="1" stopColor="#467f69" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".18" stopColor="#fff" stopOpacity=".3" />
          <stop offset=".32" stopColor="#fff" stopOpacity="0" />
          <stop offset=".8" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".24" />
        </linearGradient>
        <linearGradient id="kraft" x1="0" x2="1">
          <stop offset="0" stopColor="#e6d2a9" />
          <stop offset=".5" stopColor="#f4e6c6" />
          <stop offset="1" stopColor="#d6bd8d" />
        </linearGradient>
        <pattern id="crimp" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0H6" stroke="#fff" strokeOpacity=".28" strokeWidth="1.6" />
        </pattern>
        <pattern id="crimpDark" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0H6" stroke="#2b624e" strokeOpacity=".16" strokeWidth="1.6" />
        </pattern>
        <filter id="rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
        <filter id="roughSm" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="2" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.5  0 0 0 0 0.3  0 0 0 0 0.05  0 0 0 .2 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}
