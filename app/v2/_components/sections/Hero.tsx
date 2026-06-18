'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '10vh',
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
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(5,5,8,0.82) 0%, rgba(5,5,8,0.5) 50%, rgba(5,5,8,0.2) 100%)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            fontSize: '0.5625rem',
            fontWeight: 700,
            letterSpacing: '0.32em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          HARIMA SHOUJI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(2.25rem, 5.5vw, 5.5rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}
        >
          フランチャイズ本部と<br />
          多店舗展開企業のための<br />
          施工パートナー
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(0.875rem, 1.3vw, 1rem)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.9,
            maxWidth: '380px',
          }}
        >
          店舗内装工事から原状回復工事まで。<br />
          施工管理の負担を、軽減します。
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2rem',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div style={{ fontSize: '0.5625rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
          Scroll
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.25)' }}
        />
      </motion.div>
    </section>
  )
}
