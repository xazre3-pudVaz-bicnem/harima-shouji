'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const staff = [
  {
    src: '/LINE_ALBUM_2026.6.10_260610_1.jpg',
    name: '播磨 龍樹',
    title: '代表取締役',
    description: '複数店舗の工事管理を一元化し、FC本部・多店舗企業の担当者様の負担を軽減することを使命とする。',
  },
  {
    src: '/LINE_ALBUM_2026.6.10_260610_2.jpg',
    name: '現場管理スタッフ',
    title: '現場施工管理',
    description: '内装工事から原状回復まで幅広く対応。品質と工期管理を徹底し、確実な施工完了を実現する。',
  },
]

export default function StaffSection() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="section-label mb-4">OUR TEAM</div>
          <h2 className="section-title">スタッフ紹介</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          {staff.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Large Portrait Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-7">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">
                  {member.title}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
