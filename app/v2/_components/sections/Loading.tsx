'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Loading() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('hs_v2_loaded')) {
      sessionStorage.setItem('hs_v2_loaded', '1')
      setVisible(true)
      const t = setTimeout(() => setVisible(false), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: '#F6F4EF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* corner meta */}
          <div className="mono" style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '0.5625rem', letterSpacing: '0.26em', color: '#B5B0A4', textTransform: 'uppercase' }}>
            HARIMA SHOUJI CO., LTD.
          </div>
          <div className="mono" style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.5625rem', letterSpacing: '0.26em', color: '#B5B0A4', textTransform: 'uppercase' }}>
            CONSTRUCTION MANAGEMENT
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
            >
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                alt="株式会社播磨商事"
                width={110}
                height={132}
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>

            <motion.div
              className="mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.42em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}
            >
              HARIMA&nbsp;SHOUJI
            </motion.div>

            <div style={{ position: 'relative', width: '120px', height: '1px', background: '#DDD8CE', margin: '0 auto', overflow: 'hidden' }}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'absolute', inset: 0, background: '#C25E7F' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
