'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = ['すべて', '内装工事', 'クロス張替え', '原状回復', 'クリーニング', 'ダクト・設備']

const works = [
  {
    title: 'フランチャイズ加盟店 内装工事',
    category: '内装工事',
    location: '東京都豊島区',
    description: 'フランチャイズ本部様からのご依頼で、新規加盟店の内装工事を担当。クロス・床材・設備まわりを一括施工。',
    image: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
  },
  {
    title: '店舗 クロス全面張替え',
    category: 'クロス張替え',
    location: '東京都練馬区',
    description: '既存クロスを全面撤去し、新規クロスに張替え。夜間施工で翌朝には通常営業が可能な状態で完了。',
    image: '/LINE_ALBUM_2026.6.10_260610_7.jpg',
  },
  {
    title: 'オフィス 原状回復・退去対応',
    category: '原状回復',
    location: '東京都新宿区',
    description: '退去立会い代行・クロス復旧・クリーニングを一括対応。スムーズな引き渡しを実現しました。',
    image: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
  },
  {
    title: '店舗 鏡・ガラス面クリーニング',
    category: 'クリーニング',
    location: '東京都渋谷区',
    description: '鏡面・ガラスの専門クリーニング。水垢・汚れを丁寧に除去し、清潔感のある状態に仕上げました。',
    image: '/LINE_ALBUM_2026.6.10_260610_12.jpg',
  },
  {
    title: 'クロス張替え 施工準備',
    category: 'クロス張替え',
    location: '東京都中野区',
    description: '大型のクロス張替えに向けた養生・下準備を実施。翌日の施工に備えて機材を配置し準備完了。',
    image: '/LINE_ALBUM_2026.6.10_260610_14.jpg',
  },
  {
    title: 'ダクト・エアコン専門クリーニング',
    category: 'ダクト・設備',
    location: '東京都目黒区',
    description: 'エアコン内部のファン・フィルター・ダクトを分解清掃。衛生管理が必要な店舗に対応しました。',
    image: '/LINE_ALBUM_2026.6.10_260610_16.jpg',
  },
  {
    title: '店舗 浴室・水まわりクリーニング',
    category: 'クリーニング',
    location: '神奈川県横浜市',
    description: '退去前の浴室・水まわりの専門クリーニング。頑固な水垢・カビを除去し原状に近い状態で引き渡し。',
    image: '/LINE_ALBUM_2026.6.10_260610_8.jpg',
  },
  {
    title: 'フィットネス店舗 内装工事',
    category: '内装工事',
    location: '東京都世田谷区',
    description: 'フィットネス系店舗の内装工事。床材・鏡・設備の配置まで、オーナー様のご要望に合わせて施工。',
    image: '/LINE_ALBUM_2026.6.10_260610_6.jpg',
  },
  {
    title: '内装施工 打ち合わせ・現地確認',
    category: '内装工事',
    location: '東京都渋谷区',
    description: '施工前の現地調査・素材選定・工程打ち合わせ。お客様のご要望を丁寧にヒアリングして進めます。',
    image: '/LINE_ALBUM_2026.6.10_260610_24.jpg',
  },
]

export default function WorksClient() {
  const [activeCategory, setActiveCategory] = useState('すべて')

  const filtered = activeCategory === 'すべて'
    ? works
    : works.filter((w) => w.category === activeCategory)

  return (
    <section className="section-padding bg-white">
      <div className="container">

        {/* Category Filter */}
        <div className="flex flex-wrap border-b border-gray-200 mb-16 gap-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 text-sm font-bold tracking-wide -mb-px border-b-2 transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((work, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white bg-gray-900/60 backdrop-blur-sm px-3 py-1 tracking-wide">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-gray-900 leading-snug">{work.title}</h3>
                <span className="text-xs text-gray-400 shrink-0 mt-0.5">{work.location}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{work.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 py-8 px-8 bg-gray-50 border border-gray-100 text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            施工事例は順次追加予定です。具体的な施工事例・写真のご確認はお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors group"
          >
            施工についてのご相談はこちら
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
