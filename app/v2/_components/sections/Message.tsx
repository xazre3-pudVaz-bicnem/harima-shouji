'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Message() {
  return (
    <section
      id="message"
      style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        <div
          style={{
            gap: '4rem',
            alignItems: 'start',
            maxWidth: '900px',
          }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr]"
        >

          {/* CEO Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: '160px',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                background: '#F5F4F0',
              }}
            >
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                alt="代表 播磨龍樹"
                fill
                style={{ objectFit: 'cover' }}
                sizes="160px"
              />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>播磨 龍樹</div>
              <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginTop: '2px', letterSpacing: '0.04em' }}>代表取締役</div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
              MESSAGE
            </div>

            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.375rem)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  lineHeight: 1.9,
                  letterSpacing: '-0.015em',
                  marginBottom: '2rem',
                }}
              >
                「多店舗展開に伴う施工管理の煩雑さを、もっとシンプルにしたい。」
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.1, marginBottom: '1.25rem' }}>
                フランチャイズ本部の皆様が直面する施工管理の課題は、店舗数が増えるほど複雑になります。複数の業者との調整、進捗の確認、品質の統一——これらすべてを一社に任せられる体制を整えることが、私たちの使命です。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.1 }}>
                店舗内装工事から原状回復工事まで、ワンストップでお任せいただくことで、本部担当者様が本来の業務に集中できる環境をつくります。
              </p>
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
