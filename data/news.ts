export type NewsCategory = 'news' | 'media' | 'works' | 'company'

export type NewsData = {
  slug: string
  title: string
  category: NewsCategory
  date: string // YYYY-MM-DD
  excerpt: string
  body: string
}

export const categoryLabels: Record<NewsCategory, string> = {
  news: 'お知らせ',
  media: 'メディア掲載',
  works: '施工情報',
  company: '採用・会社情報',
}

export const news: NewsData[] = [
  {
    slug: 'website-launch',
    category: 'company',
    date: '2026-07-01',
    title: 'ウェブサイトをリニューアルいたしました',
    excerpt:
      'このたび、株式会社播磨商事の公式ウェブサイトをリニューアルいたしました。サービス内容や実績をより分かりやすくご覧いただけるよう、デザインと構成を全面的に刷新しております。',
    body: 'このたび、株式会社播磨商事の公式ウェブサイトをリニューアルいたしました。\n\nこれまで以上にサービス内容や施工実績をわかりやすくお伝えできるよう、デザインと情報構成を全面的に見直しております。店舗内装工事・原状回復工事・多店舗向けサービスといった各事業のご紹介ページも順次充実させてまいります。\n\nFC本部・多店舗展開企業の担当者様にとって、施工パートナー選びに役立つ情報をお届けできるよう努めてまいります。引き続きどうぞよろしくお願いいたします。\n\nご不明な点やご相談がございましたら、お問い合わせページよりお気軽にご連絡ください。',
  },
  {
    slug: 'works-coming-soon',
    category: 'works',
    date: '2026-07-01',
    title: '施工実績ページを準備中です',
    excerpt:
      '現在、施工実績ページを鋭意制作中です。これまでに手がけた店舗内装工事・原状回復工事などの事例を順次掲載してまいります。',
    body: '現在、施工実績ページを鋭意制作中です。\n\nこれまでに携わった店舗内装工事・原状回復工事・改装工事などの施工事例を、写真や工事概要とあわせて順次公開してまいります。FC本部様・多店舗展開企業様の担当者の方に、実際の施工品質や対応範囲をご確認いただける内容を予定しております。\n\n公開まで今しばらくお待ちください。施工に関するご相談は、公開前でもお問い合わせページよりお気軽にお申し付けください。',
  },
  {
    slug: 'media-info',
    category: 'media',
    date: '2026-07-01',
    title: 'メディア掲載情報を順次更新いたします',
    excerpt:
      '播磨商事のメディア掲載・取材実績については、確認でき次第こちらのページにて随時お知らせいたします。現時点では確定した情報はございません。',
    body: '播磨商事のメディア掲載・取材実績については、確認でき次第こちらのページにて随時お知らせいたします。\n\n現時点では確定・公開済みのメディア掲載情報はございません。今後、雑誌・ウェブメディア・業界誌等への掲載が決まりましたら、本ページにて速やかにご案内いたします。\n\n取材・掲載に関するお問い合わせは、お問い合わせページよりご連絡ください。',
  },
]

export function getNews(slug: string): NewsData | undefined {
  return news.find((n) => n.slug === slug)
}

export function getNewsByCategory(category: NewsCategory): NewsData[] {
  return news.filter((n) => n.category === category)
}
