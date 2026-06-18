import type { Metadata } from 'next'
import { MapPin, CheckCircle } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: '対応エリア | 東京・関東圏・大阪・兵庫の店舗内装工事・原状回復',
  description:
    '株式会社播磨商事の対応エリア。東京都を中心に関東圏・静岡・大阪府・兵庫県に対応。FC本部・多店舗展開企業の内装工事・原状回復工事を全国対応します。',
  keywords: ['原状回復工事 東京', '店舗内装 関東', 'フランチャイズ内装 大阪', '多店舗内装 全国'],
  alternates: { canonical: 'https://harima-shouji.co.jp/area' },
}

const areas = [
  {
    name: '東京都',
    detail: '練馬区・新宿区・渋谷区・港区・中央区・千代田区・豊島区・板橋区・足立区・江東区など全域',
    note: '主要対応エリア',
  },
  {
    name: '埼玉県',
    detail: 'さいたま市・川口市・越谷市・所沢市など',
    note: '対応エリア',
  },
  {
    name: '千葉県',
    detail: '千葉市・船橋市・松戸市・柏市など',
    note: '対応エリア',
  },
  {
    name: '神奈川県',
    detail: '横浜市・川崎市・相模原市・横須賀市など',
    note: '対応エリア',
  },
  {
    name: '静岡県',
    detail: '静岡市・浜松市・沼津市など',
    note: '対応エリア',
  },
  {
    name: '大阪府',
    detail: '大阪市・堺市・豊中市・吹田市・枚方市など',
    note: '対応エリア',
  },
  {
    name: '兵庫県',
    detail: '神戸市・姫路市・尼崎市・西宮市など',
    note: '対応エリア',
  },
]

export default function AreaPage() {
  const breadcrumbs = [{ name: '対応エリア', url: '/area' }]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-14">
          <Breadcrumb items={[{ label: '対応エリア' }]} />
          <div className="mt-4">
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">SERVICE AREA</div>
            <h1
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              対応エリア
            </h1>
            <p className="text-gray-300 leading-relaxed" style={{ fontSize: '1.0625rem', lineHeight: '2' }}>
              東京・関東圏を中心に、静岡・大阪・兵庫まで対応しています。<br className="hidden md:block" />
              FC本部・多店舗展開企業様の広域案件もまとめてお任せください。
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">対応エリア一覧</h2>
            <p className="text-base text-gray-500 mb-10">
              ※エリア内であっても内容によってはお断りする場合があります。詳しくはお問い合わせください。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area.name} className="border border-gray-100 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-500" />
                      <h3 className="text-lg font-bold text-gray-900">{area.name}</h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 ${
                        area.note === '主要対応エリア'
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {area.note}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">エリアに関するご案内</h2>
          <div className="space-y-5 max-w-4xl">
            {[
              '上記以外のエリアでも対応できる場合がありますので、まずはお気軽にご相談ください。',
              'FC本部・多店舗展開企業様の複数店舗まとめてのご依頼の場合、広域対応も検討します。',
              '東京都内については全域対応しております。',
              '遠方への出張が必要な場合は、別途交通費・出張費をご請求する場合があります。',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-base text-gray-700">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="対応エリアのご確認・ご相談はこちら" description="エリア外の案件もお気軽にご相談ください。" />
    </>
  )
}
