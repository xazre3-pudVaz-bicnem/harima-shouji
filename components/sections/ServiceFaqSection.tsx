'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

type Faq = { q: string; a: string }

type Props = {
  faqs: Faq[]
  title?: string
  bg?: 'white' | 'stone'
}

export default function ServiceFaqSection({ faqs, title = 'よくあるご質問', bg = 'stone' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className={bg === 'stone' ? 'bg-stone-50' : 'bg-white'}
      style={{ paddingTop: '12rem', paddingBottom: '12rem' }}
    >
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-6">FAQ</div>
          <h2
            className="font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: '1.15' }}
          >
            {title}
          </h2>
          <p className="mt-4 text-gray-400 tracking-[0.15em] font-light" style={{ fontSize: '0.8125rem' }}>
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white overflow-hidden border border-gray-100 transition-all duration-300"
                style={{
                  boxShadow: isOpen
                    ? '0 12px 32px rgba(0,0,0,0.08)'
                    : '0 1px 8px rgba(0,0,0,0.04)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-8 text-left px-10 py-8 hover:bg-gray-50/60 transition-colors"
                  style={{ minHeight: '100px' }}
                >
                  <span
                    className="font-bold text-gray-900 leading-snug"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? '#f59e0b' : '#f9fafb',
                      borderColor: isOpen ? '#f59e0b' : '#e5e7eb',
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-10">
                        <div className="h-px bg-gray-100 mb-7" />
                        <p
                          className="text-gray-600 leading-relaxed"
                          style={{ fontSize: '1rem', lineHeight: '2.1' }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
