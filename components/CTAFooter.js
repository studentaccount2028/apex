function CTAFooter({
  text = 'Build your portfolio. Get recognized. Launch your career. This is how you start.',
}) {
  return (
    <p className="font-mono text-[12px] text-cream leading-relaxed" style={{opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:'16px',margin:0}}>
      {text}
    </p>
  );
}
