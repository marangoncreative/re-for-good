import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Tokenomics', href: '/#tokenomics' },
  { label: 'Community', href: '/#community' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-[#1B5E2A] text-white">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          RE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/tevere-game"
            className="inline-flex items-center justify-center text-xs px-5 py-2 rounded font-semibold font-mono bg-black text-[#22C55E] border border-[#22C55E] hover:bg-[#22C55E] hover:text-black transition-colors"
          >
            teve[RE] Game
          </a>
          <a
            href="#"
            className="btn-primary text-xs px-5 py-2"
          >
            Get RE Token
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-white/80 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/tevere-game"
            className="inline-block text-sm font-semibold font-mono bg-black text-[#22C55E] border border-[#22C55E] px-4 py-2 rounded hover:bg-[#22C55E] hover:text-black transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            teve[RE] Game
          </a>
          <a href="#" className="btn-primary text-xs px-5 py-2 inline-block">
            Get RE Token
          </a>
        </div>
      )}
    </nav>
  )
}
