interface Bullet {
  icon: string
  headline: string
  body: string
}

interface HowItWorksProps {
  bullets?: Bullet[]
}

const DEFAULT_BULLETS: Bullet[] = [
  {
    icon: '◎',
    headline: 'AI Scores Every Pitch',
    body: 'Every submission is automatically evaluated for clarity, market insight, and business viability. Instant feedback, no waiting.',
  },
  {
    icon: '✦',
    headline: 'Top 20 Go to Real VCs',
    body: 'The highest-scoring pitches are surfaced to real venture capital investors who provide qualitative scores and written commentary.',
  },
  {
    icon: '★',
    headline: 'Feedback Lands on Your Profile',
    body: 'VC feedback is delivered directly to your APEX profile. Every pitch you submit builds a permanent portfolio of your thinking.',
  },
]

export default function HowItWorks({ bullets = DEFAULT_BULLETS }: HowItWorksProps) {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 mb-10">
      <div
        className="liquid-glass rounded-[28px] p-8 lg:p-10"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Label */}
        <div className="font-mono text-[10px] uppercase text-neon mb-6" style={{ letterSpacing: '.25em' }}>
          How It Works
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 relative"
            >
              {/* Vertical divider between columns (desktop) */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute -left-3 top-0 bottom-0 w-px"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                />
              )}

              <div className="flex items-center gap-3">
                <span className="font-mono text-[22px] text-neon" style={{ lineHeight: 1 }}>{b.icon}</span>
                <span
                  className="font-mono text-[10px] uppercase text-neon"
                  style={{ letterSpacing: '.2em', opacity: 0.7 }}
                >
                  Step {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3
                className="font-grotesk text-[20px] lg:text-[24px] uppercase text-cream leading-tight"
                style={{ margin: 0 }}
              >
                {b.headline}
              </h3>

              <p
                className="font-mono text-[12px] uppercase leading-relaxed text-cream"
                style={{ opacity: 0.5, margin: 0 }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
