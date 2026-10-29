'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { companyInfo } from '@/data/company'
import { emptyInquiry, sendInquiry, type Inquiry, type SendResult } from '@/lib/contact'
import ContactFallback from '@/components/ui/ContactFallback'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Contact() {
  const [form, setForm] = useState<Inquiry>(emptyInquiry)
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [failure, setFailure] = useState<Extract<SendResult, { ok: false }> | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // 送信に成功したときだけ「受け付けました」を表示する。失敗時はメール・電話での連絡を案内する
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setFailure(null)
    const result = await sendInquiry({ ...form, page: window.location.pathname })
    setSending(false)
    if (result.ok) setSubmitted(true)
    else setFailure(result)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 0.25rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.18)',
    fontSize: '0.9375rem',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.25s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    borderRadius: 0,
  }

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.5625rem',
    fontWeight: 500,
    letterSpacing: '0.22em',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    marginBottom: '0.375rem',
  }

  const requiredMark = (
    <span style={{ color: '#C25E7F', letterSpacing: '0.1em' }}>*</span>
  )

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderBottomColor = '#C25E7F'
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.18)'
    },
  }

  return (
    <section
      id="contact"
      style={{ position: 'relative', background: '#101014', paddingTop: '10rem', paddingBottom: '10rem', overflow: 'hidden' }}
    >
      {/* ghost serif word */}
      <div
        aria-hidden
        className="serif-en"
        style={{
          position: 'absolute',
          right: '-1.5rem',
          top: '2.5rem',
          fontStyle: 'italic',
          fontSize: 'clamp(5rem, 15vw, 14rem)',
          color: 'rgba(255,255,255,0.035)',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Contact
      </div>

      <div style={{ position: 'relative', maxWidth: '1480px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr]" style={{ gap: 'clamp(3.5rem, 7vw, 8rem)', alignItems: 'start' }}>

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:sticky lg:top-32"
          >
            <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
              <span style={{ width: '2.25rem', height: '1px', background: '#C25E7F', display: 'inline-block' }} />
              CONTACT
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.045em',
                lineHeight: 1.15,
                marginBottom: '1.75rem',
              }}
            >
              お問い合わせ
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 2.1, maxWidth: '340px', marginBottom: '3rem' }}>
              まずはお気軽にご相談ください。複数店舗のまとめてのご相談も歓迎します。
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href={`tel:${companyInfo.tel}`} className="mono" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                {companyInfo.tel}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="mono" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {companyInfo.email}
              </a>
              <span className="mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                SURVEY & ESTIMATE FREE
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{
                  padding: '3rem',
                  background: 'rgba(255,255,255,0.04)',
                  borderLeft: '2px solid #C25E7F',
                }}
              >
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  お問い合わせを受け付けました
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2 }}>
                  内容を確認の上、担当者よりご連絡いたします。
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}
              >
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>COMPANY</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="会社名・屋号（任意）"
                      style={inputStyle}
                      {...focusHandlers}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>NAME {requiredMark}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="お名前"
                      style={inputStyle}
                      {...focusHandlers}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>EMAIL {requiredMark}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="メールアドレス"
                      style={inputStyle}
                      {...focusHandlers}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>TEL</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="電話番号"
                      style={inputStyle}
                      {...focusHandlers}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>SERVICE</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', color: form.service ? '#FFFFFF' : 'rgba(255,255,255,0.45)' }}
                    {...focusHandlers}
                  >
                    <option value="" style={{ color: '#0A0A0A' }}>ご興味のあるサービスを選択</option>
                    <option value="interior" style={{ color: '#0A0A0A' }}>店舗内装工事</option>
                    <option value="restoration" style={{ color: '#0A0A0A' }}>原状回復工事</option>
                    <option value="both" style={{ color: '#0A0A0A' }}>両方</option>
                    <option value="other" style={{ color: '#0A0A0A' }}>その他・まだ検討中</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="店舗数・エリア・工事内容などをお聞かせください"
                    style={{ ...inputStyle, resize: 'vertical' }}
                    {...focusHandlers}
                  />
                </div>

                {/* スパム対策：画面には出さない入力欄（ボットだけが入力する） */}
                <div aria-hidden style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label>
                    ウェブサイト
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                  </label>
                </div>

                {failure && <ContactFallback inquiry={form} result={failure} tone="dark" />}

                <div style={{ paddingTop: '0.75rem' }}>
                  <button type="submit" className="btn btn-paper" disabled={sending} style={{ padding: '1.1rem 3.5rem', opacity: sending ? 0.6 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                    {sending ? '送信中…' : '送信する'}
                    {!sending && <span aria-hidden>→</span>}
                  </button>
                </div>
              </motion.form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
