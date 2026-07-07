'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/service', label: 'サービス', en: 'SERVICE' },
  { href: '/franchise', label: 'FC本部向け', en: 'FRANCHISE' },
  { href: '/works', label: '施工実績', en: 'WORKS' },
  { href: '/area', label: '対応エリア', en: 'AREA' },
  { href: '/company', label: '会社概要', en: 'COMPANY' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  // トップページの未スクロール時はヒーロー動画上に載るため白文字にする
  const onDarkHero = pathname === '/' && !scrolled

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'background 0.35s, border-color 0.35s',
          background: scrolled ? 'rgba(246,244,239,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid #DDD8CE' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1480px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '11px' }}>
            <div style={{ width: '30px', height: '30px', flexShrink: 0, position: 'relative' }}>
              <Image
                src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                alt="播磨商事ロゴ"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="30px"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span className="mono" style={{ fontSize: '0.5rem', fontWeight: 500, letterSpacing: '0.3em', color: onDarkHero ? 'rgba(255,255,255,0.5)' : '#8F8B82', textTransform: 'uppercase', transition: 'color 0.3s' }}>
                HARIMA SHOUJI
              </span>
              <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: onDarkHero ? '#FFFFFF' : '#0A0A0A', letterSpacing: '-0.015em', lineHeight: 1, transition: 'color 0.3s' }}>
                株式会社播磨商事
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ gap: '2.25rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const baseColor = onDarkHero
                ? active ? '#FFFFFF' : 'rgba(255,255,255,0.72)'
                : active ? '#0A0A0A' : '#57544D'
              const hoverColor = onDarkHero ? '#FFFFFF' : '#0A0A0A'
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: 'relative',
                    fontSize: '0.8125rem',
                    fontWeight: active ? 700 : 500,
                    color: baseColor,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
                >
                  {active && (
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C25E7F', flexShrink: 0 }} />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className={`btn ${onDarkHero ? 'btn-paper' : 'btn-ink'}`} style={{ padding: '0.75rem 1.9rem', fontSize: '0.78125rem' }}>
              お問い合わせ
              <span aria-hidden style={{ fontSize: '0.8125rem', lineHeight: 1 }}>→</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex lg:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}
            aria-label="メニューを開く"
          >
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: onDarkHero ? '#FFFFFF' : '#0A0A0A', transition: 'background 0.3s' }} />
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: onDarkHero ? '#FFFFFF' : '#0A0A0A', transition: 'background 0.3s' }} />
            <span style={{ display: 'block', width: '14px', height: '1.5px', background: '#C25E7F' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: '#101014',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Mobile top bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px', padding: '0 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span className="mono" style={{ fontSize: '0.5rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>HARIMA SHOUJI</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>株式会社播磨商事</span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="mono"
                style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: '0.625rem', letterSpacing: '0.18em', padding: '0.5rem 0.875rem' }}
                aria-label="閉じる"
              >
                CLOSE
              </button>
            </div>

            {/* Mobile nav links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2rem', overflowY: 'auto' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '1.25rem',
                      padding: '1.25rem 0',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span className="mono" style={{ fontSize: '0.625rem', color: '#C25E7F', letterSpacing: '0.1em', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: 'clamp(1.6rem, 6vw, 2.25rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                      {link.label}
                    </span>
                    <span className="mono" style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', marginLeft: 'auto' }}>
                      {link.en}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ padding: '1.5rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '1.1rem',
                  background: '#F6F4EF',
                  color: '#0A0A0A',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  marginBottom: '1.25rem',
                }}
              >
                お問い合わせ →
              </Link>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="tel:080-4724-0713" className="mono" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.06em' }}>
                  080-4724-0713
                </a>
                <span className="mono" style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.22em' }}>
                  TOKYO / KANTO — KANSAI
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
