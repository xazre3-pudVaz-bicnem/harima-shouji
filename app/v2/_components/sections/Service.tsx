'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: '店舗内装工事',
    description: '新規出店・改装・FC店舗施工・多店舗展開支援',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    href: '/service/interior',
    label: 'INTERIOR',
  },
  {
    title: '原状回復工事',
    description: '退去・解体・内装復旧・クロス補修・設備復旧',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    href: '/service/restoration',
    label: 'RESTORATION',
  },
]

export default function Service() {
  return (
    <section id="service" className="bg-white overflow-hidden">
      {/* Section header */}
      <div className="container" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label mb-7">SERVICES</div>
          <h2 className="section-title">サービス</h2>
        </motion.div>
      </div>

      {/* Two full-width photo tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.0, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative group overflow-hidden"
            style={{ minHeight: '62vh' }}
          >
            {/* Stretched accessible link */}
            <Link
              href={service.href}
              className="absolute inset-0 z-[1]"
              aria-label={service.title}
            />

            {/* Photo */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/5 group-hover:from-black/92 transition-all duration-500" />

            {/* Hover accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14">
              <div
                className="font-bold tracking-[0.3em] text-amber-400 uppercase mb-4"
                style={{ fontSize: '0.625rem' }}
              >
                {service.label}
              </div>
              <h3
                className="font-bold text-white mb-4 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-white/50 mb-9 leading-relaxed"
                style={{ fontSize: '0.9375rem' }}
              >
                {service.description}
              </p>
              <div
                className="relative z-[2] inline-flex items-center gap-2.5 text-white/60 group-hover:text-white transition-colors"
                style={{ fontSize: '0.875rem' }}
              >
                <span className="font-medium tracking-wide">詳しく見る</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
