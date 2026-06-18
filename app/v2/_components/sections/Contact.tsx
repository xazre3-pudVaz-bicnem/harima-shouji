'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormData = {
  company: string
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: '#F5F4F0',
    border: '1px solid transparent',
    borderBottom: '1px solid #E5E3DF',
    fontSize: '0.9375rem',
    color: '#0A0A0A',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.6875rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    color: '#9CA3AF',
    marginBottom: '0.5rem',
  }

  return (
    <section
      id="contact"
      style={{ background: '#0D1117', paddingTop: '9rem', paddingBottom: '9rem' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ maxWidth: '720px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              CONTACT
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              お問い合わせ
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)', lineHeight: 2 }}>
              まずはお気軽にご相談ください。複数店舗のまとめてのご相談も歓迎します。
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '3rem',
                background: 'rgba(255,255,255,0.04)',
                borderLeft: '2px solid rgba(255,255,255,0.2)',
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
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Row: company + name */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label style={labelStyle}>会社名 <span style={{ color: 'rgba(255,255,255,0.2)' }}>必須</span></label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="株式会社◯◯"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>お名前 <span style={{ color: 'rgba(255,255,255,0.2)' }}>必須</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="山田 太郎"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Row: email + phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label style={labelStyle}>メールアドレス <span style={{ color: 'rgba(255,255,255,0.2)' }}>必須</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="example@company.co.jp"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03-0000-0000"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Service interest */}
              <div>
                <label style={labelStyle}>ご興味のあるサービス</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                >
                  <option value="">選択してください</option>
                  <option value="interior">店舗内装工事</option>
                  <option value="restoration">原状回復工事</option>
                  <option value="both">両方</option>
                  <option value="other">その他・まだ検討中</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>ご相談内容</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="店舗数・エリア・工事内容などをお聞かせください"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Submit */}
              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  type="submit"
                  style={{
                    padding: '1rem 3rem',
                    background: '#FFFFFF',
                    color: '#0A0A0A',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E5E3DF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                  }}
                >
                  送信する
                </button>
              </div>

              {/* Direct contact */}
              <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:080-4724-0713"
                  style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  080-4724-0713
                </a>
                <a
                  href="mailto:naisou@harima-shouji.co.jp"
                  style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  naisou@harima-shouji.co.jp
                </a>
              </div>

            </motion.form>
          )}

        </div>
      </div>
    </section>
  )
}
