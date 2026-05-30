import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const audiences = [
  {
    icon: '👤',
    title: 'Citizens',
    desc: 'Transform your neighborhood. Turn waste into value and earn RE Tokens.',
    cta: 'Learn more',
    href: '#citizens',
  },
  {
    icon: '💼',
    title: 'Businesses',
    desc: 'Secure your legacy. Corporate RWA-NFTs and transparent ESG reporting.',
    cta: 'Learn more',
    href: '#businesses',
  },
  {
    icon: '🎨',
    title: 'Artists',
    desc: 'Mint the future. Physical art meets blockchain through RWA-NFTs.',
    cta: 'Learn more',
    href: '#artists',
  },
]

export default function AudienceSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.audience-title', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' }
      })
      gsap.fromTo('.audience-card', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-[#1B5E2A] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="audience-title text-center text-white/70 text-base mb-10">
          Get a quick overview for
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <a
              key={a.title}
              href={a.href}
              className="audience-card group block bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl mb-4 block">{a.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{a.title}</h3>
              <span className="text-sm text-[#22C55E] group-hover:underline">{a.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
