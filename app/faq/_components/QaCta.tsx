import Link from 'next/link'
import { companyInfo } from '@/data/company'

// 回答の最後に置く「播磨商事へ依頼できること」と問い合わせ導線
export default function QaCta({ text }: { text: string }) {
  return (
    <div style={{ marginTop: '1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.875rem 1.75rem' }}>
      <p style={{ fontSize: '0.875rem', color: '#57544D', lineHeight: 1.9, flex: '1 1 18rem' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
        <Link
          href="/contact"
          style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid #0A0A0A', paddingBottom: '0.25rem', whiteSpace: 'nowrap' }}
        >
          無料で相談する →
        </Link>
        <a
          href={`tel:${companyInfo.tel}`}
          className="mono"
          style={{ fontSize: '0.75rem', color: '#57544D', textDecoration: 'none', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
        >
          TEL {companyInfo.tel}
        </a>
      </div>
    </div>
  )
}
