'use client'

import { motion } from 'framer-motion'

const prefectures = [
  { name: '東京都', reading: 'Tokyo' },
  { name: '埼玉県', reading: 'Saitama' },
  { name: '千葉県', reading: 'Chiba' },
  { name: '神奈川県', reading: 'Kanagawa' },
  { name: '静岡県', reading: 'Shizuoka' },
  { name: '大阪府', reading: 'Osaka' },
  { name: '兵庫県', reading: 'Hyogo' },
]

export default function Area() {
  return (
    <section
      id="area"
      style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ gap: '5rem', alignItems: 'start' }} className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              AREA
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '2rem',
              }}
            >
              対応エリア
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, maxWidth: '340px' }}>
              関東エリアを中心に、東海・近畿にも対応。複数エリアにまたがる案件もご相談ください。
            </p>

            <div
              style={{
                marginTop: '3rem',
                padding: '1.75rem 2rem',
                background: '#F5F4F0',
                borderLeft: '2px solid #0A0A0A',
              }}
            >
              <p style={{ fontSize: '0.8125rem', color: '#3A3A3A', lineHeight: 2 }}>
                上記エリア外についても、案件内容によってはご対応可能な場合があります。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </motion.div>

          {/* Right: Prefecture list */}
          <div>
            {prefectures.map((pref, i) => (
              <motion.div
                key={pref.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '1.375rem 0',
                  borderBottom: '1px solid #F0EFEC',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {pref.name}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: '#C4C2BE', letterSpacing: '0.12em', fontWeight: 500 }}>
                    {pref.reading}
                  </span>
                </div>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#0A0A0A',
                    flexShrink: 0,
                  }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
