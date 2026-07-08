const AREA_SERVED = ['東京都', '埼玉県', '千葉県', '神奈川県', '静岡県', '大阪府', '兵庫県'].map((name) => ({
  '@type': 'AdministrativeArea',
  name,
}))

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://harima-shouji.co.jp/#organization',
  name: '株式会社播磨商事',
  alternateName: 'HARIMA SHOUJI CO., LTD.',
  url: 'https://harima-shouji.co.jp',
  logo: 'https://harima-shouji.co.jp/og-image.jpg',
  image: 'https://harima-shouji.co.jp/og-image.jpg',
  description:
    'フランチャイズ本部・多店舗展開企業向けの店舗内装工事・原状回復工事をワンストップで提供する施工会社。出店・改装・退店の施工管理を窓口一本化。',
  slogan: '店舗施工を、ひとつの窓口に。',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-80-4724-0713',
    contactType: 'customer service',
    areaServed: 'JP',
    availableLanguage: 'Japanese',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '関町南2丁目2-4 山一ビル',
    addressLocality: '練馬区',
    addressRegion: '東京都',
    postalCode: '177-0053',
    addressCountry: 'JP',
  },
  email: 'naisou@harima-shouji.co.jp',
  telephone: '+81-80-4724-0713',
  areaServed: AREA_SERVED,
  knowsAbout: ['店舗内装工事', '原状回復工事', 'フランチャイズ内装', '多店舗展開の施工管理', '店舗改装', 'テナント退去'],
  founder: {
    '@type': 'Person',
    name: '播磨 龍樹',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://harima-shouji.co.jp/#website',
  url: 'https://harima-shouji.co.jp',
  name: '株式会社播磨商事',
  description: 'フランチャイズ本部・多店舗展開企業向けの店舗内装工事・原状回復工事。東京・関東圏を中心に7都府県対応。',
  inLanguage: 'ja',
  publisher: { '@id': 'https://harima-shouji.co.jp/#organization' },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': 'https://harima-shouji.co.jp/#localbusiness',
  name: '株式会社播磨商事',
  image: 'https://harima-shouji.co.jp/og-image.jpg',
  description:
    'FC本部・多店舗展開企業向けの内装工事・原状回復・クロス張替え・店舗クリーニング・退去立会い代行サービス',
  url: 'https://harima-shouji.co.jp',
  email: 'naisou@harima-shouji.co.jp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '関町南2丁目2-4 山一ビル',
    addressLocality: '練馬区',
    addressRegion: '東京都',
    postalCode: '177-0053',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.7372,
    longitude: 139.5943,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '¥¥',
  telephone: '+81-80-4724-0713',
  parentOrganization: { '@id': 'https://harima-shouji.co.jp/#organization' },
  areaServed: AREA_SERVED,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '施工サービス',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: '店舗内装工事',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '新規出店 内装工事', url: 'https://harima-shouji.co.jp/service/shop-interior' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '店舗改装・リニューアル工事', url: 'https://harima-shouji.co.jp/service/shop-interior' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: '原状回復工事',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '店舗・テナント原状回復工事', url: 'https://harima-shouji.co.jp/service/restoration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '退去立会い代行', url: 'https://harima-shouji.co.jp/service/restoration' } },
        ],
      },
    ],
  },
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://harima-shouji.co.jp${item.url}`,
    })),
  }
}

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

export function serviceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
    },
    url: `https://harima-shouji.co.jp${url}`,
    areaServed: '東京都・関東圏',
  }
}

export function articleSchema(post: {
  title: string
  description: string
  url: string
  datePublished: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://harima-shouji.co.jp${post.url}`,
    datePublished: post.datePublished,
    image: post.imageUrl,
    author: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
    },
    publisher: {
      '@type': 'Organization',
      name: '株式会社播磨商事',
      logo: {
        '@type': 'ImageObject',
        url: 'https://harima-shouji.co.jp/logo.png',
      },
    },
  }
}
