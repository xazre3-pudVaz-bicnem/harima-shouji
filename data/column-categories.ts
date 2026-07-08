// 専門コラムのカテゴリ体系。
// 10カテゴリを正規化し、各記事の category 文字列（frontmatter / data/columns.ts）を
// カテゴリslugへマッピングする。/column/category/[category] のルーティングに使う。

export type ColumnCategory = {
  slug: string
  label: string // frontmatter に入れる正式ラベル
  short: string // カテゴリチップ等の短い表示
  description: string
  image: string
  // このカテゴリに含める、別表記のカテゴリ文字列（旧・自動生成記事との整合用）
  aliases: string[]
}

export const columnCategories: ColumnCategory[] = [
  {
    slug: 'fc-headquarters',
    label: 'FC本部向け店舗工事',
    short: 'FC本部向け',
    description: 'フランチャイズ本部が加盟店の店舗内装工事・原状回復工事を管理するうえでの考え方と実務ポイントをまとめています。',
    image: '/fc-01.png',
    aliases: ['フランチャイズ本部向け', 'FC本部'],
  },
  {
    slug: 'franchise-interior',
    label: 'フランチャイズ内装工事',
    short: 'FC内装',
    description: 'フランチャイズ・チェーン店の内装工事でブランド仕様を統一し、品質をそろえるための知識を扱います。',
    image: '/fc-03.png',
    aliases: ['フランチャイズ'],
  },
  {
    slug: 'multi-store',
    label: '多店舗展開の施工管理',
    short: '多店舗管理',
    description: '複数店舗を展開する企業が、出店・改装・退店の施工を一括管理するための実務をまとめています。',
    image: '/store-07.png',
    aliases: ['多店舗展開'],
  },
  {
    slug: 'store-development',
    label: '店舗開発・新規出店',
    short: '店舗開発',
    description: '店舗開発担当者が新規出店の内装工事を進めるうえで、事前に整理すべき項目や進め方を解説します。',
    image: '/store-03.png',
    aliases: ['店舗内装', '店舗開発'],
  },
  {
    slug: 'renovation',
    label: '店舗改装・リニューアル',
    short: '改装',
    description: '既存店舗の改装・リニューアル工事で、営業への影響を抑えながら進めるための考え方を扱います。',
    image: '/store-02.png',
    aliases: ['改装・リニューアル'],
  },
  {
    slug: 'restoration',
    label: '原状回復・退店対応',
    short: '原状回復',
    description: '店舗の退去・閉店に伴う原状回復工事の進め方、費用、管理会社対応などの実務をまとめています。',
    image: '/resto-03.png',
    aliases: ['退店・閉店', '原状回復', '退去・閉店'],
  },
  {
    slug: 'cost-reduction',
    label: '店舗工事のコスト削減',
    short: 'コスト削減',
    description: '店舗内装工事・原状回復工事の費用を適正化し、複数店舗のコストを平準化するための知識を扱います。',
    image: '/fc-02.png',
    aliases: ['工事費用', '費用・業者選び', '費用・コスト'],
  },
  {
    slug: 'industry',
    label: '業種別内装工事',
    short: '業種別',
    description: '飲食店・美容室・サロン・ジム・クリニック・アパレルなど、業種ごとの内装工事の要点をまとめています。',
    image: '/rest-01.png',
    aliases: ['業種別内装'],
  },
  {
    slug: 'area',
    label: 'エリア別店舗工事',
    short: 'エリア別',
    description: '東京・埼玉・千葉・神奈川・静岡・大阪・兵庫など、エリアごとの店舗工事・原状回復の注意点を解説します。',
    image: '/store-05.png',
    aliases: ['エリア'],
  },
  {
    slug: 'know-how',
    label: '本部担当者向けノウハウ',
    short: 'ノウハウ',
    description: '施工品質の統一、工程管理、業者管理の一本化など、本部担当者の実務に役立つノウハウを扱います。',
    image: '/store-04.png',
    aliases: ['施工の流れ', 'ノウハウ'],
  },
]

// カテゴリ文字列 → カテゴリslug
const LABEL_TO_SLUG = new Map<string, string>()
for (const c of columnCategories) {
  LABEL_TO_SLUG.set(c.label, c.slug)
  LABEL_TO_SLUG.set(c.short, c.slug)
  for (const a of c.aliases) LABEL_TO_SLUG.set(a, c.slug)
}

export function categorySlugFromLabel(label: string): string | undefined {
  return LABEL_TO_SLUG.get(label.trim())
}

export function getCategory(slug: string): ColumnCategory | undefined {
  return columnCategories.find((c) => c.slug === slug)
}
