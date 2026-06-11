'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/service', label: 'サービス' },
  { href: '/works', label: '施工実績' },
  { href: '/company', label: '会社概要' },
  { href: '/area', label: '対応エリア' },
  { href: '/faq', label: 'よくある質問' },
  { href: '/blog', label: 'ブログ' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-white/98 backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-18 md:h-20" style={{ height: '72px' }}>
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
              無料相談する
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="tel:080-4724-0713"
              className="flex items-center gap-1.5 text-xs text-gray-700 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>電話</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 hover:text-gray-900"
              aria-label="メニューを開く"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container py-5 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 font-medium py-4 border-b border-gray-50 hover:text-gray-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-5 space-y-3">
              <a
                href="tel:080-4724-0713"
                className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium py-3.5 hover:border-gray-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                080-4724-0713
              </a>
              <Link
                href="/contact"
                className="block bg-amber-500 text-white text-sm font-semibold py-3.5 text-center hover:bg-amber-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                無料相談する
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
