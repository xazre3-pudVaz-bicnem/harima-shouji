'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

function ClipLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em', marginBottom: '-0.08em' }}>
      <motion.span
        initial={{ y: '112%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: EASE }}
        style={{ display: 'block' }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '640px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        background: '#101014',
        marginTop: '-76px',
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.9,
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(8,8,10,0.84) 0%, rgba(8,8,10,0.5) 52%, rgba(8,8,10,0.22) 100%)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(8,8,10,0.72) 0%, transparent 45%)',
          zIndex: 1,
        }}
      />
      {/* top scrim for header legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,8,10,0.5) 0%, transparent 16%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1480px',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
        }}
      >
        {/* eyebrow */}
        <motion.div
          className="mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: '2.5rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
          HARIMA SHOUJI — CONSTRUCTION MANAGEMENT
        </motion.div>

        {/* serif accent */}
        <motion.div
          className="serif-en"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          style={{
            fontStyle: 'italic',
            fontSize: 'clamp(1.25rem, 2.4vw, 2rem)',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '1rem',
            letterSpacing: '0.01em',
          }}
        >
          One-stop construction partner
        </motion.div>

        <h1 style={{ margin: 0 }}>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(2.7rem, 7.2vw, 6.75rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.045em',
            }}
          >
            <ClipLine delay={0.5}>店舗施工を、</ClipLine>
            <ClipLine delay={0.62}>
              ひとつの<span style={{ color: 'rgba(255,255,255,0.92)' }}>窓口</span>に。
            </ClipLine>
          </span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
            style={{
              display: 'block',
              fontSize: 'clamp(0.875rem, 1.4vw, 1.0625rem)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.68)',
              letterSpacing: '0.04em',
              lineHeight: 1.9,
              marginTop: '1.75rem',
            }}
          >
            フランチャイズ本部・多店舗展開企業のための施工パートナー
          </motion.span>
        </h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.75rem' }}
        >
          <Link href="/contact" className="btn btn-paper">
            お問い合わせ
            <span aria-hidden>→</span>
          </Link>
          <Link href="/service" className="btn btn-line-light">
            サービスを見る
          </Link>
        </motion.div>

        {/* bottom meta rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.35 }}
          style={{
            marginTop: '4.5rem',
            borderTop: '1px solid rgba(255,255,255,0.16)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.25rem 0 2.25rem',
            gap: '1.5rem',
          }}
        >
          <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase' }}>
            TOKYO / SAITAMA / CHIBA / KANAGAWA / SHIZUOKA / OSAKA / HYOGO
          </span>
          <span className="mono hidden md:flex" style={{ alignItems: 'center', gap: '0.75rem', fontSize: '0.5625rem', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
            SCROLL
            <motion.span
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.4)', display: 'inline-block', transformOrigin: 'top' }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
