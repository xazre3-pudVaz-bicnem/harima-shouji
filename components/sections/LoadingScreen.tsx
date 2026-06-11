'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('hs_loaded')) {
      sessionStorage.setItem('hs_loaded', '1')
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 1600)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 200, backgroundColor: '#071322' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-20 h-20">
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                alt="播磨商事"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center">
              <div className="text-[9px] text-white/30 font-medium tracking-[0.25em] uppercase mb-1">
                HARIMA SHOUJI
              </div>
              <div className="text-base font-bold text-white/80 tracking-tight">
                株式会社播磨商事
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
