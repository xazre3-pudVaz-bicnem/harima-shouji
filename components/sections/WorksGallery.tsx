'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const photos = [
  { src: '/LINE_ALBUM_2026.6.10_260610_22.jpg', alt: '店舗内装施工', label: '内装工事', featured: true },
  { src: '/LINE_ALBUM_2026.6.10_260610_4.jpg', alt: '施工中の様子', label: '内装工事' },
  { src: '/LINE_ALBUM_2026.6.10_260610_19.jpg', alt: '原状回復施工', label: '原状回復' },
  { src: '/LINE_ALBUM_2026.6.10_260610_14.jpg', alt: 'クロス張替え施工', label: 'クロス' },
  { src: '/LINE_ALBUM_2026.6.10_260610_12.jpg', alt: 'クリーニング施工', label: 'クリーニング' },
  { src: '/LINE_ALBUM_2026.6.10_260610_8.jpg', alt: '職人作業中', label: '施工中' },
  { src: '/LINE_ALBUM_2026.6.10_260610_7.jpg', alt: 'クロス素材', label: 'クロス' },
  { src: '/LINE_ALBUM_2026.6.10_260610_9.jpg', alt: '施工後仕上がり', label: '内装工事' },
  { src: '/LINE_ALBUM_2026.6.10_260610_24.jpg', alt: '退去立会い', label: '退去対応' },
]

export default function WorksGallery() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="section-label mb-6">GALLERY</div>
            <h2 className="section-title">施工実績</h2>
            <p className="body-text mt-5 max-w-lg">
              東京・関東圏の施工現場から。店舗内装・クロス・原状回復・クリーニングの実際の仕上がりをご確認ください。
            </p>
          </div>
          <Link
            href="/works"
            className="inline-flex items-center gap-2.5 font-semibold text-gray-700 border-b border-gray-300 pb-2 hover:border-amber-500 hover:text-amber-600 transition-all group shrink-0"
            style={{ fontSize: '0.9375rem' }}
          >
            全施工事例を見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Main mosaic — featured + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mb-2">
          <motion.div
            className="lg:col-span-3 relative overflow-hidden bg-gray-200 group"
            style={{ minHeight: '640px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[11px] font-bold text-amber-400 tracking-[0.3em] uppercase">
                {photos[0].label}
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-rows-2 gap-2">
            {photos.slice(1, 3).map((photo, i) => (
              <motion.div
                key={photo.src}
                className="relative overflow-hidden bg-gray-200 group"
                style={{ minHeight: '318px' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[10px] font-bold text-amber-400 tracking-[0.28em] uppercase">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {photos.slice(3).map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative overflow-hidden bg-gray-200 group"
              style={{ aspectRatio: '1', minHeight: '180px' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[9px] font-bold text-amber-400 tracking-[0.22em] uppercase">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
