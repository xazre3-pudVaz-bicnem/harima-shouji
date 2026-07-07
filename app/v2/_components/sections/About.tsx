'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      style={{ background: '#FFFFFF', overflow: 'hidden' }}
    >
      <div style={{ minHeight: '70vh' }} className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}
        >
          <Image
            src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
            alt="施工現場"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Subtle dark edge */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 80%, rgba(255,255,255,0.15) 100%)' }} />
        </motion.div>

        {/* Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(3rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
              ABOUT
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                lineHeight: 1.25,
                letterSpacing: '-0.03em',
                marginBottom: '2rem',
              }}
            >
              店舗運営を支える<br />
              確かな施工体制
            </h2>

            <p style={{ fontSize: '0.9375rem', color: '#6B675F', lineHeight: 2, maxWidth: '360px' }}>
              フランチャイズ本部・チェーン店本部・多店舗展開企業を対象に、店舗内装工事と原状回復工事をワンストップで提供します。施工管理の窓口を一本化することで、本部担当者様の負担を大幅に軽減します。
            </p>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #DDD8CE' }}>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: '対応エリア', value: '関東・東海・近畿（7都府県）' },
                  { label: '対応規模', value: '1店舗〜複数店舗の同時管理' },
                  { label: '対応時間', value: '夜間・短工期対応可' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                    <dt style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em', color: '#8F8B82', whiteSpace: 'nowrap', minWidth: '80px' }}>{label}</dt>
                    <dd style={{ fontSize: '0.875rem', color: '#3A3A3A' }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
