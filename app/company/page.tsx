import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社播磨商事の会社概要。フランチャイズ本部・多店舗展開企業向けの施工パートナー。',
}

const companyData = [
  { label: '会社名', value: '株式会社播磨商事' },
  { label: '代表取締役', value: '播磨 龍樹' },
  { label: '所在地', value: '〒177-0053\n東京都練馬区関町南2丁目2-4 山一ビル' },
  { label: '電話番号', value: '080-4724-0713' },
  { label: 'メール', value: 'naisou@harima-shouji.co.jp' },
  { label: '営業時間', value: '平日 9:00〜18:00\n（夜間・土日は要相談）' },
  { label: '事業内容', value: '店舗内装工事\n原状回復工事\nフランチャイズ本部向け施工管理' },
  { label: '対応エリア', value: '東京都・埼玉県・千葉県・神奈川県\n静岡県・大阪府・兵庫県' },
]

export default function CompanyPage() {
  return (
    <div style={{ background: '#FAFAF8' }}>

      <PageHero
        label="COMPANY"
        title="会社概要"
        image="/LINE_ALBUM_2026.6.10_260610_2.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '会社概要', href: '/company' },
        ]}
      />

      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '5rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-[1fr_1fr]">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>PROFILE</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '3rem' }}>会社情報</h2>
              <dl>
                {companyData.map(({ label, value }) => (
                  <div key={label} style={{ display: 'grid', gridTemplateColumns: '7rem 1fr', gap: '1.5rem', padding: '1.375rem 0', borderBottom: '1px solid #F0EFEC' }}>
                    <dt style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.04em', paddingTop: '0.125rem' }}>{label}</dt>
                    <dd style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>MESSAGE</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '2.5rem' }}>代表挨拶</h2>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <div style={{ flexShrink: 0, width: '80px', height: '100px', position: 'relative', overflow: 'hidden', background: '#F5F4F0' }}>
                  <Image src="/LINE_ALBUM_2026.6.10_260610_1.jpg" alt="代表 播磨龍樹" fill style={{ objectFit: 'cover' }} sizes="80px" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>播磨 龍樹</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '3px' }}>代表取締役</div>
                </div>
              </div>
              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.2, marginBottom: '1.5rem' }}>多店舗展開に伴う施工管理の煩雑さを、もっとシンプルにしたい。それが私たちの出発点です。</p>
              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.2, marginBottom: '1.5rem' }}>フランチャイズ本部の皆様が直面する課題は、店舗数が増えるほど複雑になります。複数の業者との調整、進捗の確認、品質の統一——これらすべてを一社に任せられる体制を整えることが私たちの使命です。</p>
              <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2.2 }}>店舗内装工事から原状回復工事まで、ワンストップでお任せいただくことで、本部担当者様が本来の業務に集中できる環境をつくります。</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '7rem', paddingBottom: '7rem', background: '#F5F4F0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.25rem' }}>ACCESS</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '3rem' }}>アクセス</h2>
          <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="grid-cols-1 lg:grid-cols-[1fr_2fr]">
            <div>
              <p style={{ fontSize: '0.9375rem', color: '#1C1C1C', lineHeight: 2.1, marginBottom: '1rem' }}>〒177-0053<br />東京都練馬区関町南2丁目2-4<br />山一ビル</p>
              <a href="tel:080-4724-0713" style={{ fontSize: '0.9375rem', color: '#0A0A0A', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>080-4724-0713</a>
              <p style={{ fontSize: '0.8125rem', color: '#9CA3AF' }}>平日 9:00〜18:00</p>
            </div>
            <div style={{ background: '#E5E3DF', aspectRatio: '16/7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.8125rem', color: '#9CA3AF' }}>Map</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#0D1117', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '2rem' }}>お問い合わせ・ご相談</h2>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#FFFFFF', color: '#0A0A0A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.06em', textDecoration: 'none' }}>
            お問い合わせ
          </Link>
        </div>
      </section>

    </div>
  )
}
