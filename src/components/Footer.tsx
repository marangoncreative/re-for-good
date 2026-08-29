export default function Footer() {
  return (
    <footer className="bg-[#1B5E2A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold">RE</span>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Rome · Craft · Proof of Impact
            </p>
            <a href="/#community" className="btn-primary text-xs px-5 py-2 mt-4 inline-block">
              Get involved
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Impact', href: '/#impact' },
                { label: 'Projects', href: '/#projects' },
                { label: 'About', href: '/#about' },
                { label: 'Community', href: '/#community' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              For You
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Citizens', href: '/#citizens' },
                { label: 'Businesses', href: '/#businesses' },
                { label: 'Artists', href: '/#artists' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Proof of Impact', href: '/#impact' },
                { label: 'REvision App', href: 'https://revsn.app' },
                { label: 'Digital Deeds', href: '/#impact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="https://revsn.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#22C55E] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>REvision App →</span>
              </a>
              <p className="text-[10px] text-white/40 mt-1">
                Explore our interactive revision tool
              </p>
              <a
                href="/tevere-game"
                className="inline-block text-xs font-mono bg-black text-[#22C55E] border border-[#22C55E] px-3 py-1.5 rounded hover:bg-[#22C55E] hover:text-black transition-colors mt-4"
              >
                teve[RE] Game
              </a>
              <p className="text-[10px] text-white/40 mt-1">
                Play the Tevere mining prototype
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs text-white/40">
            © RE for Good. Revolution of Good.
          </span>
          <span className="text-xs text-white/40">
            Rome · Circular craft · Digital Deeds
          </span>
        </div>
      </div>
    </footer>
  )
}
