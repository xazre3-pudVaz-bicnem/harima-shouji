import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner({
  title = '複数店舗の内装工事、まとめてご相談ください',
  description = '現地調査・お見積りは無料です。フランチャイズ本部様・多店舗運営会社様からのご相談を積極的にお受けしております。',
  primaryLabel = '無料相談する',
  primaryHref = '/contact',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  return (
    <section className="relative bg-[#071322] overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/LINE_ALBUM_2026.6.10_260610_26.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Subtle left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-transparent to-[#071322]/60" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-6">
            FREE CONSULTATION
          </div>
          <h2
            className="font-bold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            {title}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-12" style={{ fontSize: '1rem', lineHeight: '2' }}>{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2.5 bg-amber-500 text-white font-bold px-10 py-5 hover:bg-amber-400 transition-colors tracking-wide"
              style={{ fontSize: '0.9375rem' }}
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:080-4724-0713"
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-gray-300 font-medium px-10 py-5 hover:border-white/35 hover:text-white transition-colors"
              style={{ fontSize: '0.9375rem' }}
            >
              <Phone className="w-4 h-4" />
              080-4724-0713
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
