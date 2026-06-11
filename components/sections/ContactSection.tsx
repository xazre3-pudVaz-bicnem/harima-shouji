'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  location: string
  content: string
  timing: string
  multiple: string
}

const consultItems = [
  '店舗内装工事（新規出店・改装）',
  '原状回復工事・退去対応',
  'クロス張替え（部分補修・全面）',
  '店舗クリーニング（退去前・開業前）',
  '退去立会い代行・費用交渉サポート',
  '複数店舗の一括工事管理',
  '夜間・短工期施工',
  'その他（何でもお気軽に）',
]

const selectStyle: React.CSSProperties = {
  background: '#0d1b2e',
  color: 'white',
  colorScheme: 'dark',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '', company: '', email: '', phone: '', location: '', content: '', timing: '', multiple: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  const inputCls = 'w-full border border-white/12 bg-white/5 text-white placeholder-white/25 px-6 py-5 text-base focus:outline-none focus:border-amber-500/60 transition-colors'
  const labelCls = 'block text-xs font-bold text-white/45 mb-3 tracking-[0.15em] uppercase'

  return (
    <section className="bg-[#071322]" id="contact" style={{ paddingTop: '8rem', paddingBottom: '10rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 xl:gap-28">

          {/* ── Left 2/5 — Info ── */}
          <div className="lg:col-span-2 space-y-12">

            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-6">CONTACT</div>
              <h2
                className="font-bold text-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
              >
                お問い合わせ
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'rgba(107,114,128,1)', lineHeight: '2' }}>
                現地調査・お見積りは完全無料。<br />
                複数店舗のまとめ相談・急ぎのご依頼も歓迎です。
              </p>
            </div>

            {/* Phone */}
            <a href="tel:080-4724-0713" className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={labelCls} style={{ marginBottom: '0.3rem' }}>お電話</div>
                <div
                  className="font-bold text-white group-hover:text-amber-400 transition-colors"
                  style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  080-4724-0713
                </div>
                <div className="text-gray-500 mt-1.5" style={{ fontSize: '0.8rem' }}>
                  平日 9:00〜18:00（夜間・土日はご相談ください）
                </div>
              </div>
            </a>

            {/* Email + Address */}
            <div className="space-y-6">
              <a href="mailto:naisou@harima-shouji.co.jp" className="flex items-center gap-4 group">
                <div className="w-11 h-11 border border-white/12 flex items-center justify-center shrink-0 group-hover:border-amber-500/50 transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className={labelCls} style={{ marginBottom: '0.2rem' }}>メール</div>
                  <div className="text-gray-300 group-hover:text-amber-400 transition-colors" style={{ fontSize: '0.875rem' }}>
                    naisou@harima-shouji.co.jp
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/12 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <div className={labelCls} style={{ marginBottom: '0.2rem' }}>所在地</div>
                  <div className="text-gray-300" style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
                    東京都練馬区関町南2丁目2-4<br />山一ビル
                  </div>
                </div>
              </div>
            </div>

            {/* Consult items */}
            <div>
              <div className={labelCls}>ご相談できる内容</div>
              <ul className="space-y-3">
                {consultItems.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ fontSize: '0.9rem', color: 'rgba(156,163,175,1)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── Right 3/5 — Form ── */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div
                className="border border-white/10 flex flex-col items-center justify-center text-center"
                style={{ minHeight: '600px', padding: '5rem 2rem' }}
              >
                <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mb-8">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-4" style={{ fontSize: '1.5rem' }}>送信が完了しました</h3>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '1rem' }}>
                  お問い合わせありがとうございます。<br />
                  担当者より1〜2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>お名前 <span className="text-amber-500 ml-1">必須</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="田中 太郎" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>会社名 <span className="text-amber-500 ml-1">必須</span></label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="株式会社〇〇" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>メールアドレス <span className="text-amber-500 ml-1">必須</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@company.co.jp" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>電話番号</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="000-0000-0000" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>店舗所在地</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="東京都〇〇区 / 複数店舗の場合はエリアをご記入ください" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>ご相談内容</label>
                  <textarea name="content" value={form.content} onChange={handleChange} rows={8} placeholder="工事内容・店舗数・ご要望などをご記入ください" className={`${inputCls} resize-none`} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>希望時期</label>
                    <select
                      name="timing"
                      value={form.timing}
                      onChange={handleChange}
                      className={`${inputCls} appearance-none cursor-pointer`}
                      style={selectStyle}
                    >
                      <option value="">選択してください</option>
                      <option value="asap">なるべく早く</option>
                      <option value="1month">1ヶ月以内</option>
                      <option value="3months">3ヶ月以内</option>
                      <option value="6months">6ヶ月以内</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>複数店舗のご相談？</label>
                    <select
                      name="multiple"
                      value={form.multiple}
                      onChange={handleChange}
                      className={`${inputCls} appearance-none cursor-pointer`}
                      style={selectStyle}
                    >
                      <option value="">選択してください</option>
                      <option value="single">1店舗のみ</option>
                      <option value="2-5">2〜5店舗</option>
                      <option value="6-10">6〜10店舗</option>
                      <option value="11plus">11店舗以上</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors disabled:opacity-60 tracking-wide flex items-center justify-center gap-3"
                  style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', fontSize: '1.0625rem' }}
                >
                  {status === 'sending' ? '送信中...' : (
                    <>無料相談を申し込む <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>

                <p className="text-center text-gray-600" style={{ fontSize: '0.85rem' }}>
                  送信後、担当者より1〜2営業日以内にご連絡いたします。現地調査・見積は無料です。
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
