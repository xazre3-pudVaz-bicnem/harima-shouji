import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const mainLinks = [
  { href: '/service', label: 'サービス一覧' },
  { href: '/service/franchise-interior', label: 'FC本部向け' },
  { href: '/area', label: '対応エリア' },
  { href: '/company', label: '会社概要' },
  { href: '/faq', label: 'よくある質問' },
  { href: '/contact', label: 'お問い合わせ' },
]

const serviceLinks = [
  { href: '/service/shop-interior', label: '店舗内装工事' },
  { href: '/service/restoration', label: '原状回復工事' },
  { href: '/service/cross-wallpaper', label: 'クロス張替え' },
  { href: '/service/cleaning', label: '店舗クリーニング' },
  { href: '/service/exit-support', label: '退去立会い' },
  { href: '/service/demolition', label: '解体・撤去' },
]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm transition-colors duration-200 hover:text-gray-100"
        style={{ color: '#6b7280' }}
      >
        {label}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #040F1D 0%, #071A30 100%)', color: '#9ca3af' }}>
      {/* Subtle amber accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.12) 50%, transparent 100%)' }} />

      {/* Main Grid */}
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '5.5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 mb-8">
              <div
                className="relative w-12 h-12 shrink-0 overflow-hidden"
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
                  className="text-[9px] font-semibold tracking-[0.22em] uppercase mb-0.5"
                  style={{ color: '#374151' }}
                >
                  HARIMA SHOUJI
                </div>
                <div className="text-sm font-bold text-white">株式会社播磨商事</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#374151' }}>
                  FC本部・多店舗展開の施工パートナー
                </div>
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: '#4b5563', lineHeight: '1.9', maxWidth: '18rem' }}
            >
              フランチャイズ本部・多店舗展開企業の内装工事・原状回復・退去立会いを一括サポートする専門施工会社です。
            </p>

            <div className="space-y-3.5">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: '#6b7280' }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: '#92400e' }} />
                080-4724-0713
              </a>
              <a
                href="mailto:naisou@harima-shouji.co.jp"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: '#6b7280' }}
              >
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: '#92400e' }} />
                naisou@harima-shouji.co.jp
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: '#4b5563' }}>
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#92400e' }} />
                <span>東京都練馬区関町南2丁目2-4</span>
              </div>
            </div>
          </div>

          {/* Navigation links — two sub-columns */}
          <div className="lg:col-span-4 lg:col-start-6">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3
                  className="font-bold text-white tracking-[0.25em] uppercase mb-7"
                  style={{ fontSize: '0.6rem' }}
                >
                  Menu
                </h3>
                <ul className="space-y-4">
                  {mainLinks.map((l) => <FooterLink key={l.href} {...l} />)}
                </ul>
              </div>
              <div>
                <h3
                  className="font-bold text-white tracking-[0.25em] uppercase mb-7"
                  style={{ fontSize: '0.6rem' }}
                >
                  Services
                </h3>
                <ul className="space-y-4">
                  {serviceLinks.map((l) => <FooterLink key={l.href} {...l} />)}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h3
              className="font-bold text-white tracking-[0.25em] uppercase mb-7"
              style={{ fontSize: '0.6rem' }}
            >
              Contact
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: '#4b5563', lineHeight: '1.9' }}>
              複数店舗の工事管理・原状回復・退去立会いについてお気軽にご相談ください。
            </p>
            <a
              href="tel:080-4724-0713"
              className="flex items-center gap-2.5 mb-1.5 transition-colors duration-200 hover:text-white"
              style={{ color: '#e5e7eb' }}
            >
              <Phone className="w-4 h-4 shrink-0" style={{ color: '#92400e' }} />
              <span className="text-xl font-bold tracking-wide">080-4724-0713</span>
            </a>
            <p className="text-xs mb-8" style={{ color: '#374151', paddingLeft: '1.625rem' }}>
              平日 9:00〜18:00
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wider transition-all duration-300 hover:text-white group"
              style={{
                color: '#9ca3af',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.875rem 1.75rem',
              }}
            >
              無料相談をする
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#374151' }}>
            &copy; {new Date().getFullYear()} 株式会社播磨商事. All Rights Reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs transition-colors duration-200 hover:text-gray-400"
            style={{ color: '#374151' }}
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  )
}
