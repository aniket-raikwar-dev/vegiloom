import { useId } from 'react'

const variants = {
  deep: { fill: 'url(#pouchDeep)', text: '#ffffff', accent: '#f2d27a', band: '#e08a2e', bandText: '#ffffff', win: '#fffaf0', crimp: 'url(#crimp)' },
  cream: { fill: 'url(#pouchCream)', text: '#2b624e', accent: '#e08a2e', band: '#2b624e', bandText: '#ffffff', win: '#fff4d6', crimp: 'url(#crimpDark)' },
  sage: { fill: 'url(#pouchSage)', text: '#ffffff', accent: '#ffffff', band: '#d9532f', bandText: '#ffffff', win: '#fffaf0', crimp: 'url(#crimp)' },
}

export function Chip({ className, style }) {
  return (
    <svg viewBox="0 0 130 130" className={className} style={style} aria-hidden="true">
      <g>
        <g filter="url(#rough)">
          <ellipse cx="65" cy="66" rx="50" ry="44" fill="url(#chipGrad)" />
        </g>
        <g filter="url(#roughSm)">
          <ellipse cx="62" cy="62" rx="40" ry="34" fill="url(#chipHi)" />
        </g>
        <g fill="#fff" opacity=".35">
          <ellipse cx="44" cy="50" rx="8" ry="5" transform="rotate(-20 44 50)" />
          <ellipse cx="78" cy="58" rx="6" ry="4" transform="rotate(15 78 58)" />
          <ellipse cx="60" cy="82" rx="7" ry="4" />
        </g>
        <g fill="#a35c06" opacity=".28">
          <ellipse cx="86" cy="80" rx="7" ry="4" transform="rotate(25 86 80)" />
          <ellipse cx="38" cy="74" rx="5" ry="3" />
          <ellipse cx="70" cy="42" rx="5" ry="3" />
        </g>
        <ellipse cx="65" cy="66" rx="49" ry="43" fill="none" stroke="#b86c0a" strokeOpacity=".35" strokeWidth="2" />
      </g>
    </svg>
  )
}

export function Stick({ className, style }) {
  return (
    <svg viewBox="0 0 36 168" className={className} style={style} aria-hidden="true">
      <g>
        <g filter="url(#roughSm)">
          <rect x="8" y="6" width="20" height="158" rx="6" fill="url(#stickGrad)" />
        </g>
        <rect x="12" y="12" width="4" height="146" rx="2" fill="#fff" opacity=".45" />
        <g fill="#a35c06" opacity=".22">
          <rect x="20" y="30" width="5" height="12" rx="2" />
          <rect x="19" y="80" width="6" height="9" rx="2" />
          <rect x="20" y="124" width="5" height="14" rx="2" />
        </g>
      </g>
    </svg>
  )
}

export function Pouch({ className, style, variant = 'deep', product = 'chips', label }) {
  const a = variants[variant] || variants.deep
  const title = label ?? (product === 'chips' ? 'POTATO CHIPS' : 'POTATO STICKS')
  const windowContent = product === 'chips' ? (
    <g>
      <g transform="translate(-88 -66) scale(.7) rotate(-18 65 65)"><Chip /></g>
      <g transform="translate(-6 -72) scale(.7) rotate(12 65 65)"><Chip /></g>
      <g transform="translate(-64 -4) scale(.7) rotate(25 65 65)"><Chip /></g>
      <g transform="translate(0 -6) scale(.7) rotate(-8 65 65)"><Chip /></g>
    </g>
  ) : (
    <g>
      {[-66, -44, -22, 0, 22, 44].map((x, t) => (
        <g key={x} transform={`translate(${x} ${-56 + (t % 2) * 5}) scale(.62) rotate(${(t - 2.5) * 7} 18 85)`}>
          <Stick />
        </g>
      ))}
    </g>
  )
  return (
    <svg viewBox="0 0 300 420" className={className} style={style} role="img" aria-label={`${label ?? 'Vegiloom'} pouch`}>
      <ellipse cx="150" cy="404" rx="118" ry="10" fill="#000" opacity=".14" />
      <path d="M18 30 Q14 120 12 215 Q10 330 22 392 Q150 412 278 392 Q290 330 288 215 Q286 120 282 30 Z" fill={a.fill} />
      <path d="M18 30 Q14 120 12 215 Q10 330 22 392 Q150 412 278 392 Q290 330 288 215 Q286 120 282 30 Z" fill="url(#gloss)" />
      <path d="M18 30 Q14 120 12 215 Q10 330 22 392 Q150 412 278 392 Q290 330 288 215 Q286 120 282 30 Z" fill="#000" filter="url(#grain)" opacity=".45" />
      <path d="M18 30 Q150 22 282 30 L282 6 Q150 -2 18 6 Z" fill={a.fill} />
      <path d="M18 30 Q150 22 282 30 L282 6 Q150 -2 18 6 Z" fill={a.crimp} />
      <path d="M22 392 Q150 412 278 392 L278 378 Q150 398 22 378 Z" fill={a.crimp} opacity=".8" />
      <g transform="translate(150 78)" textAnchor="middle">
        <path d="M-17 -20 L0 10 L17 -20" fill="none" stroke={a.accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <text y="42" fill={a.text} fontFamily="Marcellus, serif" fontSize="31" letterSpacing="2">VEGILOOM</text>
        <text y="62" fill={a.accent} fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="9" letterSpacing="2.6">CRAFTING FUTURE OF FOOD</text>
      </g>
      <g transform="translate(150 226) scale(.96)">
        <ellipse rx="96" ry="76" fill={a.win} />
        <ellipse rx="96" ry="76" fill="none" stroke={a.accent} strokeWidth="3" />
        {windowContent}
      </g>
      <rect x="40" y="312" width="220" height="44" rx="22" fill={a.band} />
      <text x="150" y="340" textAnchor="middle" fill={a.bandText} fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="15" letterSpacing="1.5">{title}</text>
    </svg>
  )
}

export function Bag({ className, style, product = 'chips', grade = 'A GRADE' }) {
  const path = 'M30 40 L270 40 Q282 200 276 380 Q150 396 24 380 Q18 200 30 40 Z'
  const windowContent = product === 'chips' ? (
    <g>
      <g transform="translate(-52 -50) scale(.5) rotate(-15 65 65)"><Chip /></g>
      <g transform="translate(-8 -46) scale(.5) rotate(20 65 65)"><Chip /></g>
      <g transform="translate(-40 -8) scale(.5) rotate(5 65 65)"><Chip /></g>
    </g>
  ) : (
    <g>
      {[-30, -14, 2, 18].map((x, t) => (
        <g key={x} transform={`translate(${x} -40) scale(.46) rotate(${(t - 1.5) * 8} 18 85)`}>
          <Stick />
        </g>
      ))}
    </g>
  )
  return (
    <svg viewBox="0 0 300 420" className={className} style={style} role="img" aria-label="Bulk bag">
      <ellipse cx="150" cy="404" rx="120" ry="9" fill="#000" opacity=".14" />
      <path d={path} fill="url(#kraft)" />
      <path d={path} fill="url(#gloss)" opacity=".5" />
      <path d={path} fill="#000" filter="url(#grain)" opacity=".5" />
      <path d="M30 40 Q150 12 270 40 L268 62 Q150 36 32 62 Z" fill="#d6bd8d" />
      <path d="M32 62 Q150 36 268 62" fill="none" stroke="#b79660" strokeWidth="2" />
      <path d="M60 52 Q150 30 240 52" fill="none" stroke="#b79660" strokeOpacity=".6" strokeWidth="2" strokeDasharray="4 6" />
      <rect x="48" y="96" width="204" height="250" rx="20" fill="url(#pouchDeep)" />
      <g transform="translate(150 140)" textAnchor="middle">
        <path d="M-13 -16 L0 8 L13 -16" fill="none" stroke="#f2d27a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <text y="34" fill="#fff" fontFamily="Marcellus, serif" fontSize="25" letterSpacing="2">VEGILOOM</text>
      </g>
      <g transform="translate(150 222)">
        <circle r="46" fill="#fffaf0" />
        {windowContent}
      </g>
      <text x="150" y="288" textAnchor="middle" fill="#f2d27a" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="10" letterSpacing="3">DEHYDRATED</text>
      <text x="150" y="306" textAnchor="middle" fill="#fff" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="15" letterSpacing="1.4">POTATO {product === 'chips' ? 'CHIPS' : 'STICKS'}</text>
      <rect x="104" y="316" width="92" height="20" rx="10" fill="#e08a2e" />
      <text x="150" y="330.5" textAnchor="middle" fill="#fff" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="1.4">{grade}</text>
    </svg>
  )
}

export function Seal({ className, text = 'A GRADE' }) {
  const id = `seal${useId().replace(/:/g, '')}`
  const ring = `${text} • `.repeat(4)
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={`${text} quality`}>
      <circle cx="100" cy="100" r="98" fill="#4caf50" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5" />
      <path id={id} d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" fill="none" />
      <text fill="#fff" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="17">
        <textPath href={`#${id}`} textLength="420" lengthAdjust="spacing">{ring}</textPath>
      </text>
      <path d="M100 138 C74 128 66 98 80 74 C98 78 108 92 100 138 Z" fill="#fff" />
      <path d="M100 138 C126 128 134 98 120 74 C102 78 92 92 100 138 Z" fill="#fff" opacity=".7" />
    </svg>
  )
}
