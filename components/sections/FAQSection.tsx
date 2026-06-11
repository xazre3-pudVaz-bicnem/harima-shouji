'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { faqItems } from '@/data/faq'

export default function FAQSection({ limit = 6 }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const displayItems = faqItems.slice(0, limit)
  const isFullPage = limit > 6

  return (
    <section className="bg-gray-50" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="section-label mb-5">FAQ</div>
            <h2 className="section-title" style={{ lineHeight: '1.15' }}>よくあるご質問</h2>
            <p className="mt-3 text-gray-400 text-sm tracking-[0.15em] font-light">
              Frequently Asked Questions
            </p>
          </div>
          {!isFullPage && (
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors shrink-0 group"
            >
              すべての質問を見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* FAQ Cards */}
        <div className="space-y-3 max-w-4xl">
          {displayItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-shadow duration-300"
                style={{ boxShadow: isOpen ? '0 8px 24px rgba(0,0,0,0.07)' : '0 1px 6px rgba(0,0,0,0.04)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 text-left px-8 py-6 group hover:bg-gray-50/50 transition-colors"
                  style={{ minHeight: '80px' }}
                >
                  <span
                    className="font-bold text-gray-900 leading-snug"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}
                  >
                    {item.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? '#f59e0b' : '#ffffff',
                      borderColor: isOpen ? '#f59e0b' : '#e5e7eb',
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-gray-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-gray-100 mb-6" />
                        <p
                          className="text-gray-600"
                          style={{ fontSize: '0.9375rem', lineHeight: '2.1' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
