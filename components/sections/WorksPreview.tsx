'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const photos = [
  { src: '/LINE_ALBUM_2026.6.10_260610_22.jpg', alt: '店舗内装施工', label: '内装工事' },
  { src: '/LINE_ALBUM_2026.6.10_260610_4.jpg', alt: '施工中の様子', label: '内装工事' },
  { src: '/LINE_ALBUM_2026.6.10_260610_19.jpg', alt: '原状回復施工', label: '原状回復' },
  { src: '/LINE_ALBUM_2026.6.10_260610_14.jpg', alt: 'クロス張替え', label: 'クロス' },
  { src: '/LINE_ALBUM_2026.6.10_260610_12.jpg', alt: 'クリーニング', label: 'クリーニング' },
  { src: '/LINE_ALBUM_2026.6.10_260610_8.jpg', alt: '施工事例', label: '内装工事' },
]

export default function WorksPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-label mb-4">WORKS</div>
            <h2 className="section-title">施工実績</h2>
          </div>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors group shrink-0"
          >
            全ての施工事例を見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Photo Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          {/* Featured Large Photo */}
          <motion.div
            className="lg:col-span-3 relative overflow-hidden bg-gray-100 group"
            style={{ minHeight: '520px' }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xs text-amber-400 tracking-[0.2em] font-semibold uppercase">
                {photos[0].label}
              </span>
            </div>
          </motion.div>

          {/* Right 2 stacked */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-2">
            {photos.slice(1, 3).map((photo, i) => (
              <motion.div
                key={photo.src}
                className="relative overflow-hidden bg-gray-100 group"
                style={{ minHeight: '255px' }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-amber-400 tracking-[0.2em] font-semibold uppercase">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom 3 photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
          {photos.slice(3).map((photo, i) => (
            <motion.div
              key={photo.src}
              className="relative overflow-hidden bg-gray-100 group aspect-[4/3]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-amber-400 tracking-[0.2em] font-semibold uppercase">
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
