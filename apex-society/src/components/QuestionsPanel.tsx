interface Question {
  n: string
  q: string
  sub: string
}

interface Requirement {
  label: string
  value: string
}

interface QuestionsPanelProps {
  questions?: Question[]
  requirements?: Requirement[]
}

const DEFAULT_QUESTIONS: Question[] = [
  { n: '01', q: 'What are you building?',        sub: 'The idea. One sentence.' },
  { n: '02', q: 'Why does it matter?',            sub: 'The problem you solve.' },
  { n: '03', q: "Who's your customer?",           sub: 'Target market & pain.' },
  { n: '04', q: 'How do you make money?',         sub: 'Revenue model.' },
  { n: '05', q: "What's your unfair advantage?",  sub: 'Why you, why now.' },
]

const DEFAULT_REQUIREMENTS: Requirement[] = [
  { label: 'Time to complete',       value: '45 min' },
  { label: 'Questions to answer',    value: '5' },
  { label: 'Team members required',  value: 'None' },
  { label: 'Business plan required', value: 'None' },
]

export default function QuestionsPanel({
  questions = DEFAULT_QUESTIONS,
  requirements = DEFAULT_REQUIREMENTS,
}: QuestionsPanelProps) {
  return (
    <div className="max-w-[1831px] mx-auto px-6 lg:px-12 mb-10">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left: entry requirements sidebar */}
        <div
          className="liquid-glass rounded-[28px] p-8 flex flex-col justify-between gap-8 lg:w-[320px] flex-shrink-0"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <div className="font-mono text-[10px] uppercase text-neon mb-4" style={{ letterSpacing: '.22em' }}>
              Entry Requirements
            </div>
            <h3
              className="font-grotesk text-[26px] lg:text-[32px] uppercase text-cream leading-tight"
              style={{ margin: '0 0 12px' }}
            >
              No Business Plan.<br />No Team Required.
            </h3>
            <p
              className="font-mono text-[12px] uppercase text-cream leading-relaxed"
              style={{ opacity: 0.5, margin: 0 }}
            >
              Just an idea and 45 minutes. That&apos;s the only barrier to entry.
            </p>
          </div>

          {/* Requirements table */}
          <div className="flex flex-col gap-3">
            {requirements.map(r => (
              <div
                key={r.label}
                className="flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 10 }}
              >
                <span
                  className="font-mono text-[11px] uppercase text-cream"
                  style={{ opacity: 0.4, letterSpacing: '.08em' }}
                >
                  {r.label}
                </span>
                <span className="font-grotesk text-[13px] uppercase text-neon">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: questions grid */}
        <div className="flex-1">
          <div
            className="liquid-glass rounded-[28px] p-8"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="font-mono text-[10px] uppercase text-neon mb-5" style={{ letterSpacing: '.22em' }}>
              Answer 5 Questions
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {questions.map((item, i) => (
                <div
                  key={i}
                  className="liquid-glass rounded-[20px] p-5 hover:bg-white/5 transition-colors duration-200"
                  style={{ border: '1px solid rgba(111,255,0,0.12)' }}
                >
                  <div
                    className="font-mono text-[10px] text-neon mb-3"
                    style={{ letterSpacing: '.2em' }}
                  >
                    {item.n}
                  </div>
                  <div className="font-grotesk text-[15px] lg:text-[17px] uppercase text-cream mb-2 leading-tight">
                    {item.q}
                  </div>
                  <div
                    className="font-mono text-[10px] uppercase text-cream"
                    style={{ opacity: 0.38, letterSpacing: '.08em' }}
                  >
                    {item.sub}
                  </div>
                </div>
              ))}

              {/* Scoring card — always last */}
              <div
                className="liquid-glass rounded-[20px] p-5"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(111,255,0,0.04)',
                }}
              >
                <div className="font-mono text-[10px] text-neon mb-3" style={{ letterSpacing: '.2em' }}>
                  Scoring
                </div>
                <div className="font-grotesk text-[15px] lg:text-[17px] uppercase text-cream mb-2 leading-tight">
                  AI First. VCs Final.
                </div>
                <div
                  className="font-mono text-[10px] uppercase text-cream leading-relaxed"
                  style={{ opacity: 0.38, letterSpacing: '.06em' }}
                >
                  All pitches scored by AI. Top 20 go to real VC judges.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
