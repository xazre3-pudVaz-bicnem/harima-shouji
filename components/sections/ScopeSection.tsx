type Props = {
  items: string[]
  title?: string
}

export default function ScopeSection({ items, title = '対応可能な工事内容' }: Props) {
  const half = Math.ceil(items.length / 2)
  const col1 = items.slice(0, half)
  const col2 = items.slice(half)
  return (
    <section className="bg-[#071322]" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-4">SCOPE</div>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          <div>
            {col1.map((item) => (
              <div key={item} className="flex items-center gap-5 py-5 border-b border-white/[0.07] last:border-0">
                <span className="w-4 h-px bg-amber-400 shrink-0" />
                <span className="text-base text-white/75">{item}</span>
              </div>
            ))}
          </div>
          <div>
            {col2.map((item) => (
              <div key={item} className="flex items-center gap-5 py-5 border-b border-white/[0.07] last:border-0">
                <span className="w-4 h-px bg-amber-400 shrink-0" />
                <span className="text-base text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
