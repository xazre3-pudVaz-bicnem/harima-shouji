/**
 * 毎日1記事のコラムをClaude APIで自動生成し、content/blog/ にMarkdownで保存する。
 *
 * - デフォルトモデル: claude-haiku-4-5-20251001（コスト重視）
 * - 環境変数 ANTHROPIC_MODEL があればそちらを優先
 * - 必要なSecret: ANTHROPIC_API_KEY のみ
 * - 実行: npx tsx scripts/generate-daily-post.ts
 */
import fs from 'fs'
import path from 'path'

/* ———————————— サイト設定 ———————————— */

const SITE_NAME = '株式会社播磨商事'
const BASE_URL = 'https://www.harima-shouji.co.jp'
const AREA_KEYWORD = '東京・埼玉・千葉・神奈川・静岡・大阪・兵庫'
const BUSINESS_TYPE = '店舗内装工事・原状回復工事・フランチャイズ内装'
const MAIN_KEYWORD = '店舗内装工事 フランチャイズ'

const DEFAULT_MODEL = 'claude-haiku-4-5-20251001'
const MODEL = process.env.ANTHROPIC_MODEL?.trim() || DEFAULT_MODEL

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// 実在する内部リンク先（この中から2〜3本を本文に自然に入れる）
const INTERNAL_LINKS = [
  { href: '/service/shop-interior', label: '店舗内装工事サービス' },
  { href: '/service/restoration', label: '原状回復工事サービス' },
  { href: '/franchise', label: 'FC本部向けサービス' },
  { href: '/works', label: '施工実績' },
  { href: '/industry', label: '業種別対応一覧' },
  { href: '/company', label: '会社概要' },
  { href: '/contact', label: 'お問い合わせ' },
]

/* ———————————— トピックプール ———————————— */

type Topic = {
  theme: string
  slugBase: string
  category: string
  tags: string[]
  image: string
}

const TOPICS: Topic[] = [
  { theme: '店舗内装工事', slugBase: 'shop-interior-basics', category: '店舗内装', tags: ['店舗内装工事', '店舗工事'], image: '/store-01.png' },
  { theme: 'フランチャイズ内装工事', slugBase: 'franchise-interior', category: 'フランチャイズ', tags: ['フランチャイズ 内装工事', 'FC 内装'], image: '/fc-01.png' },
  { theme: 'フランチャイズ本部 内装業者', slugBase: 'fc-headquarters-contractor', category: 'フランチャイズ', tags: ['FC本部 内装業者', 'フランチャイズ 施工管理'], image: '/fc-03.png' },
  { theme: '店舗改装工事', slugBase: 'store-renovation', category: '店舗内装', tags: ['店舗改装工事', 'リニューアル工事'], image: '/store-03.png' },
  { theme: '店舗原状回復', slugBase: 'store-restoration', category: '原状回復', tags: ['店舗 原状回復', '原状回復工事'], image: '/resto-01.png' },
  { theme: 'テナント原状回復', slugBase: 'tenant-restoration', category: '原状回復', tags: ['テナント 原状回復', '退去 工事'], image: '/resto-03.png' },
  { theme: '飲食店 内装工事', slugBase: 'restaurant-interior', category: '業種別内装', tags: ['飲食店 内装工事', '厨房 工事'], image: '/rest-01.png' },
  { theme: '美容室 内装工事', slugBase: 'beauty-salon-interior', category: '業種別内装', tags: ['美容室 内装工事', 'サロン 開業'], image: '/beauty-06.png' },
  { theme: 'サロン 内装工事', slugBase: 'salon-interior', category: '業種別内装', tags: ['サロン 内装工事', 'エステ 内装'], image: '/salon-03.png' },
  { theme: 'クリニック 内装工事', slugBase: 'clinic-interior', category: '業種別内装', tags: ['クリニック 内装工事', '医院 内装'], image: '/clinic-09.png' },
  { theme: 'ジム 内装工事', slugBase: 'gym-interior', category: '業種別内装', tags: ['ジム 内装工事', 'フィットネス 内装'], image: '/gym-01.png' },
  { theme: 'アパレル 店舗内装', slugBase: 'apparel-interior', category: '業種別内装', tags: ['アパレル 店舗内装', '物販店 内装'], image: '/retail-01.png' },
  { theme: '小売店 内装工事', slugBase: 'retail-interior', category: '業種別内装', tags: ['小売店 内装工事', '売場 づくり'], image: '/retail-02.png' },
  { theme: '店舗レイアウト設計', slugBase: 'store-layout-design', category: '店舗内装', tags: ['店舗レイアウト', '動線設計'], image: '/store-02.png' },
  { theme: '店舗工事の流れ', slugBase: 'construction-flow', category: '施工の流れ', tags: ['店舗工事 流れ', '内装工事 工程'], image: '/store-04.png' },
  { theme: '店舗内装の見積もり', slugBase: 'interior-estimate', category: '費用・業者選び', tags: ['内装工事 見積もり', '店舗工事 費用'], image: '/store-06.png' },
  { theme: 'FC展開時の内装標準化', slugBase: 'fc-standardization', category: 'フランチャイズ', tags: ['FC 内装 標準化', 'ブランド統一'], image: '/fc-04.png' },
  { theme: '多店舗展開 内装工事', slugBase: 'multi-store-interior', category: 'フランチャイズ', tags: ['多店舗展開 内装工事', '施工管理'], image: '/store-07.png' },
  { theme: '関東 店舗内装工事', slugBase: 'kanto-shop-interior', category: 'エリア', tags: ['関東 店舗内装工事', '首都圏 店舗工事'], image: '/store-05.png' },
  { theme: '東京 店舗内装工事', slugBase: 'tokyo-shop-interior', category: 'エリア', tags: ['東京 店舗内装工事', '東京 店舗工事'], image: '/rest-05.png' },
  { theme: '埼玉 店舗内装工事', slugBase: 'saitama-shop-interior', category: 'エリア', tags: ['埼玉 店舗内装工事', '埼玉 店舗工事'], image: '/cafe-01.png' },
  { theme: '千葉 店舗内装工事', slugBase: 'chiba-shop-interior', category: 'エリア', tags: ['千葉 店舗内装工事', '千葉 店舗工事'], image: '/rest-04.png' },
  { theme: '神奈川 店舗内装工事', slugBase: 'kanagawa-shop-interior', category: 'エリア', tags: ['神奈川 店舗内装工事', '横浜 店舗工事'], image: '/beauty-07.png' },
  { theme: '静岡 店舗内装工事', slugBase: 'shizuoka-shop-interior', category: 'エリア', tags: ['静岡 店舗内装工事', '静岡 店舗工事'], image: '/rest-02.png' },
  { theme: '大阪 店舗内装工事', slugBase: 'osaka-shop-interior', category: 'エリア', tags: ['大阪 店舗内装工事', '大阪 店舗工事'], image: '/rest-06.png' },
  { theme: '兵庫 店舗内装工事', slugBase: 'hyogo-shop-interior', category: 'エリア', tags: ['兵庫 店舗内装工事', '神戸 店舗工事'], image: '/beauty-01.png' },
  { theme: '居抜き物件の内装工事', slugBase: 'inuki-interior', category: '店舗内装', tags: ['居抜き 内装工事', '居抜き物件'], image: '/cafe-03.png' },
  { theme: 'スケルトン物件の内装工事', slugBase: 'skeleton-interior', category: '店舗内装', tags: ['スケルトン 内装工事', 'スケルトン物件'], image: '/resto-05.png' },
  { theme: '店舗退去時の原状回復', slugBase: 'store-exit-restoration', category: '原状回復', tags: ['店舗退去 原状回復', '退去立会い'], image: '/resto-06.png' },
  { theme: '店舗内装で失敗しない業者選び', slugBase: 'contractor-selection', category: '費用・業者選び', tags: ['内装業者 選び方', '店舗工事 業者'], image: '/fc-02.png' },
  { theme: 'フランチャイズ本部が内装会社を選ぶポイント', slugBase: 'fc-contractor-points', category: 'フランチャイズ', tags: ['FC本部 内装会社', '施工パートナー'], image: '/fc-05.png' },
]

/* ———————————— 既存記事の把握（重複回避） ———————————— */

type ExistingPost = { topic?: string; title?: string; date?: string; slug?: string }

function readExistingPosts(): ExistingPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const posts: ExistingPost[] = []
  for (const file of fs.readdirSync(BLOG_DIR)) {
    if (!file.endsWith('.md')) continue
    try {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
      if (!fm) continue
      const get = (key: string) => fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '')
      posts.push({ topic: get('topic'), title: get('title'), date: get('date'), slug: get('slug') })
    } catch {
      continue
    }
  }
  return posts
}

// 既存の静的コラム（data/columns.ts）のタイトル。重複した記事を作らないための参考情報。
const STATIC_COLUMN_TITLES = [
  'FC本部が店舗内装工事を一括管理すべき理由',
  '多店舗展開企業が原状回復工事で注意すべきポイント',
  '店舗内装工事の費用相場と抑え方',
  '原状回復費用の正しい知識',
  'フランチャイズ出店の内装工事スケジュール',
  '閉店・退店時の原状回復の進め方',
]

function pickTopic(existing: ExistingPost[]): { topic: Topic; previousTitles: string[] } {
  const countByTopic = new Map<string, { count: number; latest: string; titles: string[] }>()
  for (const t of TOPICS) countByTopic.set(t.theme, { count: 0, latest: '', titles: [] })
  for (const p of existing) {
    if (!p.topic) continue
    const entry = countByTopic.get(p.topic)
    if (!entry) continue
    entry.count++
    if (p.date && p.date > entry.latest) entry.latest = p.date
    if (p.title) entry.titles.push(p.title)
  }

  // 未使用トピックを優先（プール順）。全て使用済みなら「本数が最少 → 最終投稿が最も古い」順。
  const unused = TOPICS.filter((t) => countByTopic.get(t.theme)!.count === 0)
  if (unused.length > 0) {
    return { topic: unused[0], previousTitles: [] }
  }
  const sorted = [...TOPICS].sort((a, b) => {
    const ea = countByTopic.get(a.theme)!
    const eb = countByTopic.get(b.theme)!
    if (ea.count !== eb.count) return ea.count - eb.count
    return ea.latest < eb.latest ? -1 : 1
  })
  const topic = sorted[0]
  return { topic, previousTitles: countByTopic.get(topic.theme)!.titles }
}

/* ———————————— Claude API ———————————— */

async function callClaude(apiKey: string, topic: Topic, previousTitles: string[]): Promise<string> {
  const linkList = INTERNAL_LINKS.map((l) => `- [${l.label}](${l.href})`).join('\n')
  const avoidTitles = [...STATIC_COLUMN_TITLES, ...previousTitles]

  const system = `あなたは${SITE_NAME}（${BUSINESS_TYPE}を手がける施工会社、対応エリア: ${AREA_KEYWORD}）のオウンドメディア編集者兼ライターです。店舗施工の実務に詳しく、FC本部・多店舗展開企業の担当者や出店予定のオーナーに向けた、検索流入を狙う専門コラムを書きます。

執筆ルール（厳守）:
- 日本語。本文は2,000〜3,000文字程度
- 見出しはMarkdownの ## と ### のみを使う（# は使わない）。表は使わず、箇条書き（- または 1.）を使う
- 構成: 導入文（見出しなし・3〜4文）→ ##見出しの本文セクション3〜5個（必要に応じて###の小見出し）→ 最後に「## まとめ」
- 「いかがでしたか」「〜ではないでしょうか」の乱用など、AIっぽい定型文は禁止
- 根拠のないNo.1表現・「必ず」「最安」「最短」「地域一番」などの断定は禁止。過剰な煽りも禁止
- 工期・金額・対応可否を断定しすぎない。目安を示す場合も「物件条件によって変わる」「現地調査で確認が必要」と添える
- 建築基準法・消防法・保健所・用途変更などの法令に関しては、不正確な断定をせず「自治体・管轄によって運用が異なるため確認が必要」といった安全な表現にする
- 地域名（${AREA_KEYWORD}のいずれか）、店舗内装工事、原状回復、フランチャイズ内装、といった語を不自然にならない範囲で本文に含める
- 記事の途中または末尾で、次の内部リンクのうち文脈に合う2〜3本をMarkdownリンクとしてそのままのURLで自然に挿入する:
${linkList}
- ${SITE_NAME}のサービス実態（店舗内装工事と原状回復工事の2事業、FC・多店舗の施工管理一括対応、現地調査・見積無料）と矛盾する記述をしない
- 会社を紹介する場合は控えめに。宣伝より読者の実務に役立つ情報を優先する

出力形式（この形式以外の文字列を一切含めない）:
TITLE: 記事タイトル（32文字前後、検索キーワードを含む）
DESCRIPTION: メタディスクリプション（100〜120文字）
TAGS: タグ1, タグ2, タグ3
---
（ここから本文Markdown）`

  const user = `テーマ「${topic.theme}」で、${MAIN_KEYWORD} 関連の読者に役立つコラム記事を1本書いてください。カテゴリは「${topic.category}」です。
${avoidTitles.length > 0 ? `\n以下の既存記事とタイトル・切り口が重複しないようにしてください:\n${avoidTitles.map((t) => `- ${t}`).join('\n')}` : ''}`

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system,
      messages: [{ role: 'user', content: user }],
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Claude API error: ${res.status} ${body.slice(0, 500)}`)
  }

  const json = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
  const text = json.content?.filter((c) => c.type === 'text').map((c) => c.text).join('') ?? ''
  if (!text) throw new Error('Claude API returned empty content')
  return text
}

/* ———————————— パース・保存 ———————————— */

function parseArticle(raw: string): { title: string; description: string; tags: string[]; body: string } {
  const title = raw.match(/^TITLE:\s*(.+)$/m)?.[1]?.trim()
  const description = raw.match(/^DESCRIPTION:\s*(.+)$/m)?.[1]?.trim()
  const tagsLine = raw.match(/^TAGS:\s*(.+)$/m)?.[1]?.trim()
  const bodyIdx = raw.indexOf('\n---')
  const body = bodyIdx !== -1 ? raw.slice(bodyIdx + 4).replace(/^\r?\n/, '').trim() : ''

  if (!title) throw new Error('TITLE が出力に含まれていません')
  if (!description) throw new Error('DESCRIPTION が出力に含まれていません')
  if (body.length < 1200) throw new Error(`本文が短すぎます（${body.length}文字）`)
  if (!/^##\s/m.test(body)) throw new Error('本文に ## 見出しがありません')

  const tags = (tagsLine ?? '').split(',').map((t) => t.trim()).filter(Boolean)
  return { title, description, tags, body }
}

function todayJst(): { iso: string; compact: string } {
  const now = new Date(Date.now() + 9 * 60 * 60 * 1000) // JST
  const iso = now.toISOString().slice(0, 10)
  return { iso, compact: iso.replaceAll('-', '') }
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY が設定されていません')
    process.exit(1)
  }

  console.log(`[daily-blog] model: ${MODEL}`)

  const existing = readExistingPosts()
  const { topic, previousTitles } = pickTopic(existing)
  console.log(`[daily-blog] topic: ${topic.theme} (category: ${topic.category})`)

  const { iso, compact } = todayJst()
  const slug = `${topic.slugBase}-${compact}`

  if (existing.some((p) => p.slug === slug)) {
    console.log(`[daily-blog] 本日分の記事は既に存在します: ${slug}.md — 何もせず終了します`)
    return
  }

  // API呼び出し（1回リトライ）
  let raw: string
  try {
    raw = await callClaude(apiKey, topic, previousTitles)
  } catch (e) {
    console.warn(`[daily-blog] 1回目の生成に失敗、リトライします: ${e}`)
    await new Promise((r) => setTimeout(r, 5000))
    raw = await callClaude(apiKey, topic, previousTitles)
  }

  const { title, description, tags, body } = parseArticle(raw)
  const allTags = [...new Set([...tags, ...topic.tags])].slice(0, 6)

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '”')}"`,
    `slug: "${slug}"`,
    `description: "${description.replace(/"/g, '”')}"`,
    `date: "${iso}"`,
    `category: "${topic.category}"`,
    `tags: [${allTags.map((t) => `"${t.replace(/"/g, '”')}"`).join(', ')}]`,
    `image: "${topic.image}"`,
    `topic: "${topic.theme}"`,
    '---',
    '',
  ].join('\n')

  fs.mkdirSync(BLOG_DIR, { recursive: true })
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  fs.writeFileSync(filePath, frontmatter + body + '\n', 'utf8')

  console.log(`[daily-blog] generated: content/blog/${slug}.md`)
  console.log(`[daily-blog] title: ${title}`)
  console.log(`[daily-blog] length: ${body.length} chars`)
  console.log(`[daily-blog] url: ${BASE_URL}/column/${slug}`)
}

main().catch((e) => {
  console.error('[daily-blog] FAILED:', e)
  process.exit(1)
})
