'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'interior',
    label: '01',
    title: '店舗内装工事',
    titleEn: 'INTERIOR WORKS',
    description: '新規出店・改装・リノベーション。クロス・床・設備まで内装工事を一括対応します。',
    image: '/LINE_ALBUM_2026.6.10_260610_3.jpg',
    href: '/v2/service/interior',
  },
  {
    id: 'restoration',
    label: '02',
    title: '原状回復工事',
    titleEn: 'RESTORATION',
    description: '退去立会い・解体・内装復旧まで。複数店舗の退去スケジュールを一元管理します。',
    image: '/LINE_ALBUM_2026.6.10_260610_10.jpg',
    href: '/v2/service/restoration',
  },
]

export default function Service() {
  return (
    <section id="service" style={{ background: '#F5F4F0', paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            SERVICE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            2つのサービス
          </h2>
        </motion.div>

        {/* Service panels */}
        <div className="grid grid-cols-1 gap-[2px] md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={service.href} style={{ display: 'block', textDecoration: 'none' }}>
        <motion.div
          className="aspect-[4/5] md:aspect-[3/4]"
          style={{ position: 'relative', overflow: 'hidden' }}
          whileHover="hover"
          initial="rest"
        >
          {/* Image with zoom */}
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(5,5,8,0.78) 0%, rgba(5,5,8,0.15) 55%, transparent 100%)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                {service.titleEn}
              </span>
              <span style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, color: 'rgba(255,255,255,0.06)', lineHeight: 1, letterSpacing: '-0.05em' }}>
                {service.label}
              </span>
            </div>

            {/* Bottom content */}
            <div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.85, maxWidth: '320px' }}>
                {service.description}
              </p>
              <div style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
                詳しく見る
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M0 4H14M14 4L10 1M14 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
