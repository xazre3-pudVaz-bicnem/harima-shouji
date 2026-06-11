type Reason = { title: string; description: string }

type Props = {
  reasons: Reason[]
  title?: string
}

export default function ReasonsSection({ reasons, title = '播磨商事が選ばれる理由' }: Props) {
  return (
    <section className="bg-stone-50" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-4">WHY CHOOSE US</div>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-white p-10 group hover:bg-amber-50/30 transition-colors">
              <div
                className="font-black text-amber-400/20 mb-6 leading-none select-none"
                style={{ fontSize: '3.5rem' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors leading-snug">
                {r.title}
              </h3>
              <p className="text-sm text-gray-500" style={{ lineHeight: '1.9' }}>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
