function PitchDescription({
  text = 'High school students submit 5-question pitches. Real venture capital investors score and judge them. Winners get recognized, feedback, and a platform.',
}) {
  return (
    <p className="font-mono text-[13px] text-cream leading-relaxed" style={{opacity:0.5,marginBottom:'1.75rem'}}>
      {text}
    </p>
  );
}
