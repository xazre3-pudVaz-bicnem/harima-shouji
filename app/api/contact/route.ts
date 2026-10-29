// お問い合わせフォームの送信先。フォームの内容を Resend（メール送信サービス）経由で会社のメールアドレスへ送る。
//
// 必要な環境変数（Vercel の Settings → Environment Variables に設定）
//   RESEND_API_KEY  Resend の API キー（Sensitive で登録）
//   RESEND_FROM     差出人（省略時は「株式会社播磨商事 ホームページ <form@会社のメールのドメイン>」）
//                   差出人のドメインは Resend で認証済みであること
//   CONTACT_TO      通知の宛先（省略時は data/company.ts のメールアドレス）
// 未設定・送信失敗のときは 503 / 502 を返し、フォーム側でメール・電話での連絡を案内する。
import { companyInfo } from '@/data/company'
import { inquirySubject, inquiryText, normalizeInquiry, validateInquiry, type SendResult } from '@/lib/contact'

const reply = (result: SendResult, status = 200) => Response.json(result, { status })

const defaultFrom = `${companyInfo.name} ホームページ <form@${companyInfo.email.split('@')[1]}>`

export async function POST(request: Request) {
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return reply({ ok: false, reason: 'invalid', message: '送信内容を読み取れませんでした。' }, 400)
  }
  if (typeof raw !== 'object' || raw === null) {
    return reply({ ok: false, reason: 'invalid', message: '送信内容を読み取れませんでした。' }, 400)
  }

  const inquiry = normalizeInquiry(raw)

  // 画面に出していない入力欄に値がある＝ボット。受け付けたふりをして何もしない
  if (inquiry.website) return reply({ ok: true })

  const error = validateInquiry(inquiry)
  if (error) return reply({ ok: false, reason: 'invalid', message: error }, 400)

  const { RESEND_API_KEY, RESEND_FROM, CONTACT_TO } = process.env
  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY が未設定のため送信できません')
    return reply({ ok: false, reason: 'not_configured' }, 503)
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: RESEND_FROM || defaultFrom,
        to: [CONTACT_TO || companyInfo.email],
        reply_to: inquiry.email,
        subject: inquirySubject(inquiry),
        text: `${inquiryText(inquiry)}\n\n――――\n送信元ページ：${inquiry.page || '（不明）'}\nこのメールに返信すると、お問い合わせいただいた方へ届きます。`,
      }),
      signal: AbortSignal.timeout(15_000),
    })
    if (!res.ok) {
      // 例：403 = 差出人のドメインが Resend で未認証、401 = API キーの誤り
      console.error(`[contact] 送信に失敗しました（Resend ${res.status}）:`, await res.text())
      return reply({ ok: false, reason: 'failed' }, 502)
    }
    return reply({ ok: true })
  } catch (e) {
    console.error('[contact] 送信に失敗しました:', e instanceof Error ? e.message : e)
    return reply({ ok: false, reason: 'failed' }, 502)
  }
}
