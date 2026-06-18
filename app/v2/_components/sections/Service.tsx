'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    number: '01',
    titleEn: 'INTERIOR WORKS',
    title: '店舗内装工事',
    description: '新規出店から改装・リノベーションまで。\nクロス・床・設備工事を一括で管理します。',
    image: '/LINE_ALBUM_2026.6.10_260610_3.jpg',
    href: '/v2/service/interior',
    reverse: false,
  },
  {
    number: '02',
    titleEn: 'RESTORATION',
    title: '原状回復工事',
    description: '退去立会い・解体・内装復旧まで。\n複数店舗の退去スケジュールを一元管理します。',
    image: '/LINE_ALBUM_2026.6.10_260610_14.jpg',
    href: '/v2/service/restoration',
    reverse: true,
  },
]

export default function Service() {
  return (
    <section id="service" style={{ background: '#FFFFFF' }}>

      {/* Section label */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>
            SERVICE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            2つのサービス
          </h2>
        </motion.div>
      </div>

      {/* Service panels */}
      {services.map((service) => (
        <ServicePanel key={service.number} service={service} />
      ))}

    </section>
  )
}

function ServicePanel({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderTop: '1px solid #F0EFEC' }}
    >
      <div
        style={{ display: 'grid', minHeight: '72vh' }}
        className={service.reverse ? 'grid-cols-1 lg:grid-cols-[42fr_58fr]' : 'grid-cols-1 lg:grid-cols-[58fr_42fr]'}
      >

        {/* Image (first on desktop for non-reversed, second for reversed) */}
        {!service.reverse && <ServiceImage image={service.image} title={service.title} number={service.number} />}

        {/* Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(3.5rem, 7vw, 6rem) clamp(2rem, 5vw, 5.5rem)',
            position: 'relative',
            background: '#FFFFFF',
          }}
        >
          {/* Ghost number */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2.5rem',
              fontSize: 'clamp(6rem, 12vw, 10rem)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              color: '#F5F4F0',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {service.number}
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#C4C2BE', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
              {service.titleEn}
            </div>

            <h3
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '2rem',
              }}
            >
              {service.title}
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.1, marginBottom: '3rem', whiteSpace: 'pre-line' }}>
              {service.description}
            </p>

            <Link
              href={service.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#0A0A0A',
                textDecoration: 'none',
                textTransform: 'uppercase',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #0A0A0A',
                transition: 'gap 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = '1.5rem' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = '1rem' }}
            >
              詳しく見る
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image (second for reversed) */}
        {service.reverse && <ServiceImage image={service.image} title={service.title} number={service.number} />}

      </div>
    </motion.div>
  )
}

function ServiceImage({ image, title, number }: { image: string; title: string; number: string }) {
  return (
    <motion.div
      style={{ position: 'relative', overflow: 'hidden', minHeight: '50vw' }}
      className="lg:min-h-0"
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </motion.div>
      {/* Subtle dark edge */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,8,0.08)' }} />
    </motion.div>
  )
}
