'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServiceLink from '@/components/ui/ServiceLink'

const services = [
  {
    number: '01',
    label: 'INTERIOR',
    category: '新規出店・改装',
    title: '店舗内装工事',
    description:
      'FC加盟店の新規出店から既存店舗の改装・リノベーションまで、内装工事全般を一括対応します。複数店舗の施工品質を統一し、本部担当者様の管理コストを大幅に削減。夜間・短工期施工にも対応しています。',
    features: ['複数店舗の施工品質を統一', '本部担当者との窓口を一本化', '夜間・短工期・急ぎ対応'],
    href: '/service/franchise-interior',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
  },
  {
    number: '02',
    label: 'RESTORATION',
    category: '退去・原状回復',
    title: '原状回復工事',
    description:
      '店舗・テナントの退去後の原状回復を迅速・適正に対応します。解体・撤去から内装復旧・クロス張替えまで一括でお引き受け。複数店舗の退去スケジュールの一元管理も承ります。',
    features: ['退去立会い代行・オーナー交渉', '過剰な費用の適正化', '複数店舗の退去スケジュール管理'],
    href: '/service/restoration',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
  },
  {
    number: '03',
    label: 'WALLPAPER',
    category: 'クロス・壁紙',
    title: 'クロス張替え工事',
    description:
      '壁紙・クロスの部分補修から全面張替えまで幅広く対応します。汚れや傷みが目立つクロスは店舗の印象を損ないます。夜間・短工期施工で、店舗営業への影響を最小限に抑えます。',
    features: ['部分補修から全面張替えまで', '夜間・短工期施工可能', '豊富な素材・カラーから選択'],
    href: '/service/cross-wallpaper',
    image: '/LINE_ALBUM_2026.6.10_260610_14.jpg',
  },
  {
    number: '04',
    label: 'CLEANING',
    category: '退去・開業前清掃',
    title: '店舗クリーニング',
    description:
      '退去時・開業前・改装後の専門クリーニングを提供します。通常清掃から厨房・ダクト・エアコンの専門クリーニングまで対応。原状回復工事との同時施工でコストと工期を削減します。',
    features: ['厨房・ダクト専門クリーニング', '原状回復工事との同時対応', '複数店舗の一括手配'],
    href: '/service/cleaning',
    image: '/LINE_ALBUM_2026.6.10_260610_12.jpg',
  },
  {
    number: '05',
    label: 'EXIT SUPPORT',
    category: '退去・立会い代行',
    title: '退去立会いサポート',
    description:
      '店舗・テナントの退去時に発生する立会い業務を代行します。オーナー・管理会社との交渉をサポートし、過剰な原状回復費用を適正化。多忙な担当者様の代わりに、退去に関する全対応を担います。',
    features: ['退去立会い代行サービス', 'オーナーとの費用交渉サポート', '複数店舗の一括退去管理'],
    href: '/service/exit-support',
    image: '/LINE_ALBUM_2026.6.10_260610_24.jpg',
  },
  {
    number: '06',
    label: 'DEMOLITION',
    category: '解体・廃材処分',
    title: '解体・撤去工事',
    description:
      '店舗の内装解体・設備撤去・廃材処分まで一括対応します。退去に伴うスケルトン化から、部分的な内装解体まで柔軟に対応。産業廃棄物の適切な処理も一括してお任せいただけます。',
    features: ['内装解体からスケルトンまで', '設備・厨房機器の撤去', '産廃処理・廃材処分'],
    href: '/service/demolition',
    image: '/LINE_ALBUM_2026.6.10_260610_4.jpg',
  },
]

export default function ServicesShowcase() {
  return (
    <section className="bg-white">
      {/* Section Header */}
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="section-label mb-6">WHAT WE DO</div>
            <h2 className="section-title">6つのサービス領域</h2>
            <p className="body-text mt-6 max-w-lg">
              内装工事から退去立会いまで、店舗ライフサイクル全体をワンストップで対応します。
            </p>
          </div>
          <Link
            href="/service"
            className="inline-flex items-center gap-2.5 font-semibold text-gray-700 border-b border-gray-300 pb-2 hover:border-amber-500 hover:text-amber-600 transition-all group shrink-0"
            style={{ fontSize: '0.9375rem' }}
          >
            全サービスを見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="divider-line" />

      {/* Alternating Service Sections */}
      {services.map((service, index) => (
        <div key={service.title}>
          {/* group/card scopes hover effects to this card only */}
          <div
            className={`relative group/card flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            style={{ minHeight: '720px' }}
          >
            {/* Invisible stretched link — makes entire card area clickable */}
            <Link
              href={service.href}
              className="absolute inset-0 z-[1]"
              tabIndex={-1}
              aria-hidden="true"
            />

            {/* Photo — 60% width */}
            <motion.div
              className="relative w-full lg:w-[60%] overflow-hidden bg-gray-100"
              style={{ minHeight: '440px' }}
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/30 transition-colors duration-500" />
              {/* Number badge */}
              <div className="absolute top-10 left-10">
                <span
                  className="font-bold text-white/20"
                  style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {service.number}
                </span>
              </div>
              <div className="absolute bottom-10 left-10">
                <span className="text-[11px] font-bold text-amber-400 tracking-[0.3em] uppercase">
                  {service.label}
                </span>
              </div>
            </motion.div>

            {/* Content — 40% width */}
            <motion.div
              className="w-full lg:w-[40%] flex flex-col justify-center px-10 py-16 xl:px-20 xl:py-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="text-xs font-bold text-amber-500 tracking-[0.3em] uppercase mb-5">
                  {service.label}
                </div>
                <h3
                  className="font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 2.8vw, 3.2rem)', letterSpacing: '-0.025em' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-500 mb-10 leading-relaxed"
                  style={{ fontSize: '1rem', lineHeight: '2' }}
                >
                  {service.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-4 text-gray-700" style={{ fontSize: '0.9375rem' }}>
                      <span className="w-4 h-px bg-amber-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ServiceLink href={service.href} className="relative z-[2]" />
              </div>
            </motion.div>
          </div>

          <div className="divider-line" />
        </div>
      ))}
    </section>
  )
}
