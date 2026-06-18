import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: '多店舗展開企業向け | 複数店舗の施工管理を一括対応',
  description: '多店舗展開企業の出店・改装・退店施工を一括管理。複数店舗が同時進行しても担当者の窓口は1つ。関東・東海・近畿 7都府県対応。現地調査・見積無料。',
  keywords: ['多店舗展開 内装工事', '多店舗 施工管理', '多店舗 原状回復', '複数店舗 工事 一括'],
  alternates: { canonical: 'https://harima-shouji.co.jp/multi-store' },
  openGraph: { title: '多店舗展開企業向け | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/multi-store' },
}

export default function MultiStorePage() {
  return (
    <div style={{ background: '#FAFAF8' }}>
      <PageHero
        label="MULTI-STORE MANAGEMENT"
        title="多店舗展開企業向け"
        subtitle="10店舗でも50店舗でも、担当者の窓口は変わりません。複数店舗の施工管理を一本化します。"
        image="/LINE_ALBUM_2026.6.10_260610_14.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '多店舗展開企業向け', href: '/multi-store' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>FOR MULTI-STORE</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              店舗が増えるほど、<br />施工管理の一本化が重要になる
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2 }}>
              多店舗展開企業では、出店・改装・退店が常に複数案件で動いています。エリアごとに異なる施工会社を使い続けると、品質のばらつき・担当者の対応コスト・コスト管理の煩雑さが蓄積します。播磨商事は、関東・東海・近畿の7都府県を1つの体制でカバーし、担当者様の管理負担を継続的に軽減します。
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ background: '#F5F4F0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1rem' }}>WHAT WE DO</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            多店舗展開に必要な<br />施工管理の全領域
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2">
            {[
              {
                phase: 'OPENING',
                title: '出店・開業施工',
                body: '新規物件の内装工事から設備工事まで。複数の出店が重なっても同時進行で管理します。本部仕様に基づいた統一施工で、全店品質を均一化します。',
                href: '/service/shop-interior',
              },
              {
                phase: 'RENEWAL',
                title: '改装・リニューアル',
                body: '既存店舗のブランドリニューアル・設備更新・部分改装に対応。営業を続けながらの段階施工も可能です。',
                href: '/service/shop-interior',
              },
              {
                phase: 'CLOSING',
                title: '退店・原状回復',
                body: '退去立会い代行から解体・内装復旧まで一括対応。複数店舗の退去スケジュールを一元管理し、担当者の対応負荷を削減します。',
                href: '/service/restoration',
              },
              {
                phase: 'MANAGEMENT',
                title: '施工進捗の一元管理',
                body: '複数案件が同時進行している状況でも、担当者様への報告窓口は1つ。写真・チェックリスト付きの報告書を提出します。',
                href: '/contact',
              },
            ].map((item) => (
              <div key={item.phase} style={{ background: '#FFFFFF', padding: '3rem 2.5rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.phase}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.8, marginBottom: '1.5rem' }}>{item.body}</p>
                <Link href={item.href} style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#0A0A0A', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid #0A0A0A', paddingBottom: '2px' }}>
                  詳しく見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1.5rem' }}>COVERAGE</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                関東・東海・近畿<br />7都府県を<br />1つの窓口でカバー
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#5A5A5A', lineHeight: 2, marginBottom: '2.5rem' }}>
                広域展開する多店舗企業にとって、エリアごとに施工会社が異なることは管理コストを生む大きな要因です。播磨商事は関東から近畿まで、担当者の窓口を1つに集約します。
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['東京', '埼玉', '千葉', '神奈川', '静岡', '大阪', '兵庫'].map((area) => (
                  <span key={area} style={{ padding: '0.5rem 1.25rem', background: '#F5F4F0', fontSize: '0.875rem', fontWeight: 600, color: '#3A3A3A' }}>{area}</span>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image src="/LINE_ALBUM_2026.6.10_260610_6.jpg" alt="対応エリア" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#F5F4F0', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-3">
            {[
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ本部の施工管理' },
              { label: '店舗開発担当者向け', href: '/store-development', note: '出店から退店まで' },
              { label: '対応エリア', href: '/area', note: '関東・東海・近畿 7都府県' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="多店舗の施工管理について\nご相談ください" subtext="現在の課題・店舗数・対象エリアをお知らせください。最適な管理体制をご提案します。" />
    </div>
  )
}
