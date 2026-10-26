export type QaCategorySlug = 'salon' | 'gym-pilates' | 'cost' | 'fc-multi-store' | 'restoration'

/**
 * 回答を掲載するページ。同じ回答を複数ページに載せないため、1問につき1ページだけを指定する。
 * - 'category' : 分野別ページ（/faq/[category]）
 * - 'start'    : 初めて店舗を出店する方へ（/start）
 * - 'price'    : 店舗内装の費用の目安（/price）
 */
export type QaHome = 'category' | 'start' | 'price'

export type QaFact = { label: string; value: string }
export type QaSection = { heading: string; body: string[] }
export type QaLink = { label: string; href: string }

export type QaItem = {
  /** URL・ページ内リンクに使う識別子（英小文字とハイフン）。公開後は変えない */
  slug: string
  /** 見出し（質問形式） */
  question: string
  /** 見出しの直後に置く結論（1〜2文）。FAQPage の構造化データにもこの文を使う */
  answer: string
  /** 確認済みの施工金額・坪数・工期・工事範囲など */
  facts?: QaFact[]
  /** 個別の解説ページ（/faq/[category]/[slug]）を作る場合の本文 */
  detail?: QaSection[]
  /** 回答の最後に置く「播磨商事へ依頼できること」。未指定なら分野の既定文 */
  cta?: string
  /** 参考リンク（コラム・サービスページなど） */
  links?: QaLink[]
  /** 関連する施工事例（data/works.ts の slug） */
  relatedWorks?: string[]
  /** 回答を掲載するページ。未指定は 'category' */
  home?: QaHome
  /** 'published' だけが本番に表示される。【要確認】が残っている間は 'draft' のままにする */
  status: 'draft' | 'published'
  /** 下書きのとき：掲載に必要な確認事項 */
  needs?: string[]
  /** 内容を最後に確認した日（YYYY-MM-DD） */
  updatedAt?: string
}

export type QaCategory = {
  slug: QaCategorySlug
  /** 短い名称（例: 'サロン'） */
  name: string
  /** 分野別ページの見出し */
  title: string
  description: string
  lead: string
  image: string
  /** 分野の既定の「播磨商事へ依頼できること」 */
  cta: string
  related: QaLink[]
}

/** /faq の「基本的なご質問」 */
export type BasicQa = {
  q: string
  a: string
  /**
   * 分野別の質問と内容が重なる場合、その質問（'category/slug'）を指定する。
   * 指定先が公開されたら、重複を避けるためこちらは自動的に非表示になる。
   */
  supersededBy?: string
}
