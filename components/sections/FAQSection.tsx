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
    <section className="bg-gray-50" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-18">
          <div>
            <div className="section-label mb-6">FAQ</div>
            <h2 className="section-title" style={{ lineHeight: '1.12' }}>よくあるご質問</h2>
            <p className="mt-4 text-gray-400 tracking-[0.15em] font-light" style={{ fontSize: '0.8125rem' }}>
              Frequently Asked Questions
            </p>
          </div>
          {!isFullPage && (
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-medium text-gray-500 hover:text-gray-900 transition-colors shrink-0 group"
              style={{ fontSize: '0.9375rem' }}
            >
              すべての質問を見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4 max-w-4xl">
          {displayItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white overflow-hidden border border-gray-100 transition-all duration-300"
                style={{
                  boxShadow: isOpen
                    ? '0 12px 32px rgba(0,0,0,0.08)'
                    : '0 1px 8px rgba(0,0,0,0.04)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-8 text-left px-10 py-8 group hover:bg-gray-50/60 transition-colors"
                  style={{ minHeight: '100px' }}
                >
                  <span
                    className="font-bold text-gray-900 leading-snug"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}
                  >
                    {item.question}
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
                          {item.answer}
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
