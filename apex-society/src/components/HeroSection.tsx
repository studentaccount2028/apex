interface HeroSectionProps {
  videoSrc?: string
  title?: string
  subtitle?: string
  accentText?: string
}

export default function HeroSection({
  videoSrc = '/multishot.mp4',
  title = 'APEX CAPITAL SOCIETY',
  subtitle = 'PITCH YOUR BUSINESS IDEA TO REAL VCS. EVERY WEEK.',
  accentText = 'enter the arena',
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay loop muted playsInline
      />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(1,8,40,0.25) 0%, rgba(1,8,40,0.75) 100%)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-[1831px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16 lg:pb-24"
        style={{ minHeight: '80vh' }}
      >
        {/* Cursive accent */}
        <span className="font-condiment text-[26px] sm:text-[38px] lg:text-[52px] text-neon mix-blend-exclusion opacity-90 block mb-3">
          {accentText}
        </span>

        {/* Main title */}
        <h1
          className="font-grotesk text-[44px] sm:text-[68px] lg:text-[96px] uppercase leading-none text-cream"
          style={{ margin: 0 }}
        >
          {title.split(' ').slice(0, 2).join(' ')}
          <br />
          <span style={{ WebkitTextStroke: '1px #EFF4FF', color: 'transparent' }}>
            {title.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Subtitle glass pill */}
        <div className="mt-8 inline-block">
          <div
            className="liquid-glass rounded-[16px] px-6 py-4 inline-flex items-center gap-4"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#6FFF00', boxShadow: '0 0 6px rgba(111,255,0,0.8)' }}
            />
            <p
              className="font-mono text-[13px] lg:text-[15px] uppercase text-cream leading-relaxed"
              style={{ margin: 0, letterSpacing: '.06em', opacity: 0.85 }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
