import Link from 'next/link'
import PendingText from '@/app/faq/_components/PendingText'
import { budgetBasis, budgetGuides, industriesServed, publishedBudgetGuides, workScopes } from '@/data/expertise'
import { pricePageVisible } from '@/data/qa'
import { showDrafts } from '@/lib/content-status'

function BlockLabel({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <span className="mono" style={{ fontSize: '0.6875rem', color: '#C25E7F', letterSpacing: '0.1em' }}>
        ({index})
      </span>
      <h3 style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.035em', marginTop: '0.75rem' }}>
        {title}
      </h3>
    </div>
  )
}

// 対応業種・工事内容・予算の目安（トップページ・サービスページ共通）
export default function Scope() {
  // 予算の目安：本番では確認済みの金額だけ、開発時は下書きも表示
  const budgetRows = (showDrafts ? budgetGuides : publishedBudgetGuides).slice(0, 4)

  return (
    <section id="scope" style={{ background: '#FFFFFF', paddingTop: '9rem', paddingBottom: '9rem' }}>
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '4.5rem', flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.75rem' }}>SCOPE</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.4vw, 3.75rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.045em', lineHeight: 1.12 }}>
              対応業種・工事内容
              <br />
              予算の目安
            </h2>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 2, maxWidth: '400px' }}>
            サロン・ジム・ピラティススタジオを中心に、店舗の内装を契約前の物件確認から引き渡しまで承ります。
          </p>
        </div>

        {/* 01 対応業種 */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]" style={{ gap: '2rem 4rem', borderTop: '1px solid var(--line)', padding: '3.5rem 0' }}>
          <BlockLabel index="01" title="対応業種" />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--line)' }}>
            {industriesServed.map((ind) => {
              const content = (
                <>
                  <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', minWidth: '9.5rem' }}>{ind.name}</span>
                  {/* スマホ幅では業種名の下に折り返す */}
                  <span style={{ fontSize: '0.875rem', color: '#6B675F', lineHeight: 1.8, flex: '1 1 16rem' }}>{ind.detail}</span>
                  {ind.href && (
                    <span className="row-arrow" aria-hidden style={{ color: '#8F8B82', flexShrink: 0 }}>
                      →
                    </span>
                  )}
                </>
              )
              const rowStyle = { display: 'flex', flexWrap: 'wrap' as const, alignItems: 'baseline', gap: '0.25rem 1.5rem', padding: '1.25rem 0.25rem', textDecoration: 'none' }
              return (
                <li key={ind.name} style={{ borderBottom: '1px solid var(--line)' }}>
                  {ind.href ? (
                    <Link href={ind.href} className="row-link" style={rowStyle}>
                      {content}
                    </Link>
                  ) : (
                    <div style={rowStyle}>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* 02 工事内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]" style={{ gap: '2rem 4rem', borderTop: '1px solid var(--line)', padding: '3.5rem 0' }}>
          <BlockLabel index="02" title="工事内容" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap: '2rem 2.5rem' }}>
            {workScopes.map((group) => (
              <div key={group.title}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', paddingBottom: '0.75rem', marginBottom: '0.75rem', borderBottom: '1px solid #0A0A0A' }}>
                  {group.title}
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: '#3A3A3A', lineHeight: 1.8, padding: '0.25rem 0' }}>
                      <span aria-hidden style={{ color: '#C25E7F' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 03 予算の目安 */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]" style={{ gap: '2rem 4rem', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '3.5rem 0' }}>
          <BlockLabel index="03" title="予算の目安" />
          <div>
            {budgetRows.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'var(--line-2)', border: '1px solid var(--line-2)', marginBottom: '1.75rem' }}>
                {budgetRows.map((b) => (
                  <div key={b.id} style={{ background: '#FFFFFF', padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A' }}>
                      {b.example}
                      <span style={{ fontWeight: 400, color: '#8F8B82', marginLeft: '0.5rem', fontSize: '0.8125rem' }}>{b.size}</span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#6B675F', marginTop: '0.375rem', lineHeight: 1.7 }}>{b.scope}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A0A0A', marginTop: '0.875rem', letterSpacing: '-0.02em' }}>
                      <PendingText text={b.price || '【要確認】'} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#8F8B82', marginTop: '0.25rem' }}>
                      工期 <PendingText text={b.duration || '【要確認】'} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 2 }}>
              {budgetRows.length > 0 && budgetBasis.tax && `金額は${budgetBasis.tax}です。`}
              {budgetBasis.note}
              {budgetRows.length === 0 && '現地調査・お見積もりは無料です。'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem', marginTop: '1.75rem' }}>
              {pricePageVisible && (
                <Link href="/price" style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', paddingBottom: '0.25rem', borderBottom: '1px solid #0A0A0A' }}>
                  費用の目安を詳しく見る →
                </Link>
              )}
              <Link href="/contact" style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', paddingBottom: '0.25rem', borderBottom: '1px solid #0A0A0A' }}>
                無料で見積もりを相談する →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
