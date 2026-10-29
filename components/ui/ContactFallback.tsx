import { companyInfo } from '@/data/company'
import { inquiryMailtoHref, type Inquiry, type SendResult } from '@/lib/contact'

type Failure = Extract<SendResult, { ok: false }>

// フォームを送信できなかったときの表示。入力内容を書き込んだメール作成画面と電話番号を案内し、問い合わせを取りこぼさない。
export default function ContactFallback({ inquiry, result, tone }: { inquiry: Inquiry; result: Failure; tone: 'dark' | 'light' }) {
  const dark = tone === 'dark'

  if (result.reason === 'invalid') {
    return (
      <p role="alert" style={{ fontSize: '0.875rem', color: dark ? '#E7A3B9' : '#9B3F5F', lineHeight: 1.8 }}>
        {result.message ?? '入力内容をご確認ください。'}
      </p>
    )
  }

  const buttonBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    fontSize: '0.8125rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    textDecoration: 'none',
  }

  return (
    <div
      role="alert"
      style={{
        padding: '1.75rem 2rem',
        background: dark ? 'rgba(255,255,255,0.05)' : '#F6F4EF',
        borderLeft: '2px solid #C25E7F',
      }}
    >
      <p style={{ fontSize: '1rem', fontWeight: 700, color: dark ? '#FFFFFF' : '#0A0A0A', marginBottom: '0.625rem' }}>
        送信できませんでした
      </p>
      <p style={{ fontSize: '0.875rem', color: dark ? 'rgba(255,255,255,0.6)' : '#57544D', lineHeight: 1.9, marginBottom: '1.5rem' }}>
        お手数ですが、下のボタンからメールでお送りいただくか、お電話でご連絡ください。入力いただいた内容は、メールに自動で入ります。
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
        <a href={inquiryMailtoHref(inquiry)} style={{ ...buttonBase, background: dark ? '#FFFFFF' : '#0A0A0A', color: dark ? '#0A0A0A' : '#FFFFFF' }}>
          メールで送る →
        </a>
        <a
          href={`tel:${companyInfo.tel}`}
          style={{ ...buttonBase, border: `1px solid ${dark ? 'rgba(255,255,255,0.35)' : '#0A0A0A'}`, color: dark ? '#FFFFFF' : '#0A0A0A' }}
        >
          電話する {companyInfo.tel}
        </a>
      </div>
      <p style={{ fontSize: '0.75rem', color: dark ? 'rgba(255,255,255,0.4)' : '#8F8B82', marginTop: '0.875rem' }}>
        お電話の受付：{companyInfo.businessHours}
      </p>
    </div>
  )
}
