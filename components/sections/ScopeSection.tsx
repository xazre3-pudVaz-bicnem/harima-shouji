import { CheckCircle2 } from 'lucide-react'

type Props = {
  items: string[]
  title?: string
}

export default function ScopeSection({ items, title = '対応可能な工事内容' }: Props) {
  return (
    <section className="bg-[#071322]" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase mb-5">SCOPE</div>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] px-7 py-6 hover:bg-white/[0.05] transition-colors"
            >
              <CheckCircle2
                className="w-4 h-4 text-amber-500 shrink-0"
                style={{ marginTop: '0.15rem' }}
              />
              <span
                className="text-white/75 leading-snug"
                style={{ fontSize: '0.9375rem' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
