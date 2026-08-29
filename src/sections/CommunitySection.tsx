import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const programmeSupporters = [
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
  { label: 'Proof of Impact', href: '/#impact' },
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
      gsap.fromTo('.recognition-block', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.recognition-block', start: 'top 85%' }
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
        <div className="community-text text-center mb-12">
          <span className="section-label block mb-3 text-[#22C55E]">Community</span>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Rome&apos;s circular craft community
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Workshops, partnerships, and documented impact — building the REnaissance from the ground up.
          </p>
        </div>

        {/* Recognition — Roma Rigenera Impresa */}
        <div className="recognition-block max-w-3xl mx-auto mb-10 rounded-xl border border-white/15 bg-white/5 px-6 py-8 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#22C55E] block mb-3">
            Recognition
          </span>
          <p className="text-base md:text-lg text-white font-light leading-relaxed mb-4">
            Selected among the 10 winning projects of{' '}
            <strong className="font-semibold text-white">Roma Rigenera Impresa 2026</strong>.
          </p>
          <p className="text-sm text-white/55 leading-relaxed">
            Prize eligibility required Italian residence documentation; RE was recognized on stage
            and in the official selection. Institutional supporters of the programme include:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programmeSupporters.map((p) => (
            <span
              key={p}
              className="partner-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
            >
              {p}
            </span>
          ))}
        </div>

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
