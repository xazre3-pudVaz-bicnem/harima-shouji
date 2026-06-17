type Reason = { title: string; description: string }

type Props = {
  reasons: Reason[]
  title?: string
}

export default function ReasonsSection({ reasons, title = '播磨商事が選ばれる理由' }: Props) {
  return (
    <section className="bg-stone-50" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="mb-14">
          <div className="section-label mb-5">WHY CHOOSE US</div>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
            {title}
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group flex flex-col md:flex-row md:items-baseline md:gap-12 lg:gap-20 py-9"
            >
              <span
                className="font-bold shrink-0 mb-2 md:mb-0 md:w-8"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(245,158,11,0.4)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-bold text-gray-900 shrink-0 md:w-56 lg:w-72 mb-2 md:mb-0 leading-tight group-hover:text-amber-600 transition-colors"
                style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)' }}
              >
                {r.title}
              </h3>
              <p
                className="text-gray-400 leading-relaxed flex-1"
                style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
              >
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
