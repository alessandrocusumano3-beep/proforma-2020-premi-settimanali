function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-4">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</p> : null}
      <h2 className="mt-1 text-xl font-semibold text-zinc-50">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
