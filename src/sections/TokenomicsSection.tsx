import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const distribution = [
  { label: 'Community \u0026 Restoration Fund', value: '50%', desc: 'LOCKED', color: '#1B5E2A' },
  { label: 'Market Liquidity \u0026 Ecosystem', value: '45%', desc: 'Gradual Release', color: '#22C55E' },
  { label: 'Founder Team \u0026 R\u0026D', value: '5%', desc: 'Locked \u0026 Vested', color: '#C8A96A' },
]

const cycle = [
  { pct: '20%', label: 'Strategic Buy-back' },
  { pct: '30%', label: 'RE-Scholarship' },
  { pct: '50%', label: 'Project Financing' },
]

export default function TokenomicsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.token-header > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.token-dist-item', { x: -20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="tokenomics" ref={ref} className="bg-[#F0FFF4] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="token-header mb-12">
          <span className="section-label block mb-3">Tokenomics</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1F2937]">
            Digital Trust & Regenerative Economy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Distribution */}
          <div>
            <h3 className="text-sm font-semibold text-[#1F2937] mb-6 uppercase tracking-wide">
              Token Distribution
            </h3>

            {/* Big number */}
            <div className="mb-8">
              <span className="text-6xl font-light text-[#1B5E2A]">1,000,000,000</span>
              <p className="text-sm text-[#6B7280] mt-1">Total Supply</p>
            </div>

            {/* Bars */}
            <div className="space-y-4">
              {distribution.map((d) => (
                <div key={d.label} className="token-dist-item">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-[#1F2937]">{d.label}</span>
                    <span className="text-sm font-semibold" style={{ color: d.color }}>{d.value}</span>
                  </div>
                  <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: d.value, backgroundColor: d.color }}
                    />
                  </div>
                  <span className="text-xs text-[#9CA3AF]">{d.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regenerative Cycle */}
          <div>
            <h3 className="text-sm font-semibold text-[#1F2937] mb-6 uppercase tracking-wide">
              The Regenerative Cycle
            </h3>
            <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
              Instead of traditional token burning, we use a "Circular Impact" model. 
              Every transaction fee is reinvested into the ecosystem:
            </p>

            <div className="space-y-4 mb-8">
              {cycle.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="text-2xl font-light text-[#22C55E]">{c.pct}</span>
                  <span className="text-sm text-[#4B5563]">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E5E7EB]">
              <h4 className="text-xs font-semibold text-[#1F2937] uppercase tracking-wide mb-3">
                Value Milestones
              </h4>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li>At $1: 5M tokens unlocked for TeveRE Design Fest</li>
                <li>Every $10: 1M tokens to heritage restoration funds</li>
                <li>EV Charging discounts at 20 stations in Rome</li>
                <li>RE Shop priority access to limited editions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
