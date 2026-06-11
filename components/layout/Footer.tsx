import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const serviceLinks = [
  { href: '/service/franchise-interior', label: 'フランチャイズ本部向け内装工事' },
  { href: '/service/shop-interior', label: '店舗内装工事' },
  { href: '/service/restoration', label: '原状回復工事' },
  { href: '/service/cross-wallpaper', label: 'クロス張替え工事' },
  { href: '/service/cleaning', label: '店舗クリーニング' },
  { href: '/service/exit-support', label: '退去立会いサポート' },
]

const companyLinks = [
  { href: '/company', label: '会社概要' },
  { href: '/area', label: '対応エリア' },
  { href: '/blog', label: 'ブログ' },
  { href: '/faq', label: 'よくある質問' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer className="bg-[#06111F] text-gray-400">
      {/* Main Footer */}
      <div className="container pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 mb-8 group">
              <div className="relative w-14 h-14 shrink-0 bg-white/6 overflow-hidden">
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                  alt="播磨商事ロゴ"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight">
                <div className="text-[9px] text-gray-600 font-semibold tracking-[0.22em] uppercase mb-0.5">
                  HARIMA SHOUJI
                </div>
                <div className="text-base font-bold text-white">株式会社播磨商事</div>
                <div className="text-[10px] text-gray-600 mt-0.5 leading-snug">
                  FC本部・多店舗展開の施工パートナー
                </div>
              </div>
            </Link>

            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-xs">
              フランチャイズ本部・多店舗展開企業の内装工事・原状回復・退去立会いをまとめてサポートします。
            </p>

            <div className="space-y-4">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                080-4724-0713
              </a>
              <a
                href="mailto:naisou@harima-shouji.co.jp"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                naisou@harima-shouji.co.jp
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">東京都練馬区関町南2丁目2-4<br />山一ビル</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-[10px] font-bold text-white mb-6 tracking-[0.2em] uppercase">
              Services
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-200 transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold text-white mb-6 tracking-[0.2em] uppercase">
              Company
            </h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-[10px] font-bold text-white mb-6 tracking-[0.2em] uppercase">
              Contact
            </h3>
            <p className="text-sm text-gray-600 mb-7 leading-relaxed">
              複数店舗のまとめてのご相談も歓迎です。現地調査・お見積りは無料です。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-amber-500 text-white text-sm font-semibold px-7 py-3.5 hover:bg-amber-400 transition-colors group"
            >
              無料相談する
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <div className="mt-7 pt-7 border-t border-white/5">
              <a
                href="tel:080-4724-0713"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="font-semibold text-gray-300">080-4724-0713</span>
              </a>
              <p className="text-xs text-gray-700 mt-1.5 ml-6">平日 9:00〜18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} 株式会社播磨商事. All Rights Reserved.
          </p>
          <Link href="/privacy" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  )
}
