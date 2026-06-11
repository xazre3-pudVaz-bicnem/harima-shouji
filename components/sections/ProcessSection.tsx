type Step = { number: string; title: string; description: string }

type Props = {
  steps: Step[]
  title?: string
  bg?: 'white' | 'stone'
}

export default function ProcessSection({ steps, title = 'ご依頼の流れ', bg = 'white' }: Props) {
  return (
    <section
      className={bg === 'stone' ? 'bg-stone-50' : 'bg-white'}
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-4">PROCESS</div>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}>{title}</h2>
        </div>
        <div className="max-w-3xl relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-100 hidden md:block" aria-hidden="true" />
          <div className="space-y-0">
            {steps.map((step) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-6 md:gap-12 pb-14 last:pb-0">
                <div className="flex justify-start">
                  <div className="relative z-10 w-16 h-16 bg-amber-400 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-white tracking-[0.2em]">{step.number}</span>
                  </div>
                </div>
                <div className="md:pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed" style={{ lineHeight: '1.9' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
