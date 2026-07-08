import Link from 'next/link'
import Image from 'next/image'

const linkGroups = [
  {
    label: 'SERVICE',
    links: [
      { href: '/service/shop-interior', label: '店舗内装工事' },
      { href: '/service/restoration', label: '原状回復工事' },
      { href: '/franchise', label: 'FC本部向け' },
      { href: '/industry/salon-interior', label: 'サロン内装' },
      { href: '/industry/gym-interior', label: 'ジム内装' },
    ],
  },
  {
    label: 'ARCHIVE',
    links: [
      { href: '/works', label: '施工実績' },
      { href: '/voice', label: 'お客様の声' },
      { href: '/news', label: 'ニュース' },
      { href: '/column', label: 'コラム' },
    ],
  },
  {
    label: 'COMPANY',
    links: [
      { href: '/area', label: '対応エリア' },
      { href: '/company', label: '会社概要' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#101014', color: 'rgba(255,255,255,0.4)', overflow: 'hidden' }}>

      {/* CTA strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '3.25rem 1.5rem' }}>
          <Link
            href="/contact"
            className="row-link-dark"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', textDecoration: 'none' }}
          >
            <div>
              <div className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.26em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                GET IN TOUCH
              </div>
              <div style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.25 }}>
                店舗施工のご相談は、こちらから。
              </div>
            </div>
            <span className="row-arrow" aria-hidden style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '5rem 1.5rem 3rem' }}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_auto_auto_auto] md:gap-16">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
              <div style={{ width: '38px', height: '38px', flexShrink: 0, position: 'relative', background: '#F6F4EF', padding: '4px', borderRadius: '2px', boxSizing: 'border-box' }}>
                <Image
                  src="/LINE_ALBUM_2026.6.10_260610_5.jpg"
                  alt="播磨商事ロゴ"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="38px"
                />
              </div>
              <div>
                <div className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  HARIMA SHOUJI CO., LTD.
                </div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.015em' }}>
                  株式会社播磨商事
                </div>
              </div>
            </div>
            <address style={{ fontStyle: 'normal', fontSize: '0.8125rem', lineHeight: 2.1, color: 'rgba(255,255,255,0.38)' }}>
              <div>〒177-0053 東京都練馬区関町南2丁目2-4 山一ビル</div>
              <div className="mono" style={{ letterSpacing: '0.04em' }}>
                <a href="tel:080-4724-0713" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}>
                  080-4724-0713
                </a>
              </div>
              <div className="mono" style={{ letterSpacing: '0.02em' }}>
                <a href="mailto:naisou@harima-shouji.co.jp" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}>
                  naisou@harima-shouji.co.jp
                </a>
              </div>
            </address>
            <div className="mono" style={{ marginTop: '1.75rem', fontSize: '0.5625rem', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>
              TOKYO / SAITAMA / CHIBA / KANAGAWA<br />SHIZUOKA / OSAKA / HYOGO
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <nav key={group.label}>
              <div className="mono" style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.26em', color: '#C25E7F', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                {group.label}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8125rem' }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: 'rgba(255,255,255,0.42)', textDecoration: 'none', fontSize: '0.8125rem', transition: 'color 0.2s' }}
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

      {/* Giant wordmark */}
      <div aria-hidden style={{ overflow: 'hidden', lineHeight: 0.78, userSelect: 'none', pointerEvents: 'none' }}>
        <div
          className="mono"
          style={{
            fontSize: 'clamp(4rem, 12.5vw, 12.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.045)',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            transform: 'translateY(12%)',
          }}
        >
          HARIMA&nbsp;SHOUJI
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.375rem 1.5rem' }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.22)' }}>
            © {new Date().getFullYear()} HARIMA SHOUJI CO., LTD.
          </p>
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/sitemap-index" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
              サイトマップ
            </Link>
            <Link href="/privacy" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>
              プライバシーポリシー
            </Link>
            <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}>
              Shop Interior & Restoration
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
