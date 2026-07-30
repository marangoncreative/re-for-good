import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-header > *', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      })
      gsap.fromTo('.project-feature', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.projects-list', start: 'top 80%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="projects-header mb-12">
          <span className="section-label block mb-3">Projects</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1F2937]">
            Ecosystem Projects
          </h2>
        </div>

        <div className="projects-list space-y-12">

          {/* 1. REvision */}
          <div className="project-feature bg-[#F0FFF4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img src="/assets/revision-logo.png" alt="REvision A-EYE" className="w-full h-full object-cover min-h-[400px]" />
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  LIVE — MVP READY
                </span>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">REvision</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  An AI-powered web app that analyzes waste materials, recommends upcycling and recycling pathways, and calculates carbon footprints — all recorded on the blockchain.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  Every waste entry is geolocated and stored on-chain, building the city's first decentralized waste data layer. Material type, volume, carbon credit value, and ecosystem rewards are calculated in real time.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  From detection to blockchain verification, REvision turns every piece of waste into a data point for a cleaner city.
                </p>
                <a href="https://revsn.app/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-6 py-3 w-fit">
                  Launch App
                </a>
              </div>
            </div>
          </div>

          {/* 2. QUADRATUS AETERNUS */}
          <div className="project-feature bg-[#F0FFF4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img src="/assets/quadratus.jpg" alt="Quadratus Aeternus" className="w-full h-full object-cover min-h-[400px]" />
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  2027 — LIVING SCULPTURE
                </span>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">QUADRATUS AETERNUS</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  The first in a series of <strong>living sculpture projects</strong>. Projected annual energy output: <strong>350,000–400,000 kWh</strong>.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  <strong>15–20%</strong> of generated energy will light the surrounding neighborhood. Powers <strong>EV charging stations</strong> and <strong>RE workshops</strong> for token holders.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  Hosts all recycling and upcycling art projects. Inspired by the Pantheon — a decentralized energy hub for the circular economy.
                </p>
                <span className="inline-block px-6 py-3 rounded text-xs font-semibold bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed w-fit">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* 3. 7 HILLS OF ROMA */}
          <div className="project-feature bg-[#F0FFF4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-1">
                <img src="/assets/chess-1.jpg" alt="7 Hills of Roma chess set" className="w-full h-48 object-cover" />
                <img src="/assets/chess-2.jpg" alt="Chess set in park" className="w-full h-48 object-cover" />
                <img src="/assets/chess-3.jpg" alt="Recycled plastic pieces" className="w-full h-48 object-cover" />
                <img src="/assets/chess-4.jpg" alt="Wooden pinea pieces" className="w-full h-48 object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  2026 — LIMITED EDITION
                </span>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">7 HILLS OF ROMA</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  Fallen <em>Pinus pinea</em> trees of Rome, Rome's plastic waste, and Rome's travertine stones come together in a 7-edition chess set for the Seven Hills of Rome.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-2">
                  A collaboration between <strong>RE Token</strong> and{' '}
                  <a href="https://www.ridaje.com/" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] font-semibold hover:underline">Ridaje Roma</a>.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  Every material and process used in this chess set is recorded on the blockchain. Only 7 editions exist.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/deed/RE-LAB-2026-001" className="btn-primary text-xs px-6 py-3 w-fit">
                    View Digital Deed
                  </a>
                  <a href="https://www.vinted.it/items/9043786790-27-of-7-hills-of-rome-collectable-chess-set?referrer=catalog" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-6 py-3 w-fit">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. UP */}
          <div className="project-feature bg-[#F0FFF4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-1">
                <img src="/assets/up-1.jpg" alt="UP climbing wall" className="w-full h-48 object-cover" />
                <img src="/assets/up-2.jpg" alt="UP wall detail" className="w-full h-48 object-cover" />
                <img src="/assets/up-3.jpg" alt="Tire tower" className="w-full h-48 object-cover" />
                <img src="/assets/up-4.jpg" alt="Tire texture" className="w-full h-48 object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  2026 — AWARD WINNER
                </span>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">UP</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  Discarded ATAC bus tires become a <strong>climbing wall and play area</strong>. First waste-to-art tokenization project.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  <strong>RO Guiltless Plastic: Urban and Public Design Category — Mention Prize Winner.</strong> Every tire tracked from collection to installation on the blockchain.
                </p>
                <a href="https://www.youtube.com/watch?v=5y0XNUp6v-Y" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-6 py-3 w-fit">
                  Watch Video
                </a>
              </div>
            </div>
          </div>

          {/* 5. RE LAB */}
          <div className="project-feature bg-[#F0FFF4] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src="/assets/re-lab.png"
                alt="RE Lab — carved heritage wood"
                className="w-full h-full object-cover min-h-[400px] object-[45%_40%]"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full w-fit mb-4">
                  2027 — CRAFT & EXPERIENCE HUB
                </span>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">RE LAB</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  A living workshop in Rome where <strong>disadvantaged individuals learn craft skills</strong> —
                  restoration, upcycling, and making — turning waste and heritage materials into lasting value.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                  In parallel, RE Lab develops <strong>upper-segment experiential tourism</strong> for visitors
                  from around the world: curated journeys into Rome’s history, regenerative craft, and
                  environmental awareness — not sightseeing alone, but immersion with meaning.
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  Social inclusion and cultural tourism meet in one place: skills for those who need them,
                  and unforgettable, high-quality experiences for those who seek Rome with a conscience.
                </p>
                <a href="/#impact" className="btn-primary text-xs px-6 py-3 w-fit">
                  View Digital Deeds
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
