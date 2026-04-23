function PitchHeader({
  liveLabel = 'Live Competition',
  schedule = 'Weekly · Every Sunday',
  tagline = 'Real VCs · Real Feedback · Real Stakes',
}) {
  return (
    <div style={{borderBottom:'1px solid rgba(255,255,255,0.08)',padding:'18px 40px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <span className="font-grotesk text-[11px] uppercase tracking-[.25em] text-cream" style={{opacity:0.9,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',padding:'4px 12px',borderRadius:'100px'}}>
          {liveLabel}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[.2em] text-cream" style={{opacity:0.35}}>
          {schedule}
        </span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[.18em] text-cream" style={{opacity:0.25}}>
        {tagline}
      </span>
    </div>
  );
}
