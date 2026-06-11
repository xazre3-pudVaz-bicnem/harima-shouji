'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/service', label: 'サービス' },
  { href: '/service/franchise-interior', label: 'FC本部向け' },
  { href: '/area', label: '対応エリア' },
  { href: '/company', label: '会社概要' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-gray-100'
            : 'bg-white/98 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                  alt="播磨商事ロゴ"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-gray-400 font-medium tracking-[0.18em] uppercase">HARIMA SHOUJI</div>
                <div className="text-sm font-bold text-gray-900 leading-none tracking-tight">株式会社播磨商事</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span className="font-semibold tracking-wide">080-4724-0713</span>
              </a>
              <Link
                href="/contact"
                className="bg-amber-500 text-white text-sm font-semibold px-6 py-3 hover:bg-amber-400 transition-colors tracking-wide"
              >
                複数店舗の相談
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-1.5 text-xs text-gray-700 font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>電話</span>
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900"
                aria-label="メニューを開く"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex flex-col lg:hidden"
            style={{ zIndex: 100, backgroundColor: '#071322' }}
          >
            {/* Overlay top bar */}
            <div
              className="flex items-center justify-between px-6 border-b shrink-0"
              style={{ height: '72px', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative w-9 h-9">
                  <Image
                    src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                    alt="播磨商事"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] font-medium tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>
                    HARIMA SHOUJI
                  </div>
                  <div className="text-sm font-bold text-white leading-none tracking-tight">株式会社播磨商事</div>
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 transition-colors"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                aria-label="メニューを閉じる"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 overflow-y-auto py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-5 group"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span
                      className="font-bold text-white group-hover:text-amber-400 transition-colors"
                      style={{ fontSize: 'clamp(1.35rem, 5vw, 1.7rem)' }}
                    >
                      {link.label}
                    </span>
                    <ArrowRight
                      className="w-5 h-5 shrink-0 group-hover:text-amber-400 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.18)' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom contact */}
            <div
              className="px-8 py-7 shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="tel:080-4724-0713"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xl font-bold tracking-wide">080-4724-0713</span>
                </a>
                <a
                  href="mailto:naisou@harima-shouji.co.jp"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm">naisou@harima-shouji.co.jp</span>
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-amber-500 text-white font-bold py-4 text-center hover:bg-amber-400 transition-colors tracking-wide"
                style={{ fontSize: '0.9375rem' }}
              >
                複数店舗の相談をする
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
