export default function SectionIntro({ eyebrow, title, children, id, center = false }: { eyebrow?: string; title: string; children?: React.ReactNode; id?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      <span className={`rule-gold mt-5 ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      {children && <div className="mt-5 text-lg text-muted">{children}</div>}
    </div>
  );
}
