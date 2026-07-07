'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Message() {
  return (
    <section
      id="message"
      style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="eyebrow"
          style={{ marginBottom: '3.5rem' }}
        >
          MESSAGE
        </motion.div>

        <div
          style={{ gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start', maxWidth: '1000px' }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr]"
        >

          {/* CEO Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div
              style={{
                width: '150px',
                height: '190px',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--surface)',
              }}
            >
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_1.jpg"
                alt="代表 播磨龍樹"
                fill
                style={{ objectFit: 'cover' }}
                sizes="150px"
              />
            </div>
            <div style={{ marginTop: '1.125rem' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>播磨 龍樹</div>
              <div className="mono" style={{ fontSize: '0.5625rem', color: '#8F8B82', marginTop: '4px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                CEO / 代表取締役
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <blockquote style={{ margin: 0 }}>
              <p
                className="serif-jp"
                style={{
                  fontSize: 'clamp(1.4rem, 2.7vw, 2.1rem)',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  lineHeight: 1.95,
                  letterSpacing: '0.01em',
                  marginBottom: '2.25rem',
                }}
              >
                多店舗展開に伴う施工管理の煩雑さを、
                <br className="hidden md:block" />
                もっとシンプルにしたい。
              </p>

              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2, marginBottom: '1.25rem', maxWidth: '620px' }}>
                フランチャイズ本部の皆様が直面する施工管理の課題は、店舗数が増えるほど複雑になります。複数の業者との調整、進捗の確認、品質の統一——これらすべてを一社に任せられる体制を整えることが、私たちの使命です。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.2, maxWidth: '620px' }}>
                店舗内装工事から原状回復工事まで、ワンストップでお任せいただくことで、本部担当者様が本来の業務に集中できる環境をつくります。
              </p>
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
