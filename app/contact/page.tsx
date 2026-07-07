import type { Metadata } from 'next'
import PageHero from '@/app/v2/_components/PageHero'
import ContactForm from '@/app/v2/contact/_components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '店舗内装工事・原状回復工事のご相談はこちら。複数店舗のまとめてのご相談も歓迎です。',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>

      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        subtitle="まずはお気軽にご相談ください。複数店舗のまとめてのご相談も歓迎します。"
        image="/LINE_ALBUM_2026.6.10_260610_4.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'お問い合わせ', href: '/contact' },
        ]}
      />

      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '5rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-[1fr_2fr]">

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.25rem' }}>INFO</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2.5rem' }}>
                お電話でも<br />受け付けています
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em', color: '#8F8B82', marginBottom: '0.5rem' }}>TEL</div>
                  <a href="tel:080-4724-0713" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', letterSpacing: '-0.02em' }}>
                    080-4724-0713
                  </a>
                  <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginTop: '0.375rem' }}>平日 9:00〜18:00</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em', color: '#8F8B82', marginBottom: '0.5rem' }}>EMAIL</div>
                  <a href="mailto:naisou@harima-shouji.co.jp" style={{ fontSize: '0.9375rem', color: '#0A0A0A', textDecoration: 'none' }}>
                    naisou@harima-shouji.co.jp
                  </a>
                </div>
                <div style={{ padding: '1.5rem 1.75rem', background: '#EDEAE2', borderLeft: '2px solid #0A0A0A' }}>
                  <p style={{ fontSize: '0.8125rem', color: '#6B675F', lineHeight: 2 }}>
                    複数店舗の施工管理、まとめてのご相談も歓迎します。対応エリア・工期のご確認もお気軽にどうぞ。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
