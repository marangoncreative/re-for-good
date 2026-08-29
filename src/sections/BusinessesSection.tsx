import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { title: 'Corporate partnerships', desc: 'Turn corporate waste into public art and documented circular impact.' },
  { title: 'Circular commissions', desc: 'Commission restorations, editions, or site-specific installations.' },
  { title: 'Waste-as-value', desc: 'Your surplus material fuels craft and restoration through barter or exchange.' },
  { title: 'Impact reporting', desc: 'Digital Deeds and transparent records for ESG and CSR storytelling.' },
]

export default function BusinessesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.biz-text > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.biz-item', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="businesses" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="biz-text grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label block mb-3">For Businesses</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] leading-snug mb-4">
              Secure Your Legacy
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">
              Etch your brand into Rome&apos;s circular future. Every partnership becomes
              a documented record of environmental stewardship — craft you can show, not just claim.
            </p>
            <div className="flex gap-3">
              <a href="/#community" className="btn-primary text-xs">Partner with RE</a>
              <a href="#projects" className="btn-outline text-xs">View Projects</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="biz-item">
                <h4 className="text-sm font-semibold text-[#1F2937] mb-1">{b.title}</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
