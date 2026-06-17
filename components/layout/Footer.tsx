import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/company', label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #040F1D 0%, #071A30 100%)', color: '#9ca3af' }}>
      {/* Thin amber accent line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.18) 50%, transparent 100%)',
        }}
      />

      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3.5 mb-7">
              <div
                className="relative w-11 h-11 shrink-0 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                  alt="播磨商事ロゴ"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight">
                <div
                  className="font-semibold tracking-[0.22em] uppercase mb-0.5"
                  style={{ fontSize: '0.6rem', color: '#374151' }}
                >
                  HARIMA SHOUJI
                </div>
                <div className="text-sm font-bold text-white">株式会社播磨商事</div>
              </div>
            </Link>

            <div className="space-y-3">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: '#6b7280' }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-amber-800" />
                080-4724-0713
              </a>
              <a
                href="mailto:naisou@harima-shouji.co.jp"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: '#6b7280' }}
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-amber-800" />
                naisou@harima-shouji.co.jp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#6b7280' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#374151' }}>
            &copy; {new Date().getFullYear()} 株式会社播磨商事
          </p>
          <Link
            href="/privacy"
            className="text-xs transition-colors hover:text-gray-400"
            style={{ color: '#374151' }}
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  )
}
