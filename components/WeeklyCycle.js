function WeeklyCycle({
  heading = 'Weekly Cycle',
  steps = [
    { day: 'Sun', action: 'Open' },
    { day: 'Thu', action: 'Close' },
    { day: 'Fri', action: 'Judge' },
    { day: 'Sat', action: 'Winners' },
  ],
  tags = ['No business plan', 'No team required', '45 minutes'],
}) {
  return (
    <>
      <div className="font-grotesk text-[10px] uppercase tracking-[.25em] text-cream" style={{opacity:0.35,marginBottom:'12px'}}>
        {heading}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'8px',marginBottom:'1.75rem'}}>
        {steps.map(item => (
          <div key={item.day} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'12px 10px',textAlign:'center'}}>
            <div className="font-mono text-[9px] uppercase tracking-[.18em] text-cream" style={{opacity:0.35,marginBottom:4}}>
              {item.day}
            </div>
            <div className="font-grotesk text-[13px] uppercase text-cream" style={{opacity:0.8}}>
              {item.action}
            </div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
        {tags.map(tag => (
          <span key={tag} className="font-mono text-[10px] uppercase tracking-[.12em] text-cream" style={{opacity:0.4,background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',padding:'5px 12px',borderRadius:'100px'}}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
