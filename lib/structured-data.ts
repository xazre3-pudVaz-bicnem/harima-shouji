// 構造化データ（JSON-LD）。会社情報は data/company.ts、紹介文は data/expertise.ts から生成し、
// ページ内の表記と常に一致させる。
import { SITE_URL, companyInfo, serviceAreas, serviceAreaShortText } from '@/data/company'
import { specialtyStatementText } from '@/data/expertise'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** 対応エリア（AdministrativeArea の配列） */
export const areaServedSchema = serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a.name }))

/** 他のエンティティから会社を参照するときに使う */
export const organizationRef = { '@id': ORGANIZATION_ID }

const postalAddress = {
  '@type': 'PostalAddress',
  postalCode: companyInfo.address.postalCode,
  addressRegion: companyInfo.address.prefecture,
  addressLocality: companyInfo.address.city,
  streetAddress: `${companyInfo.address.street} ${companyInfo.address.building}`,
  addressCountry: 'JP',
}

const offeredServices: { name: string; url?: string }[] = [
  { name: 'サロンの内装工事（美容室・エステ・ネイル・アイラッシュ）', url: '/industry/salon-interior' },
  { name: 'ジムの内装工事（パーソナルジム・フィットネスジム）', url: '/industry/gym-interior' },
  { name: 'ピラティススタジオの内装工事' },
  { name: '初めての店舗出店の内装相談・物件契約前の内見同行', url: '/start' },
  { name: 'FC・多店舗展開の内装工事', url: '/franchise' },
  { name: '店舗の原状回復工事・退去立会い', url: '/service/restoration' },
]

// 会社を表す唯一のエンティティ（全ページ共通・layout.tsx で出力）。
// GeneralContractor は LocalBusiness（＝Organization）の下位型なので、Organization と LocalBusiness の情報を
// この1つにまとめ、各ページの Service・Article などからは同じ @id で参照する。
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': ORGANIZATION_ID,
  name: companyInfo.name,
  alternateName: companyInfo.nameEn,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}${companyInfo.logo}` },
  image: `${SITE_URL}/og-image.jpg`,
  description: specialtyStatementText,
  slogan: '店舗施工を、ひとつの窓口に。',
  telephone: companyInfo.telIntl,
  email: companyInfo.email,
  address: postalAddress,
  areaServed: areaServedSchema,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: companyInfo.openingHours.days,
    opens: companyInfo.openingHours.opens,
    closes: companyInfo.openingHours.closes,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: companyInfo.telIntl,
    email: companyInfo.email,
    contactType: 'customer service',
    areaServed: 'JP',
    availableLanguage: 'Japanese',
  },
  founder: {
    '@type': 'Person',
    name: companyInfo.representative.name,
    jobTitle: companyInfo.representative.title,
  },
  knowsAbout: [
    '店舗内装工事',
    'サロン内装',
    'エステサロン内装',
    'ネイルサロン内装',
    'ジム内装',
    'パーソナルジム内装',
    'ピラティススタジオ内装',
    '居抜き物件の改装',
    '小規模店舗の内装',
    '物件契約前の内見同行',
    'フランチャイズ内装',
    '多店舗展開の施工管理',
    '店舗の原状回復',
    '退去立会い',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '施工サービス',
    itemListElement: offeredServices.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        ...(s.url ? { url: `${SITE_URL}${s.url}` } : {}),
      },
    })),
  },
  // 以下は data/company.ts に入力されたものだけ出力する
  ...(companyInfo.foundingDate ? { foundingDate: companyInfo.foundingDate } : {}),
  ...(companyInfo.sameAs.length > 0 ? { sameAs: companyInfo.sameAs } : {}),
  ...(companyInfo.corporateNumber
    ? { identifier: { '@type': 'PropertyValue', propertyID: '法人番号', value: companyInfo.corporateNumber } }
    : {}),
  ...(companyInfo.license
    ? { hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: '建設業許可', name: companyInfo.license } }
    : {}),
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: companyInfo.name,
  description: `サロン・ジム・ピラティススタジオなどの店舗内装工事。${serviceAreaShortText}で施工に対応。`,
  inLanguage: 'ja',
  publisher: organizationRef,
}

/** 会社概要ページ用 */
export function aboutPageSchema(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}${path}`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: organizationRef,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// FAQPage は、同じ質問と回答を掲載するページのうち1ページだけで出力する（Google のガイドライン）
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: organizationRef,
    url: `${SITE_URL}${url}`,
    areaServed: areaServedSchema,
  }
}

export function articleSchema(post: {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${post.url}`,
    mainEntityOfPage: `${SITE_URL}${post.url}`,
    ...(post.datePublished ? { datePublished: post.datePublished } : {}),
    ...(post.dateModified ? { dateModified: post.dateModified } : {}),
    ...(post.imageUrl ? { image: `${SITE_URL}${post.imageUrl}` } : {}),
    author: organizationRef,
    publisher: organizationRef,
  }
}
