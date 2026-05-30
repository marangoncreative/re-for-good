import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: 'Beyond Digital Art', desc: 'Physical creations minted as RWA-NFTs — permanent proof of your impact.' },
  { title: 'Perpetual Royalties', desc: 'Built-in royalty system. Earn every time your art is traded.' },
  { title: 'Global Visibility', desc: 'Showcase in RE Shop, galleries, and our Rome laboratory.' },
  { title: 'Proof of Impact', desc: 'Quantified environmental contribution rewards you with RE Tokens.' },
]

export default function ArtistsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.artist-text > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.artist-item', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="artists" ref={ref} className="bg-[#F0FFF4] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="artist-text grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="artist-item">
                <h4 className="text-sm font-semibold text-[#1F2937] mb-1">{f.title}</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <span className="section-label block mb-3">For Artists</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] leading-snug mb-4">
              Minting the Future
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">
              From Rome to the World: The REnaissance of Waste. Your physical masterpieces 
              become permanent digital assets — bridging ancient craft with blockchain technology.
            </p>
            <a href="https://re-token-1adb01.webflow.io/#artists" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs inline-block">Become a RE Artist</a>
          </div>
        </div>
      </div>
    </section>
  )
}
