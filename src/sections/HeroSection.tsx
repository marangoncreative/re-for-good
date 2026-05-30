import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 })
      gsap.fromTo('.hero-buttons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 })
      gsap.fromTo('.hero-video', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="bg-white pt-6 pb-4">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Tagline - single sentence like bitcoin.org */}
        <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl font-light text-[#1F2937] leading-tight mb-10 max-w-3xl mx-auto">
          RE Token is a regenerative finance ecosystem that transforms waste into art through blockchain.
        </h1>

        {/* 3 CTAs like bitcoin.org */}
        <div className="hero-buttons flex flex-wrap justify-center gap-3 mb-10">
          <a href="#about" className="btn-primary px-7 py-3">
            Get started with RE
          </a>
          <a href="#projects" className="btn-outline px-7 py-3">
            Explore Projects
          </a>
          <a href="#" className="btn-outline px-7 py-3">
            Get RE Token
          </a>
        </div>

        {/* Video link */}
        <div className="hero-video">
          <button className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#1F2937] transition-colors">
            <span className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center text-white text-xs">
              ▶
            </span>
            What is RE Token?
          </button>
        </div>
      </div>
    </section>
  )
}
