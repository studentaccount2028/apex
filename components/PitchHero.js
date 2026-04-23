function PitchHero({
  title = 'APEX Capital Society',
  subtitle = 'Pitch your business idea to real VCs. Every week.',
}) {
  return (
    <>
      <div className="font-grotesk text-[28px] uppercase text-cream" style={{lineHeight:1.1,marginBottom:'0.75rem'}}>
        {title}
      </div>
      <div className="font-grotesk text-[18px] uppercase text-cream" style={{opacity:0.55,marginBottom:'1.25rem',lineHeight:1.3}}>
        {subtitle}
      </div>
    </>
  );
}
