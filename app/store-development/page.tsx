import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: '店舗開発担当者向け | 出店から退店まで施工管理を一括サポート',
  description: '店舗開発・出店開発担当者の施工管理負担を解消。物件決定から開業・改装・退店まで、1つの施工パートナーで対応。複数エリア・複数案件の同時管理に対応します。',
  keywords: ['店舗開発 内装工事', '出店 施工管理', '店舗開発担当 工事', 'テナント工事 管理'],
  alternates: { canonical: 'https://harima-shouji.co.jp/store-development' },
  openGraph: { title: '店舗開発担当者向け | 株式会社播磨商事', url: 'https://harima-shouji.co.jp/store-development' },
}

export default function StoreDevelopmentPage() {
  return (
    <div style={{ background: '#F6F4EF' }}>
      <PageHero
        label="FOR STORE DEVELOPERS"
        title="店舗開発担当者向け"
        subtitle="物件決定から開業・退店まで。担当者が動く時間を最小化します。"
        image="/LINE_ALBUM_2026.6.10_260610_9.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: '店舗開発担当者向け', href: '/store-development' },
        ]}
      />

      {/* Persona */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>WHO THIS IS FOR</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              施工管理まで<br />担っている<br />出店担当者へ
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, marginBottom: '1.5rem' }}>
              店舗開発・出店開発の担当者は、物件選定・契約・開業準備・本部調整といった本来業務に加えて、施工会社の選定・見積り確認・工程管理・完了確認まで担うケースが少なくありません。
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
              播磨商事は、担当者の施工管理工数を最小化することを目的として、見積りから施工・完了報告まで一貫して対応します。
            </p>
          </div>
        </div>
      </section>

      {/* Support detail */}
      <section style={{ background: '#EDEAE2', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1rem' }}>SUPPORT</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            担当者が「やらなくていい」<br />ことを増やす
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: '物件調査・条件確認', body: '工事可能な範囲・管理規約・搬入条件を確認します。物件決定前の段階から相談可能です。' },
              { title: '見積りの提出', body: '物件情報を共有いただければ概算を提示します。現地調査の上、正式見積りを提出します。無料です。' },
              { title: '施工計画の立案', body: '工期・作業範囲・仕様書の確認を行い、施工計画を立案します。本部との情報共有フローも整えます。' },
              { title: '施工・工程管理', body: '確定した計画に基づいて施工します。工程の進捗は担当者様に定期的に報告します。' },
              { title: '完了報告の提出', body: '写真・チェックリスト付きの完了報告書を提出します。本部承認フローをサポートします。' },
              { title: '退店・原状回復', body: '退去立会い代行・解体・内装復旧まで一括対応。退店フローも担当者の負担を最小化します。' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#FFFFFF', padding: '2.5rem 2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#101014', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1rem' }}>LIFECYCLE</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '4rem' }}>
            出店から退店まで<br />1つのパートナーで完結
          </h2>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-4">
            {[
              { phase: '出店', desc: '内装工事\n設備工事\n夜間・短工期対応' },
              { phase: '改装', desc: '部分改装\nリブランディング\n段階施工' },
              { phase: '移転', desc: '新物件の施工\n旧物件の原状回復\n同時進行管理' },
              { phase: '退店', desc: '退去立会い代行\n解体・内装復旧\n費用適正化' },
            ].map((item) => (
              <div key={item.phase} style={{ background: 'rgba(255,255,255,0.04)', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem' }}>{item.phase}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2, whiteSpace: 'pre-line' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + text */}
      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
            <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 520px)', overflow: 'hidden' }}>
              <Image src="/LINE_ALBUM_2026.6.10_260610_21.jpg" alt="店舗開発サポート" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '1.5rem' }}>APPROACH</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                早めに相談するほど<br />スムーズに動く
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2, marginBottom: '1.5rem' }}>
                物件選定の段階から施工会社に相談することで、工事可否・概算費用・工期見通しを早期に把握できます。物件決定後に相談し始めると、工程が後ろ倒しになるケースがあります。
              </p>
              <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2 }}>
                播磨商事では物件情報の段階からご相談を受け付けています。正式発注前の概算確認も無料で対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: '#EDEAE2', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '2rem' }}>SEE ALSO</div>
          <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: '店舗内装工事', href: '/service/shop-interior', note: '新規出店・改装' },
              { label: '原状回復工事', href: '/service/restoration', note: '退去・解体・復旧' },
              { label: 'FC本部向けサービス', href: '/franchise', note: 'フランチャイズ施工管理' },
              { label: '対応エリア', href: '/area', note: '関東・東海・近畿' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', padding: '2rem', background: '#FFFFFF', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.6875rem', color: '#8F8B82', marginBottom: '0.5rem' }}>{item.note}</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="まずはお気軽に\nご相談ください" subtext="物件の段階からご相談いただけます。概算確認・現地調査は無料です。" />
    </div>
  )
}
