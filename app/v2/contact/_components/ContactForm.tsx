'use client'

import { useState } from 'react'

type FormData = {
  company: string
  name: string
  email: string
  phone: string
  service: string
  stores: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    stores: '',
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

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #DDD8CE',
    fontSize: '0.9375rem',
    color: '#0A0A0A',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '0.6875rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: '#8F8B82',
    marginBottom: '0.375rem',
    textTransform: 'uppercase',
  }

  if (submitted) {
    return (
      <div style={{ padding: '4rem 3rem', background: '#EDEAE2', textAlign: 'center' }}>
        <div style={{ width: '3rem', height: '3rem', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 6L6 11L15 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.75rem' }}>
          お問い合わせを受け付けました
        </p>
        <p style={{ fontSize: '0.875rem', color: '#8F8B82', lineHeight: 2 }}>
          内容を確認の上、担当者よりご連絡いたします。<br />
          通常2〜3営業日以内にご返信します。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

      {/* Company + Name */}
      <div style={{ display: 'grid', gap: '2.5rem' }} className="grid-cols-1 sm:grid-cols-2">
        <div>
          <label style={label}>会社名 <span style={{ color: '#B5B0A4' }}>必須</span></label>
          <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="株式会社◯◯" style={inputBase} />
        </div>
        <div>
          <label style={label}>お名前 <span style={{ color: '#B5B0A4' }}>必須</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="山田 太郎" style={inputBase} />
        </div>
      </div>

      {/* Email + Phone */}
      <div style={{ display: 'grid', gap: '2.5rem' }} className="grid-cols-1 sm:grid-cols-2">
        <div>
          <label style={label}>メールアドレス <span style={{ color: '#B5B0A4' }}>必須</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@company.co.jp" style={inputBase} />
        </div>
        <div>
          <label style={label}>電話番号</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="03-0000-0000" style={inputBase} />
        </div>
      </div>

      {/* Service + Stores */}
      <div style={{ display: 'grid', gap: '2.5rem' }} className="grid-cols-1 sm:grid-cols-2">
        <div>
          <label style={label}>ご興味のあるサービス</label>
          <select name="service" value={form.service} onChange={handleChange} style={{ ...inputBase, cursor: 'pointer', appearance: 'none' }}>
            <option value="">選択してください</option>
            <option value="interior">店舗内装工事</option>
            <option value="restoration">原状回復工事</option>
            <option value="both">両方</option>
            <option value="other">その他・未定</option>
          </select>
        </div>
        <div>
          <label style={label}>対象店舗数の目安</label>
          <select name="stores" value={form.stores} onChange={handleChange} style={{ ...inputBase, cursor: 'pointer', appearance: 'none' }}>
            <option value="">選択してください</option>
            <option value="1">1店舗</option>
            <option value="2-5">2〜5店舗</option>
            <option value="6-20">6〜20店舗</option>
            <option value="21+">21店舗以上</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={label}>ご相談内容</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="エリア・工事内容・スケジュール感などをお聞かせください"
          style={{ ...inputBase, resize: 'vertical', paddingTop: '0.875rem' }}
        />
      </div>

      {/* Privacy note */}
      <p style={{ fontSize: '0.75rem', color: '#8F8B82', lineHeight: 1.9 }}>
        ご入力いただいた個人情報は、お問い合わせへの対応のみに使用します。
      </p>

      {/* Submit */}
      <div>
        <button
          type="submit"
          style={{
            padding: '1.125rem 3.5rem',
            background: '#0A0A0A',
            color: '#FFFFFF',
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#2A2A2A' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0A' }}
        >
          送信する
        </button>
      </div>

    </form>
  )
}
