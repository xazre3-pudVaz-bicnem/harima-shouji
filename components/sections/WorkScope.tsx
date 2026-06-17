'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServiceLink from '@/components/ui/ServiceLink'

const categories = [
  {
    label: '内装工事',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    href: '/service/shop-interior',
  },
  {
    label: '原状回復工事',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    href: '/service/restoration',
  },
  {
    label: '店舗クリーニング',
    image: '/LINE_ALBUM_2026.6.10_260610_12.jpg',
    href: '/service/cleaning',
  },
  {
    label: '設備修繕',
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

      {/* 2×2 Large Photo Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden group/card"
            style={{ minHeight: '480px' }}
          >
            {/* Invisible stretched link */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 group-hover/card:from-black/90 transition-all duration-500" />
            {/* Hover border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
              <h3
                className="font-bold text-white mb-8 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.03em' }}
              >
                {cat.label}
              </h3>
              <ServiceLink href={cat.href} className="relative z-[2]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
