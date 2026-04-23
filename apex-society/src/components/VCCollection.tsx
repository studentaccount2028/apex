import { NFT_CARDS } from '../data/competition'

export default function VCCollection() {
  return (
    <section style={{ backgroundColor: '#010828' }} className="py-16 lg:py-24">
      <div className="max-w-[1831px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-8">
          <h2
            className="font-grotesk text-[32px] sm:text-[45px] md:text-[55px] lg:text-[60px] uppercase leading-tight text-cream"
            style={{ margin: 0 }}
          >
            Collection of<br />
            <span className="ml-12 md:ml-24 lg:ml-32">
              <span className="font-condiment normal-case text-neon">VC</span>{' '}Firms
            </span>
          </h2>

          <div className="flex flex-col items-start cursor-pointer group">
            <div className="flex items-end gap-3">
              <span className="font-grotesk text-[32px] sm:text-[45px] md:text-[55px] lg:text-[60px] uppercase text-cream leading-none">
                SEE
              </span>
              <div className="flex flex-col leading-none pb-1">
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream">ALL</span>
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream">CREATORS</span>
              </div>
            </div>
            <div className="w-full h-[6px] sm:h-[8px] lg:h-[10px] mt-2 bg-neon group-hover:opacity-80 transition-opacity duration-200" />
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFT_CARDS.map((card, i) => (
            <div
              key={i}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.video}
                  autoPlay loop muted playsInline
                />
              </div>
              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase text-cream/70" style={{ margin: 0 }}>
                    RARITY SCORE:
                  </p>
                  <p className="font-mono text-[16px] text-cream" style={{ margin: 0 }}>{card.score}</p>
                </div>
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg,#b724ff,#7c3aed)', border: 'none', cursor: 'pointer' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
