import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  'Documented restorations as Digital Deeds',
  'Urban waste and fallen timber remade as craft',
  'Cultural heritage kept in the material, not erased',
  'Transparent impact records — open verification when ready',
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
          <div>
            <span className="section-label block mb-3">About</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2937] leading-snug">
              What is <span className="text-[#22C55E] font-normal">RE for Good</span>?
            </h2>
          </div>

          <div>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">
              Born in Rome, RE for Good turns discarded material into lasting craft —
              and records each act as a <strong className="text-[#1F2937]">Digital Deed</strong>:
              what was done, what culture was kept, what nature gained.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed mb-8">
              RE Lab in Rome is where the work happens — restoration, upcycling,
              and limited editions. While others see trash, we see the raw material
              for the next <strong className="text-[#1F2937]">REnaissance</strong>.
            </p>

            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#impact" className="btn-primary mt-8 inline-block">
              See Proof of Impact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
