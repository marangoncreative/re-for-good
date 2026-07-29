import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { deeds } from '../data/deeds'

gsap.registerPlugin(ScrollTrigger)

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.impact-header > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.impact-card', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.impact-list', start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="impact" ref={ref} className="bg-[#F0FFF4] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="impact-header mb-12">
          <span className="section-label block mb-3">Proof of Impact</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] mb-4">
            RE Lab Digital Deeds
          </h2>
          <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl">
            Each restoration is documented as a Digital Deed — what was done, how culture was
            preserved, and how nature benefited. On-chain verification coming soon.
          </p>
        </div>

        <div className="impact-list space-y-8">
          {deeds.map((deed) => (
            <article
              key={deed.id}
              className="impact-card bg-white rounded-xl overflow-hidden border border-[#22C55E]/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {deed.images && deed.images.length > 1 ? (
                  <div className="grid grid-cols-2 gap-1 min-h-[280px]">
                    {deed.images.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${deed.title} — photo ${i + 1}`}
                        className="w-full h-full object-cover min-h-[140px]"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={deed.image}
                    alt={`${deed.title} — before and after`}
                    className="w-full h-full object-cover min-h-[280px]"
                  />
                )}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full">
                      {deed.status}
                    </span>
                    <span className="text-xs font-mono text-[#6B7280]">{deed.id}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1F2937] mb-1">{deed.title}</h3>
                  <p className="text-sm text-[#9CA3AF] mb-4">{deed.subtitle} · {deed.workshop}</p>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5">{deed.summary}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {deed.impacts.slice(0, 4).map((impact) => (
                      <div key={impact.label} className="bg-[#F0FFF4] rounded-lg p-3">
                        <p className="text-[10px] uppercase tracking-wider text-[#6B7280] mb-1">
                          {impact.label}
                        </p>
                        <p className="text-sm font-semibold text-[#1B5E2A] leading-snug">
                          {impact.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a href={`/deed/${deed.id}`} className="btn-primary text-xs px-6 py-3 w-fit">
                    View Digital Deed
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
