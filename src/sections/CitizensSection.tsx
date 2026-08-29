import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Learn', desc: 'Attend workshops and see how waste becomes lasting craft.' },
  { num: '02', title: 'Collect', desc: 'Bring suitable waste from your home or shop to RE Lab.' },
  { num: '03', title: 'Contribute', desc: 'Your material feeds restorations and limited editions.' },
  { num: '04', title: 'Benefit', desc: 'Enjoy community projects, events, and shared public spaces.' },
]

export default function CitizensSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.citizens-text > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.citizens-step', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="citizens" ref={ref} className="bg-[#F0FFF4] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="citizens-text grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label block mb-3">For Citizens</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] leading-snug mb-4">
              Transform Your Neighborhood
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              RE for Good is a practical way to care for your neighborhood — through craft,
              documented impact, and shared projects. You are not just a visitor; you are part of the work.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((s) => (
              <div key={s.num} className="citizens-step flex items-start gap-4 py-5 border-b border-[#22C55E]/10">
                <span className="text-2xl font-light text-[#22C55E]/40">{s.num}</span>
                <div>
                  <h4 className="text-base font-semibold text-[#1F2937] mb-1">{s.title}</h4>
                  <p className="text-sm text-[#6B7280]">{s.desc}</p>
                </div>
              </div>
            ))}
            <div className="pt-6 flex gap-3">
              <a href="/#community" className="btn-primary text-xs">Get involved</a>
              <a href="https://revsn.app" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
                Try REvision
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
