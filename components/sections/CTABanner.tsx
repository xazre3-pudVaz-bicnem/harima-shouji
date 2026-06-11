import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner({
  title = '複数店舗の工事相談、まとめてお任せください',
  description = 'フランチャイズ本部・多店舗展開企業の担当者様からのご相談を積極的にお受けしております。現地調査・お見積りは完全無料です。',
  primaryLabel = '無料相談する',
  primaryHref = '/contact',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#071322', paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.05]">
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_26.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Top / bottom amber accent lines */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.18) 50%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.08) 50%, transparent 100%)' }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Label */}
          <div
            className="font-bold tracking-[0.4em] text-amber-500 uppercase mb-8"
            style={{ fontSize: '0.625rem' }}
          >
            Free Consultation
          </div>

          {/* Title — wider container prevents bad wraps */}
          <h2
            className="font-bold text-white mb-7 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.75rem)', letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="leading-relaxed mb-10"
            style={{
              color: '#6b7280',
              fontSize: '0.9375rem',
              lineHeight: '2',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
            }}
          >
            {description}
          </p>

          {/* Subtle feature points — replaces amber badge strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 mb-12">
            {['現地調査 無料', '見積 無料', '夜間工事 相談可', '原状回復 対応'].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden sm:block" style={{ color: '#374151', fontSize: '0.5rem' }}>●</span>
                )}
                <span
                  className="font-medium tracking-wide"
                  style={{ color: '#6b7280', fontSize: '0.75rem' }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2.5 bg-amber-500 text-white font-bold px-10 py-4 hover:bg-amber-400 transition-colors tracking-wide"
              style={{ fontSize: '0.9375rem' }}
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:080-4724-0713"
              className="inline-flex items-center justify-center gap-2 transition-colors hover:text-white"
              style={{ color: '#6b7280', fontSize: '0.875rem' }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide">080-4724-0713</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
