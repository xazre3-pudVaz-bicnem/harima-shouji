import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { solutions } from '@/data/solutions'

export const metadata: Metadata = {
  title: 'ソリューション｜FC本部・多店舗展開の施工管理課題を解決',
  description: 'FC本部・多店舗展開企業の施工管理課題を解決するソリューションを紹介。担当者窓口の一本化・夜間施工・短工期対応・ブランド統一施工・費用適正化など。',
  keywords: ['FC 施工管理 課題解決', '多店舗展開 施工管理', '原状回復費用 適正化', '夜間施工 対応'],
  alternates: { canonical: 'https://harima-shouji.co.jp/solution' },
  openGraph: { title: 'ソリューション | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/solution' },
}

export default function SolutionIndexPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>
      <PageHero
        label="SOLUTION"
        title="ソリューション"
        subtitle="FC本部・多店舗展開企業が抱える施工管理の課題に対するソリューションを紹介します。担当者様の工数削減・品質統一・コスト最適化をサポートします。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ソリューション', href: '/solution' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>ALL SOLUTIONS</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '3rem' }}>
            施工管理の課題解決
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => (
              <Link key={sol.slug} href={`/solution/${sol.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#EDEAE2' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={sol.heroImage}
                    alt={sol.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.75rem 1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SOLUTION</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.5rem' }}>{sol.title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#57544D', lineHeight: 1.7 }}>{sol.problemTitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="施工管理の課題についてご相談ください"
        subtext="現地調査・見積りは無料です。まずはお気軽にお問い合わせください。"
      />
    </div>
  )
}
