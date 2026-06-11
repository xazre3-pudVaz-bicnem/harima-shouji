import { ChevronDown } from 'lucide-react'

type Faq = { q: string; a: string }

type Props = {
  faqs: Faq[]
  title?: string
  bg?: 'white' | 'stone'
}

export default function ServiceFaqSection({ faqs, title = 'よくある質問', bg = 'stone' }: Props) {
  return (
    <section
      className={bg === 'stone' ? 'bg-stone-50' : 'bg-white'}
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-4">FAQ</div>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>{title}</h2>
        </div>
        <div className="max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex justify-between items-start cursor-pointer list-none gap-6 py-8">
                <div className="flex items-start gap-4">
                  <span
                    className="font-black text-amber-400 shrink-0"
                    style={{ fontSize: '1rem', letterSpacing: '0.05em', lineHeight: '1.6' }}
                  >
                    Q.
                  </span>
                  <span className="text-lg font-bold text-gray-900 leading-snug">{faq.q}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-1 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="pb-8 pl-4 ml-4 border-l-2 border-amber-400">
                <p className="text-base text-gray-600" style={{ lineHeight: '1.9' }}>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
