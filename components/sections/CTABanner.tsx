import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function CTABanner({
  title = 'FC本部・多店舗展開企業の\n施工パートナーとして',
  description,
  primaryLabel = '無料相談をする',
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
      style={{ display: 'flex', alignItems: 'center', minHeight: '60vh' }}
    >
      {/* Full background photo */}
      <div className="absolute inset-0">
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_26.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(2,10,24,0.8)' }} />
      </div>

      {/* Thin amber accent lines */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.25) 50%, transparent 100%)',
        }}
      />

      <div
        className="container relative text-center"
        style={{ zIndex: 10, paddingTop: '8rem', paddingBottom: '8rem' }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="font-bold tracking-[0.45em] text-amber-500 uppercase mb-8"
            style={{ fontSize: '0.625rem' }}
          >
            Free Consultation
          </div>

          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              letterSpacing: '-0.025em',
              whiteSpace: 'pre-line',
              marginBottom: description ? '2rem' : '3rem',
            }}
          >
            {title}
          </h2>

          {description && (
            <p
              className="text-gray-400 leading-relaxed"
              style={{
                fontSize: '0.9375rem',
                lineHeight: '1.9',
                maxWidth: '34rem',
                margin: '0 auto 3rem',
              }}
            >
              {description}
            </p>
          )}

          <Link
            href={primaryHref}
            className="inline-flex items-center gap-3 bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors"
            style={{ padding: '1.1rem 3rem', fontSize: '0.9375rem' }}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
