'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const prefectures = [
  { name: '東京都', reading: 'TOKYO', slug: 'tokyo' },
  { name: '埼玉県', reading: 'SAITAMA', slug: 'saitama' },
  { name: '千葉県', reading: 'CHIBA', slug: 'chiba' },
  { name: '神奈川県', reading: 'KANAGAWA', slug: 'kanagawa' },
  { name: '静岡県', reading: 'SHIZUOKA', slug: 'shizuoka' },
  { name: '大阪府', reading: 'OSAKA', slug: 'osaka' },
  { name: '兵庫県', reading: 'HYOGO', slug: 'hyogo' },
]

export default function Area() {
  return (
    <section
      id="area"
      style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:sticky lg:top-28"
          >
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>AREA</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.045em',
                lineHeight: 1.12,
                marginBottom: '2rem',
              }}
            >
              対応エリア
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.1, maxWidth: '360px' }}>
              関東エリアを中心に、東海・近畿にも対応。複数エリアにまたがる案件もご相談ください。
            </p>

            <div
              style={{
                marginTop: '2.75rem',
                padding: '1.5rem 1.75rem',
                background: 'var(--paper)',
                borderLeft: '2px solid #C25E7F',
              }}
            >
              <p style={{ fontSize: '0.8125rem', color: '#57544D', lineHeight: 2 }}>
                上記エリア外についても、案件内容によってはご対応可能な場合があります。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </motion.div>

          {/* Right: Prefecture list */}
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {prefectures.map((pref, i) => (
              <motion.div
                key={pref.slug}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              >
                <Link
                  href={`/area/${pref.slug}`}
                  className="row-link"
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.75rem',
                    padding: '1.625rem 0',
                    borderBottom: '1px solid var(--line)',
                    textDecoration: 'none',
                  }}
                >
                  <span className="mono" style={{ fontSize: '0.6875rem', color: '#B5B0A4', letterSpacing: '0.1em', flexShrink: 0, width: '2.25rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontSize: 'clamp(1.4rem, 2.7vw, 2rem)',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {pref.name}
                  </span>
                  <span className="mono" style={{ fontSize: '0.5625rem', color: '#B5B0A4', letterSpacing: '0.24em', marginLeft: 'auto' }}>
                    {pref.reading}
                  </span>
                  <span className="row-arrow" aria-hidden style={{ fontSize: '1.125rem', color: '#8F8B82', flexShrink: 0 }}>
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
