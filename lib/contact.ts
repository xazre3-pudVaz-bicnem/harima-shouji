// お問い合わせフォームの共通定義（トップページ・/contact・/api/contact で共有）。
// クライアントでも読み込まれるため、秘密情報は置かない。
import { companyInfo } from '@/data/company'

export type Inquiry = {
  company: string
  name: string
  email: string
  phone: string
  service: string
  stores: string
  message: string
  /** 送信元のページ */
  page: string
  /** スパム対策の入力欄（画面には表示しない。値が入っていたらボットとみなす） */
  website: string
}

export const emptyInquiry: Inquiry = {
  company: '',
  name: '',
  email: '',
  phone: '',
  service: '',
  stores: '',
  message: '',
  page: '',
  website: '',
}

export const serviceLabels: Record<string, string> = {
  interior: '店舗内装工事',
  restoration: '原状回復工事',
  both: '店舗内装工事・原状回復工事の両方',
  other: 'その他・未定',
}

export const storesLabels: Record<string, string> = {
  '1': '1店舗',
  '2-5': '2〜5店舗',
  '6-20': '6〜20店舗',
  '21+': '21店舗以上',
}

const maxLength: Record<keyof Inquiry, number> = {
  company: 100,
  name: 60,
  email: 254,
  phone: 30,
  service: 20,
  stores: 10,
  message: 4000,
  page: 200,
  website: 200,
}

/** 文字列に正規化し、1行の項目からは改行を除く（メールヘッダーへの差し込み対策） */
export function normalizeInquiry(input: Partial<Record<keyof Inquiry, unknown>>): Inquiry {
  const out = { ...emptyInquiry }
  for (const key of Object.keys(emptyInquiry) as (keyof Inquiry)[]) {
    const value = typeof input[key] === 'string' ? (input[key] as string) : ''
    out[key] = key === 'message' ? value.trim() : value.replace(/[\r\n]+/g, ' ').trim()
  }
  return out
}

/** 入力内容に問題があれば、利用者に見せるメッセージを返す */
export function validateInquiry(x: Inquiry): string | null {
  if (!x.name) return 'お名前を入力してください。'
  if (!x.email) return 'メールアドレスを入力してください。'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.email)) return 'メールアドレスの形式をご確認ください。'
  for (const key of Object.keys(maxLength) as (keyof Inquiry)[]) {
    if (x[key].length > maxLength[key]) return '入力内容が長すぎます。お手数ですが短くしてお送りください。'
  }
  return null
}

/** メール本文（お問い合わせ通知・メール作成画面の両方で使う） */
export function inquiryText(x: Inquiry): string {
  return [
    `会社名・屋号：${x.company || '（未入力）'}`,
    `お名前：${x.name}`,
    `メールアドレス：${x.email}`,
    `電話番号：${x.phone || '（未入力）'}`,
    `ご興味のあるサービス：${serviceLabels[x.service] ?? '（未選択）'}`,
    ...(x.stores ? [`対象店舗数の目安：${storesLabels[x.stores] ?? x.stores}`] : []),
    '',
    'ご相談内容：',
    x.message || '（未入力）',
  ].join('\n')
}

export function inquirySubject(x: Inquiry): string {
  return `【ホームページからのお問い合わせ】${x.company ? `${x.company} ` : ''}${x.name}様`
}

/** 送信できなかったときの代わりの手段：入力内容を書き込んだメール作成画面を開く */
export function inquiryMailtoHref(x: Inquiry): string {
  const body = inquiryText(x)
  const trimmed = body.length > 1500 ? `${body.slice(0, 1500)}\n（以下省略）` : body
  return `mailto:${companyInfo.email}?subject=${encodeURIComponent(inquirySubject(x))}&body=${encodeURIComponent(trimmed)}`
}

export type SendResult =
  | { ok: true }
  | { ok: false; reason: 'invalid' | 'not_configured' | 'failed'; message?: string }

/** フォームから /api/contact へ送信する（クライアント用） */
export async function sendInquiry(x: Inquiry): Promise<SendResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(x),
    })
    const data = (await res.json().catch(() => null)) as SendResult | null
    if (res.ok && data?.ok) return { ok: true }
    if (data && !data.ok) return data
    return { ok: false, reason: 'failed' }
  } catch {
    return { ok: false, reason: 'failed' }
  }
}
