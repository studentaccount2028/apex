import { NAV_LINKS } from '../data/competition'

interface HeaderProps {
  onBack?: () => void
  activeLink?: string
  onNavClick?: (link: string) => void
}

export default function Header({ onBack, activeLink = 'Competition', onNavClick }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{ backgroundColor: 'rgba(1,8,40,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-[1831px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between gap-6">

        {/* Left: logo + live badge */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {onBack && (
            <button
              onClick={onBack}
              className="font-grotesk text-[12px] uppercase text-cream hover:text-neon transition-colors duration-200 mr-2"
              style={{ background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.2em' }}
            >
              ← Back
            </button>
          )}
          <span className="font-grotesk text-[16px] uppercase text-cream tracking-wide">APEX Society</span>

          {/* Live badge */}
          <div
            className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1"
            style={{ background: 'rgba(111,255,0,0.08)', border: '1px solid rgba(111,255,0,0.25)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#6FFF00', boxShadow: '0 0 5px rgba(111,255,0,0.9)' }}
            />
            <span className="font-mono text-[10px] uppercase text-neon" style={{ letterSpacing: '.2em' }}>
              Live Competition
            </span>
          </div>
        </div>

        {/* Center: nav pill */}
        <nav className="liquid-glass hidden lg:block rounded-[28px] px-[40px] py-[16px]">
          <ul className="flex items-center gap-10 list-none" style={{ margin: 0, padding: 0 }}>
            {NAV_LINKS.map(l => (
              <li key={l}>
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); onNavClick?.(l) }}
                  className={`font-grotesk text-[13px] uppercase transition-colors duration-200 ${
                    l === activeLink ? 'text-neon' : 'text-cream hover:text-neon'
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: cadence tagline */}
        <div className="hidden md:flex flex-col items-end flex-shrink-0">
          <span className="font-mono text-[10px] uppercase text-neon" style={{ letterSpacing: '.25em' }}>
            Weekly · Every Sunday
          </span>
          <span className="font-mono text-[10px] uppercase text-cream mt-0.5" style={{ letterSpacing: '.15em', opacity: 0.45 }}>
            New round opens each week
          </span>
        </div>

      </div>
    </header>
  )
}
