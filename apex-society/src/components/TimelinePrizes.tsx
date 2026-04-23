import { TIMELINE, PRIZES } from '../data/competition'

export default function TimelinePrizes() {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 mb-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* Timeline */}
        <div
          className="flex-1 liquid-glass rounded-[28px] p-8 lg:p-10"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="font-mono text-[10px] uppercase text-neon mb-8"
            style={{ letterSpacing: '.25em' }}
          >
            Timeline
          </div>

          <div className="flex flex-col gap-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-6">
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 w-6">
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                    style={{ background: '#6FFF00', boxShadow: '0 0 8px rgba(111,255,0,0.5)' }}
                  />
                  {i < TIMELINE.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{ background: 'rgba(111,255,0,0.2)', minHeight: 40 }}
                    />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <div
                    className="font-mono text-[11px] uppercase text-neon mb-1"
                    style={{ letterSpacing: '.15em' }}
                  >
                    {item.date}
                  </div>
                  <div className="font-grotesk text-[18px] lg:text-[22px] uppercase text-cream mb-2">
                    {item.phase}
                  </div>
                  <p
                    className="font-mono text-[13px] uppercase leading-relaxed"
                    style={{ color: 'rgba(239,244,255,0.55)', margin: 0 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prizes + video */}
        <div className="lg:w-[420px] flex flex-col gap-6">

          <div
            className="liquid-glass rounded-[28px] p-8 lg:p-10"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div
              className="font-mono text-[10px] uppercase text-neon mb-8"
              style={{ letterSpacing: '.25em' }}
            >
              Prizes
            </div>

            <div className="flex flex-col gap-4">
              {PRIZES.map((p, i) => (
                <div
                  key={i}
                  className="liquid-glass rounded-[20px] p-5 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  style={{ border: i === 0 ? '1px solid rgba(111,255,0,0.3)' : '1px solid transparent' }}
                >
                  <div>
                    <div
                      className="font-grotesk text-[13px] uppercase mb-1"
                      style={{
                        color: i === 0 ? '#6FFF00' : 'rgba(239,244,255,0.5)',
                        letterSpacing: '.2em',
                      }}
                    >
                      {p.place} Place · {p.label}
                    </div>
                    <div className="font-grotesk text-[20px] lg:text-[24px] uppercase text-cream">
                      {p.reward}
                    </div>
                  </div>
                  {i === 0 && (
                    <div className="font-condiment text-[40px] text-neon opacity-80 ml-4">✦</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Video clip */}
          <div
            className="liquid-glass rounded-[24px] overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <video className="w-full h-auto block" src="/video.mp4" autoPlay loop muted playsInline />
            <div className="p-5">
              <div
                className="font-mono text-[11px] uppercase text-neon mb-1"
                style={{ letterSpacing: '.15em' }}
              >
                From Last Year
              </div>
              <p
                className="font-mono text-[13px] uppercase leading-relaxed"
                style={{ color: 'rgba(239,244,255,0.55)', margin: 0 }}
              >
                Watch finalists present their investment thesis to a panel of VC partners at the APEX Cup 2025 finals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
