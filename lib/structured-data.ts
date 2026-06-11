export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社播磨商事',
  url: 'https://harima-shouji.co.jp',
  logo: 'https://harima-shouji.co.jp/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '080-4724-0713',
    contactType: 'customer service',
    availableLanguage: 'Japanese',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '関町南2丁目2-4 山一ビル',
    addressLocality: '練馬区',
    addressRegion: '東京都',
    addressCountry: 'JP',
  },
  email: 'naisou@harima-shouji.co.jp',
  founder: {
    '@type': 'Person',
    name: '播磨 龍樹',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '株式会社播磨商事',
  description:
    'FC本部・多店舗展開企業向けの内装工事・原状回復・クロス張替え・店舗クリーニング・退去立会い代行サービス',
  url: 'https://harima-shouji.co.jp',
  telephone: '080-4724-0713',
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
  priceRange: '要お問い合わせ',
  areaServed: {
    '@type': 'State',
    name: '東京都・関東圏',
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
