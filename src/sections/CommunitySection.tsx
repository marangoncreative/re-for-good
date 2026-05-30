import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  'Roma Rigenera Impresa',
  'European Union',
  'Italian Ministry of Interior',
  'City of Rome',
  'Ashoka Italia',
  'UNO',
  'Mondo Digitale',
]

const links = [
  { label: 'RE Shop', href: '#' },
  { label: 'Ciao Vicino! Workshops', href: '#' },
  { label: 'Proof of Impact', href: '#' },
  { label: 'RE-Scholarship', href: '#' },
]

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.community-text > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.partner-tag', { y: 10, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.05,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="community" ref={ref} className="bg-[#1B5E2A] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* RE Coin */}
        <div className="text-center mb-8">
          <img
            src="/assets/token-coin.png"
            alt="RE Token Coin"
            className="w-44 h-44 mx-auto object-contain opacity-80"
          />
        </div>

        <div className="community-text text-center mb-12">
          <span className="section-label block mb-3 text-[#22C55E]">Community</span>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Building the World's First RWA Art Ecosystem
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            A Future Powered by Rome & Blockchain. Join the REnaissance.
          </p>
        </div>

        {/* Partners */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {partners.map((p) => (
            <span
              key={p}
              className="partner-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
            >
              ★ {p}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#22C55E] hover:text-white transition-colors"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
