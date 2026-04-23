interface DescriptionProps {
  tagline?: string
  heading?: string
  body?: string
  callout?: string
}

export default function Description({
  tagline = 'real vcs. real feedback. real stakes.',
  heading = 'Pitch Your Business Idea to Real VCs. Every Week.',
  body = 'High school students submit 5-question pitches. Real venture capital investors score and judge them. Winners get recognized, feedback, and a platform — no simulation, no gatekeeping.',
  callout = "This isn't a simulation. Real VCs. Real feedback. Real stakes.",
}: DescriptionProps) {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 mb-10">
      <div
        className="liquid-glass rounded-[28px] p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
      >

        {/* Left: cursive + heading */}
        <div className="flex-1 min-w-0">
          <span className="font-condiment text-[22px] lg:text-[34px] text-neon mix-blend-exclusion opacity-90 block mb-3">
            {tagline}
          </span>
          <h2
            className="font-grotesk text-[28px] lg:text-[52px] uppercase leading-tight text-cream"
            style={{ margin: 0 }}
          >
            {heading}
          </h2>
        </div>

        {/* Right: body + callout */}
        <div className="lg:max-w-[440px] flex-shrink-0 flex flex-col gap-5 justify-center">
          <p
            className="font-mono text-[13px] lg:text-[14px] uppercase text-cream leading-relaxed"
            style={{ opacity: 0.65, margin: 0 }}
          >
            {body}
          </p>

          {/* Neon callout pill */}
          <div
            className="inline-flex items-center gap-3 rounded-full px-5 py-3 self-start"
            style={{ background: 'rgba(111,255,0,0.07)', border: '1px solid rgba(111,255,0,0.22)' }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#6FFF00', boxShadow: '0 0 6px rgba(111,255,0,0.8)' }}
            />
            <span
              className="font-grotesk text-[12px] lg:text-[13px] uppercase text-neon"
              style={{ letterSpacing: '.18em' }}
            >
              {callout}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
