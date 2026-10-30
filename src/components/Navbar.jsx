import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'B2B', href: '#b2b' },
  { label: 'Snacks', href: '#snacks' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-emerald-700 text-white grid place-items-center font-bold">V</span>
          <span className="font-semibold text-stone-900 tracking-tight">Vegiloom Foods</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-stone-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-emerald-700 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition-colors">
          Contact Our Team
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-stone-200"
          >
            <ul className="px-6 py-4 space-y-3 text-sm text-stone-700">
              {links.map((l) => (
                <li key={l.href}><a onClick={() => setOpen(false)} href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
