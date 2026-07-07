'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/service', label: 'サービス' },
  { href: '/franchise', label: 'FC本部向け' },
  { href: '/works', label: '施工実績' },
  { href: '/area', label: '対応エリア' },
  { href: '/company', label: '会社概要' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null
    if (!hash) return
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(hash)
    if (target) {
      const offset = (target as HTMLElement).getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'background 0.3s, border-color 0.3s',
          background: scrolled ? 'rgba(250,250,248,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E3DF' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                alt="播磨商事ロゴ"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="28px"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.3em', color: '#9CA3AF', textTransform: 'uppercase' }}>
                HARIMA SHOUJI
              </span>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>
                株式会社播磨商事
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                style={{
                  fontSize: '0.8125rem',
                  color: '#5A5A5A',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0A0A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5A5A5A')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, '#contact')}
              style={{
                display: 'inline-block',
                padding: '0.625rem 1.75rem',
                background: '#0A0A0A',
                color: '#FFFFFF',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2A2A2A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0A0A0A')}
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            aria-label="メニューを開く"
          >
            <span style={{ display: 'block', width: '22px', height: '1px', background: '#0A0A0A' }} />
            <span style={{ display: 'block', width: '22px', height: '1px', background: '#0A0A0A' }} />
            <span style={{ display: 'block', width: '14px', height: '1px', background: '#0A0A0A' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: '#0D1117',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Mobile top bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', padding: '0 2rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', flexShrink: 0, position: 'relative' }}>
                  <Image
                    src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                    alt="播磨商事ロゴ"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    sizes="28px"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>HARIMA SHOUJI</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>株式会社播磨商事</span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem', lineHeight: 1 }}
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>

            {/* Mobile nav links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'block',
                    padding: '1.375rem 0',
                    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile bottom */}
            <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, '#contact')}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '1rem',
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                }}
              >
                お問い合わせ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
