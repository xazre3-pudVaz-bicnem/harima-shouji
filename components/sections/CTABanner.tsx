'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CTABanner({
  title = 'FC本部・多店舗展開企業の\n施工パートナーとして',
  description,
  primaryLabel = '無料相談をする',
  primaryHref = '/contact',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ display: 'flex', alignItems: 'center', minHeight: '65vh' }}
    >
      {/* Parallax background photo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute"
          style={{
            top: '-15%',
            bottom: '-15%',
            left: 0,
            right: 0,
            y: bgY,
          }}
        >
          <Image
            src="/LINE_ALBUM_2026.6.10_260610_26.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'rgba(2,10,24,0.82)' }} />
      </div>

      {/* Thin amber accent line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.3) 50%, transparent 100%)',
        }}
      />

      <div
        className="container relative text-center"
        style={{ zIndex: 10, paddingTop: '10rem', paddingBottom: '10rem' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="font-bold tracking-[0.45em] text-amber-500 uppercase mb-9"
              style={{ fontSize: '0.625rem' }}
            >
              Free Consultation
            </div>

            <h2
              className="font-bold text-white leading-tight"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
                letterSpacing: '-0.03em',
                whiteSpace: 'pre-line',
                marginBottom: description ? '2.5rem' : '3.5rem',
              }}
            >
              {title}
            </h2>

            {description && (
              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  fontSize: '1rem',
                  lineHeight: '2',
                  maxWidth: '34rem',
                  margin: '0 auto 3.5rem',
                }}
              >
                {description}
              </p>
            )}

            <Link
              href={primaryHref}
              className="inline-flex items-center gap-3 bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors"
              style={{ padding: '1.2rem 3.5rem', fontSize: '0.9375rem' }}
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
