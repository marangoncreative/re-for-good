import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-brand', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 })
      gsap.fromTo('.hero-tagline', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.25 })
      gsap.fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', delay: 0.4 })
      gsap.fromTo('.hero-buttons', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.55 })
      gsap.fromTo('.hero-visual', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.45 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-10 md:pt-16 md:pb-12 text-center">
        <p className="hero-brand text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B5E2A] mb-6">
          RE for Good
        </p>

        <h1 className="hero-tagline text-2xl md:text-3xl lg:text-[2.5rem] font-light text-[#1F2937] leading-snug mb-4">
          Rome’s waste, remade as lasting craft.
        </h1>

        <p className="hero-sub text-base md:text-lg text-[#6B7280] leading-relaxed mb-9 max-w-xl mx-auto">
          Each piece gets a Digital Deed — what was saved, how culture held, what nature gained.
        </p>

        <div className="hero-buttons flex flex-wrap justify-center gap-3">
          <a href="#impact" className="btn-primary px-7 py-3">
            Proof of Impact
          </a>
          <a href="#projects" className="btn-outline px-7 py-3">
            Explore RE Lab
          </a>
          <a
            href="/tevere-game"
            className="inline-flex items-center justify-center px-7 py-3 rounded text-sm font-semibold font-mono bg-black text-[#22C55E] border border-[#22C55E] transition-colors duration-200 hover:bg-[#22C55E] hover:text-black"
          >
            Play teve[RE] Game
          </a>
        </div>
      </div>

      <div className="hero-visual w-full">
        <img
          src="/assets/chess-hero.png"
          alt="7 Hills of Roma chess set — Pinus pinea, recycled Roman plastic, Roman travertine"
          className="w-full h-[48vh] md:h-[62vh] object-cover object-center"
        />
      </div>
    </section>
  )
}
