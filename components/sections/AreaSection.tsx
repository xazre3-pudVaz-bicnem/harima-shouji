'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const areas = ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県']

export default function AreaSection() {
  return (
    <section className="section-padding bg-stone-50 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden bg-gray-100"
          >
            <Image
              src="/LINE_ALBUM_2026.6.10_260610_26.jpg"
              alt="施工対応エリア"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gray-900/15" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-5">SERVICE AREA</div>
            <h2 className="section-title mb-8">対応エリア</h2>
            <p className="body-text leading-relaxed mb-10">
              東京・関東圏を中心に、大阪・兵庫を含む全国の店舗工事に対応します。FC本部・多店舗企業様の広域案件もまとめてお任せください。
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 text-gray-600 bg-white border border-gray-150 px-5 py-2.5 tracking-wide font-medium hover:border-amber-300 hover:text-amber-700 transition-colors"
                  style={{ fontSize: '0.875rem' }}
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {area}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-10" style={{ borderLeft: '2px solid #F59E0B', paddingLeft: '1rem' }}>
              上記以外のエリアもご相談ください。
            </p>

            <Link
              href="/area"
              className="inline-flex items-center gap-2.5 font-semibold text-gray-900 hover:text-amber-600 transition-colors group"
              style={{ fontSize: '0.9375rem' }}
            >
              対応エリア詳細を見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
