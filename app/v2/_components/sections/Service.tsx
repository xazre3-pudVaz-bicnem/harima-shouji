'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const services = [
  {
    index: '01',
    en: 'Shop interior',
    title: '店舗内装工事',
    description:
      '新規出店から改装・リニューアルまで。本部仕様書に基づいた統一施工で、全店の品質を均一に保ちます。夜間・短工期、複数店舗の同時進行にも対応します。',
    tags: ['新規出店', '改装・リニューアル', 'FC統一施工', '夜間・短工期'],
    image: '/store-01.png',
    alt: '店舗内装工事の施工イメージ',
    href: '/service/shop-interior',
  },
  {
    index: '02',
    en: 'Restoration',
    title: '原状回復工事',
    description:
      'テナント退去時の原状回復を、立会い代行から解体・内装復旧・清掃まで一括対応。複数店舗の退去スケジュールも一元管理し、費用の適正化を支援します。',
    tags: ['退去立会い代行', '解体・撤去', '内装復旧', '複数店舗一括'],
    image: '/resto-01.png',
    alt: '店舗原状回復工事のイメージ',
    href: '/service/restoration',
  },
]

export default function Service() {
  return (
    <section id="service" style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '5rem', flexWrap: 'wrap' }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>SERVICES</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.045em', lineHeight: 1.12 }}>
              事業内容
            </h2>
          </div>
          <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#B5B0A4', textTransform: 'uppercase' }}>
            ( 02 SERVICES )
          </span>
        </motion.div>

        {/* Editorial rows */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
              style={{ borderBottom: '1px solid var(--line)', padding: '4.5rem 0' }}
            >
              <Link href={service.href} style={{ textDecoration: 'none', display: 'block' }} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 'clamp(2rem, 4vw, 4.5rem)', alignItems: 'center' }}>

                  {/* Image */}
                  <div className={`img-zoom lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--surface)' }}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <span
                      className="mono"
                      style={{
                        position: 'absolute',
                        bottom: '1.25rem',
                        left: '1.25rem',
                        fontSize: '0.5625rem',
                        letterSpacing: '0.22em',
                        color: 'rgba(255,255,255,0.85)',
                        background: 'rgba(10,10,10,0.6)',
                        padding: '0.4rem 0.8rem',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      HARIMA — {service.en}
                    </span>
                  </div>

                  {/* Text */}
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
                      <span className="mono" style={{ fontSize: '0.6875rem', color: '#C25E7F', letterSpacing: '0.1em' }}>
                        ({service.index})
                      </span>
                      <span className="serif-en" style={{ fontStyle: 'italic', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', color: '#B5B0A4', letterSpacing: '0.01em' }}>
                        {service.en}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.1, marginBottom: '2rem' }}>
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem',
                            color: '#57544D',
                            border: '1px solid var(--line-2)',
                            padding: '0.375rem 0.875rem',
                            letterSpacing: '0.03em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className="mono"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.22em', color: '#0A0A0A', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid #0A0A0A' }}
                    >
                      READ MORE
                      <span aria-hidden>→</span>
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
