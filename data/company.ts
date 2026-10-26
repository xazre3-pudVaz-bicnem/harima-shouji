// 会社情報の唯一の定義元。
// ページ内の表記・構造化データ（Organization / LocalBusiness）・フッター等はすべてここを参照する。
// 社名・住所・電話番号・URL・対応エリアを変えるときは、このファイルだけを編集すること。

export const SITE_URL = 'https://harima-shouji.co.jp'

export type ServiceArea = {
  /** 正式名（会社概要・構造化データ） */
  name: string
  /** 本文用の短縮表記 */
  short: string
  /** 英字表記（装飾ラベル） */
  en: string
  /** /area/[slug] */
  slug: string
  region: '関東' | '近畿' | '東海'
}

// 施工対応エリア（2026-10-26 播磨商事様に確認済み）。サイト内の掲載順もこの順に統一する。
export const serviceAreas: ServiceArea[] = [
  { name: '東京都', short: '東京', en: 'TOKYO', slug: 'tokyo', region: '関東' },
  { name: '神奈川県', short: '神奈川', en: 'KANAGAWA', slug: 'kanagawa', region: '関東' },
  { name: '千葉県', short: '千葉', en: 'CHIBA', slug: 'chiba', region: '関東' },
  { name: '埼玉県', short: '埼玉', en: 'SAITAMA', slug: 'saitama', region: '関東' },
  { name: '大阪府', short: '大阪', en: 'OSAKA', slug: 'osaka', region: '近畿' },
  { name: '兵庫県', short: '兵庫', en: 'HYOGO', slug: 'hyogo', region: '近畿' },
  { name: '京都府', short: '京都', en: 'KYOTO', slug: 'kyoto', region: '近畿' },
  { name: '愛知県', short: '愛知', en: 'AICHI', slug: 'aichi', region: '東海' },
  { name: '岐阜県', short: '岐阜', en: 'GIFU', slug: 'gifu', region: '東海' },
  { name: '静岡県', short: '静岡', en: 'SHIZUOKA', slug: 'shizuoka', region: '東海' },
]

/** 東京・神奈川・千葉・埼玉・大阪・兵庫・京都・愛知・岐阜・静岡 */
export const serviceAreaShortText = serviceAreas.map((a) => a.short).join('・')
/** 東京都・神奈川県・千葉県・埼玉県・大阪府・兵庫県・京都府・愛知県・岐阜県・静岡県 */
export const serviceAreaText = serviceAreas.map((a) => a.name).join('・')
/** TOKYO / KANAGAWA / … / SHIZUOKA */
export const serviceAreaEnText = serviceAreas.map((a) => a.en).join(' / ')

/** 関東・近畿・東海（掲載順） */
export const serviceRegions = [...new Set(serviceAreas.map((a) => a.region))]
/** 見出し・メタ情報など短く書きたい箇所用：関東・近畿・東海の10都府県 */
export const serviceAreaSummary = `${serviceRegions.join('・')}の${serviceAreas.length}都府県`
const regionEn: Record<ServiceArea['region'], string> = { 関東: 'KANTO', 近畿: 'KANSAI', 東海: 'TOKAI' }
/** KANTO / KANSAI / TOKAI */
export const serviceRegionEnText = serviceRegions.map((r) => regionEn[r]).join(' / ')
/** エリア外の案件についての定型文 */
export const outsideAreaNote = '上記以外のエリアも、案件内容によってはご相談を承ります。'

export const companyInfo = {
  name: '株式会社播磨商事',
  nameEn: 'HARIMA SHOUJI Co., Ltd.',
  url: SITE_URL,
  representative: {
    name: '播磨 龍樹',
    reading: 'はりま りゅうき',
    title: '代表取締役',
  },
  tel: '080-4724-0713',
  telIntl: '+81-80-4724-0713',
  email: 'naisou@harima-shouji.co.jp',
  address: {
    postalCode: '177-0053',
    prefecture: '東京都',
    city: '練馬区',
    street: '関町南2丁目2-4',
    building: '山一ビル',
  },
  businessHours: '平日 9:00〜18:00',
  businessNote: '夜間・土日は要相談',
  /** businessHours の構造化データ用 */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  logo: '/LINE_ALBUM_2026.6.10_260610_5.jpg',

  // ── 確認でき次第入力する項目 ──
  // 空欄のままの項目は、会社概要ページにも構造化データにも出力されない。
  /** 設立年月（例: '2020-04'） */
  foundingDate: '',
  /** 資本金（例: '500万円'） */
  capital: '',
  /** 建設業許可（例: '東京都知事許可（般-6）第000000号 内装仕上工事業'） */
  license: '',
  /** 法人番号（13桁） */
  corporateNumber: '',
  /** 適格請求書発行事業者登録番号（T + 13桁） */
  invoiceNumber: '',
  /** 従業員数（例: '5名（2026年10月時点）'） */
  employees: '',
  /** Googleビジネスプロフィール・Instagram 等の公式URL */
  sameAs: [] as string[],
  /** LINE公式アカウントの友だち追加URL */
  lineUrl: '',
}

/** 〒なしの住所：東京都練馬区関町南2丁目2-4 山一ビル */
export const fullAddress = `${companyInfo.address.prefecture}${companyInfo.address.city}${companyInfo.address.street} ${companyInfo.address.building}`
