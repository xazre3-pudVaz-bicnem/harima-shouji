'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { faqItems } from '@/data/faq'

export default function FAQSection({ limit = 6 }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayItems = faqItems.slice(0, limit)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="section-title">よくある質問</h2>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors shrink-0 group"
          >
            すべてのFAQを見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {displayItems.map((item, index) => (
            <div key={index} className="bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-5 py-8 px-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-gray-900 leading-snug">
                  {item.question}
                </span>
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center shrink-0 bg-white">
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5 text-gray-700" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-gray-700" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-8 pt-2">
                      <p className="text-base text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
