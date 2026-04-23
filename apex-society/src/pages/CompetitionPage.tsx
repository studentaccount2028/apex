import Header         from '../components/Header'
import HeroSection    from '../components/HeroSection'
import Description    from '../components/Description'
import WeeklyCycle    from '../components/WeeklyCycle'
import QuestionsPanel from '../components/QuestionsPanel'
import HowItWorks     from '../components/HowItWorks'
import TimelinePrizes from '../components/TimelinePrizes'
import CTAFooter      from '../components/CTAFooter'
import { COMPETITION_STATS } from '../data/competition'

interface CompetitionPageProps {
  onBack: () => void
}

export default function CompetitionPage({ onBack }: CompetitionPageProps) {
  return (
    <div style={{ backgroundColor: '#010828', color: '#EFF4FF', minHeight: '100vh' }}>

      {/* 1 ─ Header */}
      <Header
        onBack={onBack}
        activeLink="Competition"
        onNavClick={link => { if (link === 'Homepage') onBack() }}
      />

      {/* 2 ─ Hero */}
      <HeroSection
        videoSrc="/multishot.mp4"
        title="APEX CAPITAL SOCIETY"
        subtitle="PITCH YOUR BUSINESS IDEA TO REAL VCS. EVERY WEEK."
        accentText="enter the arena"
      />

      {/* Stats bar — overlaps hero bottom edge */}
      <div className="max-w-[1831px] mx-auto px-6 lg:px-12 -mt-8 relative z-20 mb-10">
        <div className="liquid-glass rounded-[24px] p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPETITION_STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-grotesk text-[36px] lg:text-[52px] uppercase text-neon leading-none">
                {s.value}
              </div>
              <div
                className="font-mono text-[11px] uppercase text-cream mt-2"
                style={{ opacity: 0.6, letterSpacing: '.15em' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 ─ Description */}
      <Description
        tagline="real vcs. real feedback. real stakes."
        heading="Pitch Your Business Idea to Real VCs. Every Week."
        body="High school students submit 5-question pitches. Real venture capital investors score and judge them. Winners get recognized, feedback, and a platform — no simulation, no gatekeeping."
        callout="This isn't a simulation. Real VCs. Real feedback. Real stakes."
      />

      {/* 4 ─ Weekly Cycle */}
      <WeeklyCycle />

      {/* 5 ─ Questions Panel */}
      <QuestionsPanel />

      {/* 6 ─ How It Works */}
      <HowItWorks />

      {/* 7 ─ Timeline + Prizes */}
      <TimelinePrizes />

      {/* 8 ─ CTA Footer */}
      <CTAFooter
        accentText="This is how you start."
        ctaLabel="Apply for 2026 →"
      />

    </div>
  )
}
