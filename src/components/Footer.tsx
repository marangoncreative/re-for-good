export default function Footer() {
  return (
    <footer className="bg-[#1B5E2A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold">RE</span>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Rome · Blockchain · Regenerative Finance
            </p>
            <a
              href="#"
              className="btn-primary text-xs px-5 py-2 mt-4 inline-block"
            >
              Get RE Token
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Tokenomics', 'Community'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              For You
            </h4>
            <ul className="space-y-2">
              {['Citizens', 'Businesses', 'Artists', 'Developers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {['Whitepaper', 'RE Shop', 'Proof of Impact', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {item}
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
                className="text-xs text-[#C8A96A] hover:text-white transition-colors flex items-center gap-1 mt-4"
              >
                <span>teve[RE] Game →</span>
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
            © RE Token. Revolution of Good.
          </span>
          <span className="text-xs text-white/40">
            Powered by Rome & Blockchain
          </span>
        </div>
      </div>
    </footer>
  )
}
