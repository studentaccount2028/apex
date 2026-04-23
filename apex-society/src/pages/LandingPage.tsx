import SocialBtn, { SOCIAL_ICONS } from '../components/shared/SocialBtn'
import VCCollection from '../components/VCCollection'
import { NAV_LINKS, DECO } from '../data/competition'

interface LandingPageProps {
  onNavClick: (link: string) => void
}

export default function LandingPage({ onNavClick }: LandingPageProps) {
  return (
    <div style={{ backgroundColor: '#010828', color: '#EFF4FF' }}>

      {/* Texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ backgroundImage: 'url(/texture.png)', backgroundSize: 'cover', mixBlendMode: 'lighten', opacity: 0.6 }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          autoPlay loop muted playsInline
        />

        <div className="relative z-10 max-w-[1831px] mx-auto px-6 lg:px-12 flex flex-col min-h-screen">
          <header className="flex items-center justify-between pt-8">
            <span className="font-grotesk text-[16px] uppercase text-cream tracking-wide">APEX Society</span>

            <nav className="liquid-glass hidden lg:block rounded-[28px] px-[52px] py-[24px]">
              <ul className="flex items-center gap-10 list-none" style={{ margin: 0, padding: 0 }}>
                {NAV_LINKS.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      onClick={e => { e.preventDefault(); onNavClick(l) }}
                      className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors duration-200"
                      style={{ textDecoration: 'none' }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex flex-col gap-3">
              {SOCIAL_ICONS.map((Icon, i) => <SocialBtn key={i} Icon={Icon} />)}
            </div>
          </header>

          <div className="flex-1 flex items-center">
            <div className="lg:ml-32">
              <div className="relative inline-block">
                <h1
                  className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] lg:leading-[1] text-cream"
                  style={{ maxWidth: 780, margin: 0 }}
                >
                  APEX Cup<br />Startup Competition
                </h1>
                <span className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 font-condiment text-[24px] sm:text-[36px] md:text-[48px] text-neon mix-blend-exclusion opacity-90 -rotate-1 pointer-events-none select-none whitespace-nowrap">
                  elite youth
                </span>
              </div>
              <div className="flex lg:hidden flex-row gap-3 mt-8">
                {SOCIAL_ICONS.map((Icon, i) => <SocialBtn key={i} Icon={Icon} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT ── */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/multishot.mp4"
          autoPlay loop muted playsInline
        />

        <div className="relative z-10 max-w-[1831px] mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col min-h-screen justify-between">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            <div className="relative">
              <h2
                className="font-grotesk text-[32px] sm:text-[45px] md:text-[55px] lg:text-[60px] uppercase leading-tight text-cream"
                style={{ margin: 0 }}
              >
                Welcome!<br />Accelerate your<br />entreprenuerial<br />journey
              </h2>
              <span className="absolute bottom-0 right-0 font-condiment text-[36px] sm:text-[50px] md:text-[62px] lg:text-[68px] text-neon mix-blend-exclusion opacity-90 -rotate-2 pointer-events-none select-none">
                APEX
              </span>
            </div>
            <p
              className="font-mono text-[14px] lg:text-[16px] uppercase text-cream max-w-[266px] leading-relaxed flex-shrink-0"
              style={{ margin: 0 }}
            >
              {DECO}
            </p>
          </div>

          <div className="flex flex-row justify-between pt-16 pb-8">
            <div className="flex-1 pr-4 lg:pr-8">
              <p className="font-mono text-[14px] uppercase opacity-10 leading-relaxed text-[#010828] lg:text-cream" style={{ margin: 0 }}>{DECO}</p>
              <p className="font-mono text-[14px] uppercase opacity-10 leading-relaxed mt-4 text-[#010828] lg:text-cream" style={{ margin: 0 }}>{DECO}</p>
            </div>
            <div className="hidden lg:flex flex-1 flex-col pl-8">
              <p className="font-mono text-[14px] uppercase text-cream opacity-10 leading-relaxed" style={{ margin: 0 }}>{DECO}</p>
              <p className="font-mono text-[14px] uppercase text-cream opacity-10 leading-relaxed mt-4" style={{ margin: 0 }}>{DECO}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: VC COLLECTION ── */}
      <VCCollection />

      {/* ── SECTION 4: CTA ── */}
      <section className="relative" style={{ backgroundColor: '#010828' }}>
        <video className="w-full h-auto block" src="/video.mp4" autoPlay loop muted playsInline />

        <div className="absolute inset-0 flex items-center justify-end px-6 lg:pl-[15%] lg:pr-[20%]">
          <div className="relative text-right">
            <span className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 left-0 font-condiment text-[17px] sm:text-[30px] md:text-[50px] lg:text-[68px] text-neon mix-blend-exclusion opacity-90 pointer-events-none select-none whitespace-nowrap">
              Go beyond
            </span>
            <h2
              className="font-grotesk text-[16px] sm:text-[28px] md:text-[45px] lg:text-[60px] uppercase leading-tight text-cream"
              style={{ margin: 0 }}
            >
              <div className="mb-4 sm:mb-6 lg:mb-12">JOIN US.</div>
              <div>REVEAL WHAT&apos;S HIDDEN.</div>
              <div>DEFINE WHAT&apos;S NEXT.</div>
              <div>FOLLOW THE SIGNAL.</div>
            </h2>
            <button
              onClick={() => onNavClick('Competition')}
              className="font-grotesk text-[13px] uppercase tracking-[.3em] text-cream hover:text-neon transition-colors duration-200"
              style={{ background: 'none', border: 'none', borderBottom: '1px solid currentColor', paddingBottom: 4, cursor: 'pointer', marginTop: 32 }}
            >
              View Competition →
            </button>
          </div>
        </div>

        {/* Social icons — bottom-left vertical stack */}
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] lg:bottom-[20%]">
          <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1.25rem] overflow-hidden flex flex-col">
            {SOCIAL_ICONS.map((Icon, i) => (
              <button
                key={i}
                className={`flex items-center justify-center text-cream hover:bg-white/10 transition-colors duration-200 w-[14vw] sm:w-[9rem] md:w-[10.78rem] lg:w-[16.77rem] h-[14vw] sm:h-[4.5rem] md:h-[4rem] lg:h-[5rem]${i < 2 ? ' border-b border-white/10' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
