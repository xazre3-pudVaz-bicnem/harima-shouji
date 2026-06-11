'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServiceLink from '@/components/ui/ServiceLink'

const categories = [
  {
    label: '内装工事',
    description: '新規出店・改装・FC仕様統一施工。複数店舗の工程管理を一括で承ります。',
    items: ['新規出店内装', 'クロス・壁紙', '床材工事', '天井・照明', '設備工事'],
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    href: '/service/shop-interior',
  },
  {
    label: '原状回復工事',
    description: '退去立会い代行・解体・内装復旧まで一括対応。費用の適正化もサポート。',
    items: ['内装解体・撤去', 'クロス・床の復旧', '退去立会い代行', '費用適正化', '複数店舗退去管理'],
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    href: '/service/restoration',
  },
  {
    label: '店舗クリーニング',
    description: '退去・開業前・改装後の専門クリーニング。厨房・ダクト専門対応も。',
    items: ['退去前クリーニング', '開業前清掃', '厨房専門', 'ダクト・エアコン', '複数店舗一括'],
    image: '/LINE_ALBUM_2026.6.10_260610_12.jpg',
    href: '/service/cleaning',
  },
  {
    label: '設備修繕',
    description: '電気・空調・水まわりの修繕・急ぎ対応まで。店舗設備をワンストップで。',
    items: ['電気・照明工事', '空調・換気', '水まわり修繕', '設備交換', '夜間・急ぎ対応'],
    image: '/LINE_ALBUM_2026.6.10_260610_8.jpg',
    href: '/service',
  },
]

export default function WorkScope() {
  return (
    <section className="bg-[#071322]" style={{ paddingTop: '10rem', paddingBottom: '0' }}>
      {/* Header */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="section-label-light mb-6">SCOPE OF WORK</div>
            <h2 className="section-title-light">対応できる工事内容</h2>
            <p
              className="mt-6 max-w-lg"
              style={{ fontSize: '1.0625rem', color: 'rgba(107, 114, 128, 1)', lineHeight: '2' }}
            >
              内装から設備・クリーニング・原状回復まで。複数カテゴリを一括でご依頼いただけます。
            </p>
          </div>
          <Link
            href="/service"
            className="inline-flex items-center gap-2.5 font-semibold text-gray-400 border-b border-gray-700 pb-2 hover:text-amber-400 hover:border-amber-500 transition-all group shrink-0"
            style={{ fontSize: '0.9375rem' }}
          >
            全サービスを見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* 2×2 Large Photo Tiles — full width, no container padding */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden group/card"
            style={{ minHeight: '420px' }}
          >
            {/* Invisible stretched link — whole tile is clickable */}
            <Link
              href={cat.href}
              className="absolute inset-0 z-[1]"
              tabIndex={-1}
              aria-hidden="true"
            />

            {/* Background Photo */}
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15 group-hover/card:from-black/95 group-hover/card:via-black/65 transition-all duration-500" />
            {/* Hover border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
              <h3
                className="font-bold text-white mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.8rem)', letterSpacing: '-0.025em' }}
              >
                {cat.label}
              </h3>
              <p
                className="text-white/65 mb-7 leading-relaxed max-w-sm"
                style={{ fontSize: '1rem', lineHeight: '1.85' }}
              >
                {cat.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-9">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-[11px] font-medium text-white/55 border border-white/18 px-3.5 py-1.5 tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ServiceLink href={cat.href} className="relative z-[2]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
