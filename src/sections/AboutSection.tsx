import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  'Turn waste into certified art and RWA-NFTs',
  'Clean neighborhoods through decentralized action',
  'Earn RE Tokens for environmental contribution',
  'Transparent blockchain-based impact tracking',
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="about-text grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - heading */}
          <div>
            <span className="section-label block mb-3">About</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] leading-snug">
              What is <span className="text-[#22C55E] font-normal">RE Token</span>?
            </h2>
          </div>

          {/* Right - description */}
          <div>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">
              RE Token is a transformative movement born in the heart of Rome. We bridge ancient heritage 
              with cutting-edge technology through <strong className="text-[#1F2937]">Regenerative Finance (ReFi)</strong>. 
              Every piece of waste becomes a Digital Deed — a unique RWA-NFT that proves your environmental impact 
              on the blockchain.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-8">
              While others see trash, we see the raw material for the next <strong className="text-[#1F2937]">REnaissance</strong>. 
              Our community-funded ecosystem turns discarded materials into monumental public art, 
              powered by decentralized governance and transparent blockchain technology.
            </p>

            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#" className="btn-primary mt-8 inline-block">
              Read the Manifesto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
