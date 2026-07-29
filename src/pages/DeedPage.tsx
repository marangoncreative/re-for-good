import { useParams } from 'react-router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getDeed } from '../data/deeds'

export default function DeedPage() {
  const { id } = useParams()
  const deed = id ? getDeed(id) : undefined

  if (!deed) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-light text-[#1F2937] mb-4">Deed not found</h1>
          <a href="/#impact" className="btn-primary text-xs px-6 py-3 inline-block">
            Back to Proof of Impact
          </a>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Certificate header */}
        <section className="bg-[#1B5E2A] text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-3">Digital Deed</p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-xs font-semibold rounded-full">
                {deed.status}
              </span>
              <span className="font-mono text-sm text-[#22C55E]">{deed.id}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light mb-2">{deed.title}</h1>
            <p className="text-white/70 text-sm">
              {deed.subtitle} · {deed.material} · {deed.workshop} · {deed.date}
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <img
              src={deed.image}
              alt={`${deed.title} — before and after`}
              className="w-full rounded-xl border border-[#E5E7EB]"
            />

            <div>
              <h2 className="section-label mb-3">Summary</h2>
              <p className="text-[#4B5563] leading-relaxed">{deed.summary}</p>
              <p className="text-xs text-[#9CA3AF] mt-3">{deed.standards}</p>
            </div>

            {/* What was done */}
            <div>
              <h2 className="section-label mb-4">What was done</h2>
              <ul className="space-y-3">
                {deed.interventions.map((item) => (
                  <li
                    key={item.title}
                    className="border-l-2 border-[#22C55E] pl-4 py-1"
                  >
                    <p className="text-sm font-semibold text-[#1F2937]">{item.title}</p>
                    <p className="text-sm text-[#4B5563]">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h2 className="section-label mb-4">Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deed.impacts.map((impact) => (
                  <div
                    key={impact.label}
                    className="bg-[#F0FFF4] rounded-xl p-5 border border-[#22C55E]/20"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-[#6B7280] mb-1">
                      {impact.label}
                    </p>
                    <p className="text-lg font-semibold text-[#1B5E2A] mb-2">{impact.value}</p>
                    <p className="text-xs text-[#4B5563] leading-relaxed">{impact.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain / next step */}
            <div className="rounded-xl border border-dashed border-[#22C55E]/40 bg-[#F0FFF4] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#22C55E] mb-2">
                Verification path
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed">{deed.blockchainNote}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/#impact" className="btn-outline text-xs px-6 py-3">
                ← All Digital Deeds
              </a>
              <a href="/" className="btn-primary text-xs px-6 py-3">
                Back to reforgood.org
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
