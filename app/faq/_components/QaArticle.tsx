import { Fragment } from 'react'
import Link from 'next/link'
import { qaDetailHref, qaAnswerHref, qaHomeLabel, homeOf } from '@/data/qa'
import type { QaEntry } from '@/data/qa'
import PendingText from './PendingText'
import QaCta from './QaCta'

const indexLabel = (index: number) => `Q.${String(index + 1).padStart(2, '0')}`

function DraftNote({ needs }: { needs?: string[] }) {
  return (
    <div style={{ marginBottom: '1.25rem', border: '1px dashed #C25E7F', background: 'rgba(194,94,127,0.05)', padding: '0.875rem 1.125rem' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9B3F5F' }}>下書き（本番には表示されません）</div>
      {needs && needs.length > 0 && (
        <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', fontSize: '0.75rem', color: '#57544D', lineHeight: 1.8 }}>
          {needs.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// 1問ぶんの回答。見出し（質問）→ 直後に結論 → 確認済みの数値 → 参考リンク → 依頼導線 の順に並べる。
export default function QaArticle({
  item,
  index,
  ctaText,
  headingLevel = 2,
}: {
  item: QaEntry
  index: number
  ctaText: string
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const detailHref = qaDetailHref(item)

  return (
    <article id={item.slug} style={{ scrollMarginTop: '6rem', borderTop: '1px solid var(--line-2)', padding: '3.25rem 0' }}>
      <div className="grid grid-cols-1 md:grid-cols-[4.5rem_1fr]" style={{ gap: '0.75rem 1.5rem' }}>
        <div className="mono" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#C25E7F', paddingTop: '0.45rem' }}>
          {indexLabel(index)}
        </div>

        <div style={{ minWidth: 0 }}>
          {item.status === 'draft' && <DraftNote needs={item.needs} />}

          <Heading style={{ fontSize: 'clamp(1.25rem, 2.3vw, 1.625rem)', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.03em', lineHeight: 1.45 }}>
            {item.question}
          </Heading>

          <div style={{ marginTop: '1.5rem', background: 'var(--paper)', borderLeft: '2px solid #C25E7F', padding: '1.25rem 1.5rem' }}>
            <div className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.24em', color: '#8F8B82', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              ANSWER
            </div>
            <p style={{ fontSize: '1rem', color: '#1C1C1C', lineHeight: 2, fontWeight: 500 }}>
              <PendingText text={item.answer} />
            </p>
          </div>

          {item.facts && item.facts.length > 0 && (
            <dl style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(7rem, 11rem) 1fr', borderTop: '1px solid var(--line)' }}>
              {item.facts.map((f) => (
                <Fragment key={f.label}>
                  <dt style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', padding: '0.875rem 0.25rem', borderBottom: '1px solid var(--line)' }}>{f.label}</dt>
                  <dd style={{ fontSize: '0.875rem', color: '#57544D', padding: '0.875rem 0.25rem', borderBottom: '1px solid var(--line)', lineHeight: 1.8 }}>
                    <PendingText text={f.value} />
                  </dd>
                </Fragment>
              ))}
            </dl>
          )}

          {(detailHref || (item.links && item.links.length > 0)) && (
            <ul style={{ listStyle: 'none', margin: '1.5rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {detailHref && (
                <li>
                  <Link href={detailHref} style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid #0A0A0A' }}>
                    くわしい解説を読む →
                  </Link>
                </li>
              )}
              {item.links?.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: '0.875rem', color: '#57544D', textDecoration: 'none', borderBottom: '1px solid var(--line-2)' }}>
                    関連コラム：{link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <QaCta text={item.cta ?? ctaText} />
        </div>
      </div>
    </article>
  )
}

// 回答を別ページに掲載している質問（分野別ページでは質問とリンク先だけを示し、回答の重複を避ける）
export function QaPointer({ item, index }: { item: QaEntry; index: number }) {
  return (
    <div id={item.slug} style={{ scrollMarginTop: '6rem', borderTop: '1px solid var(--line-2)', padding: '2rem 0' }}>
      <div className="grid grid-cols-1 md:grid-cols-[4.5rem_1fr]" style={{ gap: '0.5rem 1.5rem' }}>
        <div className="mono" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#B5B0A4', paddingTop: '0.2rem' }}>
          {indexLabel(index)}
        </div>
        <div>
          {item.status === 'draft' && (
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#9B3F5F', marginBottom: '0.375rem' }}>下書き（本番には表示されません）</div>
          )}
          <p style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6 }}>{item.question}</p>
          <Link href={qaAnswerHref(item)} style={{ display: 'inline-block', marginTop: '0.625rem', fontSize: '0.8125rem', color: '#57544D', textDecoration: 'none', borderBottom: '1px solid var(--line-2)' }}>
            回答は「{qaHomeLabel[homeOf(item)]}」に掲載しています →
          </Link>
        </div>
      </div>
    </div>
  )
}
