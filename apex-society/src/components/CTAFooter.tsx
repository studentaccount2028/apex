interface Outcome {
  headline: string
  body: string
}

interface CTAFooterProps {
  outcomes?: Outcome[]
  accentText?: string
  ctaLabel?: string
  onCTA?: () => void
}

const DEFAULT_OUTCOMES: Outcome[] = [
  {
    headline: 'Build Your Portfolio',
    body: 'Every pitch lives on your profile. Show your track record to the world.',
  },
  {
    headline: 'Get Recognized',
    body: 'Winners surface to the APEX VC network with published feedback.',
  },
  {
    headline: 'Launch Your Career',
    body: 'VC feedback delivered directly to your profile. Start building now.',
  },
]

export default function CTAFooter({
  outcomes = DEFAULT_OUTCOMES,
  accentText = 'This is how you start.',
  ctaLabel = 'Submit Your Pitch →',
  onCTA,
}: CTAFooterProps) {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 pb-24">
      <div
        className="liquid-glass rounded-[28px] p-8 lg:p-12"
        style={{ border: '1px solid rgba(111,255,0,0.15)' }}
      >
        {/* Outcome columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 relative"
            >
              {i > 0 && (
                <div
                  className="hidden sm:block absolute -left-3 top-0 bottom-0 w-px"
                  style={{ background: 'rgba(111,255,0,0.1)' }}
                />
              )}
              <div className="font-grotesk text-[18px] lg:text-[22px] uppercase text-neon">{o.headline}</div>
              <p
                className="font-mono text-[11px] uppercase text-cream leading-relaxed"
                style={{ opacity: 0.48, margin: 0 }}
              >
                {o.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: cursive + CTA button */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(111,255,0,0.1)' }}
        >
          <span className="font-condiment text-[32px] lg:text-[44px] text-neon opacity-75">
            {accentText}
          </span>

          <button
            onClick={onCTA}
            className="font-grotesk text-[14px] uppercase tracking-[.2em] text-[#010828] hover:opacity-90 transition-opacity duration-200 px-8 py-4 rounded-full flex-shrink-0"
            style={{ background: '#6FFF00', border: 'none', cursor: 'pointer' }}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
