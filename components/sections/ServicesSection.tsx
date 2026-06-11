'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, RotateCcw, Layers, Sparkles, ClipboardList, Hammer, Wrench } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: '内装工事',
    description: '新規出店・改装・リノベーションまで。複数店舗の施工品質統一と工程管理を一括で実現します。',
    href: '/service/franchise-interior',
    label: 'INTERIOR',
  },
  {
    icon: RotateCcw,
    title: '原状回復工事',
    description: '退去後の解体・撤去・内装復旧まで。適正な費用での原状回復対応を実現します。',
    href: '/service/restoration',
    label: 'RESTORATION',
  },
  {
    icon: Layers,
    title: 'クロス張替え',
    description: '壁紙・クロスの部分補修から全面張替えまで。夜間・短工期施工にも対応します。',
    href: '/service/cross-wallpaper',
    label: 'WALLPAPER',
  },
  {
    icon: Sparkles,
    title: '店舗クリーニング',
    description: '退去・開業前・改装後の専門清掃。厨房・ダクト・エアコンの専門クリーニングも対応。',
    href: '/service/cleaning',
    label: 'CLEANING',
  },
  {
    icon: ClipboardList,
    title: '退去立会いサポート',
    description: '立会い代行・オーナーとの交渉・過剰な原状回復費用の適正化まで一括対応します。',
    href: '/service/exit-support',
    label: 'EXIT SUPPORT',
  },
  {
    icon: Hammer,
    title: '解体・撤去',
    description: '店舗の内装解体・設備の撤去・廃材処分まで対応。スムーズな退去・出店をサポートします。',
    href: '/service/restoration',
    label: 'DEMOLITION',
  },
  {
    icon: Wrench,
    title: '設備修繕',
    description: '空調・ダクト・給排水・電気まわりの修繕・入替に対応します。急ぎの修繕依頼も歓迎。',
    href: '/service/shop-interior',
    label: 'MAINTENANCE',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="section-label mb-5">WHAT WE DO</div>
            <h2 className="section-title">播磨商事ができること</h2>
            <p className="body-text text-sm mt-5 max-w-lg">
              内装工事から退去立会いまで、店舗に関わるあらゆる工事をワンストップで対応します。
            </p>
          </div>
          <Link
            href="/service"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border-b border-gray-300 pb-1.5 hover:border-gray-900 hover:text-gray-900 transition-all group shrink-0"
          >
            全サービスを見る
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Service Cards — BtoB SaaS Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full border border-gray-100 p-9 hover:border-amber-200 hover:shadow-sm transition-all duration-300 bg-white"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 border border-gray-100 flex items-center justify-center mb-8 group-hover:border-amber-200 group-hover:bg-amber-50 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-[9px] font-bold tracking-[0.25em] text-gray-300 mb-3 uppercase">
                      {service.label}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ lineHeight: '1.85' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-2 font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-200 mt-8">
                    <span>詳しく見る</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: services.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="group flex flex-col h-full bg-[#071322] border border-[#071322] p-9 hover:bg-[#0a1d35] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-8">
                <ArrowRight className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-bold tracking-[0.25em] text-white/20 mb-3 uppercase">
                  CONTACT
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  まとめて相談する
                </h3>
                <p className="text-sm text-white/40 leading-relaxed" style={{ lineHeight: '1.85' }}>
                  複数店舗の工事をまとめてご相談ください。現地調査・お見積りは無料です。
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mt-8">
                <span>無料相談する</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
