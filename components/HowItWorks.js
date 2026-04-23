function HowItWorks({
  heading = 'How It Works',
  steps = [
    'Get scored by AI instantly',
    'Top 20 go to real VC judges',
    'Winners get VC feedback in their profile',
  ],
}) {
  return (
    <div>
      <div className="font-grotesk text-[10px] uppercase tracking-[.25em] text-cream" style={{opacity:0.35,marginBottom:'12px'}}>
        {heading}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
        {steps.map((item, i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span className="font-grotesk text-[11px] text-cream" style={{opacity:0.25}}>→</span>
            <span className="font-mono text-[12px] text-cream" style={{opacity:0.55}}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
