import Link from 'next/link'
import Image from 'next/image'

const linkGroups = [
  {
    label: 'サービス',
    links: [
      { href: '/service/shop-interior', label: '店舗内装工事' },
      { href: '/service/restoration', label: '原状回復工事' },
      { href: '/industry', label: '業種別対応' },
      { href: '/solution', label: 'ソリューション' },
      { href: '/cases', label: '施工事例' },
    ],
  },
  {
    label: '企業向け',
    links: [
      { href: '/franchise', label: 'FC本部向け' },
      { href: '/multi-store', label: '多店舗展開企業向け' },
      { href: '/store-development', label: '店舗開発担当者向け' },
    ],
  },
  {
    label: 'エリア・情報',
    links: [
      { href: '/area', label: '対応エリア' },
      { href: '/column', label: 'コラム' },
      { href: '/blog', label: 'ブログ' },
      { href: '/company', label: '会社概要' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0D1117', color: 'rgba(255,255,255,0.4)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto_auto]">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '44px', height: '44px', overflow: 'hidden', flexShrink: 0, position: 'relative', background: '#FFFFFF', borderRadius: '2px' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                  alt="播磨商事ロゴ"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="44px"
                />
              </div>
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  HARIMA SHOUJI
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                  株式会社播磨商事
                </div>
              </div>
            </div>
            <address style={{ fontStyle: 'normal', fontSize: '0.8125rem', lineHeight: 2 }}>
              <div>〒177-0053 東京都練馬区関町南2丁目2-4 山一ビル</div>
              <div>
                <a href="tel:080-4724-0713" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                  080-4724-0713
                </a>
              </div>
              <div>
                <a href="mailto:naisou@harima-shouji.co.jp" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                  naisou@harima-shouji.co.jp
                </a>
              </div>
            </address>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <nav key={group.label}>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {group.label}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.8125rem', transition: 'color 0.2s' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
            &copy; {new Date().getFullYear()} 株式会社播磨商事
          </p>
          <Link href="/privacy" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  )
}
