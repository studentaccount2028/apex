interface CycleStep {
  day: string
  shortLabel: string
  action: string
  icon: string
  desc: string
}

interface Stat {
  value: string
  label: string
}

interface WeeklyCycleProps {
  steps?: CycleStep[]
  stats?: Stat[]
}

const DEFAULT_STEPS: CycleStep[] = [
  { day: 'Sunday',   shortLabel: 'SUN',  action: 'Open',             icon: '◎', desc: 'New competition opens. Submit your idea.' },
  { day: 'Thursday', shortLabel: 'THU',  action: 'Close',            icon: '◈', desc: 'Final deadline. No late entries.' },
  { day: 'Friday',   shortLabel: 'FRI',  action: 'Judge',            icon: '✦', desc: 'Real investors score the top 20 pitches.' },
  { day: 'Saturday', shortLabel: 'SAT',  action: 'Winners',          icon: '★', desc: 'Results posted. Feedback to your profile.' },
]

const DEFAULT_STATS: Stat[] = [
  { value: '45 min', label: 'To complete' },
  { value: '5',      label: 'Questions' },
  { value: 'Weekly', label: 'Cadence' },
  { value: '100%',   label: 'Free to enter' },
]

export default function WeeklyCycle({ steps = DEFAULT_STEPS, stats = DEFAULT_STATS }: WeeklyCycleProps) {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 mb-10">
      <div className="liquid-glass rounded-[28px] p-8 lg:p-10" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Label */}
        <div className="font-mono text-[10px] uppercase text-neon mb-6" style={{ letterSpacing: '.25em' }}>
          The Weekly Cycle
        </div>

        {/* 4-step timeline */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="liquid-glass rounded-[20px] p-5 flex flex-col gap-3 relative"
              style={{ border: '1px solid rgba(111,255,0,0.1)' }}
            >
              {/* Connector arrow on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-neon font-mono text-[14px] z-10"
                  style={{ opacity: 0.4 }}
                >
                  →
                </div>
              )}

              {/* Icon + short label */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[20px] text-neon" style={{ lineHeight: 1 }}>{step.icon}</span>
                <span
                  className="font-grotesk text-[11px] uppercase text-neon"
                  style={{ letterSpacing: '.2em' }}
                >
                  {step.shortLabel}:
                </span>
                <span
                  className="font-grotesk text-[11px] uppercase text-cream"
                  style={{ letterSpacing: '.1em' }}
                >
                  {step.action}
                </span>
              </div>

              {/* Full day label */}
              <div
                className="font-mono text-[10px] uppercase text-cream"
                style={{ opacity: 0.35, letterSpacing: '.12em' }}
              >
                {step.day}
              </div>

              {/* Description */}
              <p
                className="font-mono text-[11px] uppercase leading-relaxed"
                style={{ color: 'rgba(239,244,255,0.48)', margin: 0 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-grotesk text-[32px] lg:text-[44px] uppercase text-neon leading-none">{s.value}</div>
              <div
                className="font-mono text-[10px] uppercase text-cream mt-1.5"
                style={{ opacity: 0.5, letterSpacing: '.15em' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
