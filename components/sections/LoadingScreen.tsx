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
      const timer = setTimeout(() => setVisible(false), 1400)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 flex items-center justify-center bg-white"
          style={{ zIndex: 200 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
