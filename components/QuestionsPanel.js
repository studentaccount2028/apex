function QuestionsPanel({
  heading = 'Answer 5 Questions',
  questions = [
    'What are you building?',
    'Why does it matter?',
    "Who's your customer?",
    'How do you make money?',
    "What's your unfair advantage?",
  ],
}) {
  return (
    <div>
      <div className="font-grotesk text-[10px] uppercase tracking-[.25em] text-cream" style={{opacity:0.35,marginBottom:'12px'}}>
        {heading}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
        {questions.map((q, i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'10px 14px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'10px'}}>
            <span className="font-mono text-[9px] text-cream" style={{opacity:0.3,flexShrink:0}}>
              0{i + 1}
            </span>
            <span className="font-mono text-[12px] text-cream leading-relaxed" style={{opacity:0.65}}>
              {q}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
