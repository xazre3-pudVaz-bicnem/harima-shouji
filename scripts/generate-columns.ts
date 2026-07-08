/**
 * data/column-topics.ts のトピックを Claude Haiku で一括生成し、
 * content/blog/<slug>.md として保存する専門コラムの大量生成スクリプト。
 *
 * 使い方（要 ANTHROPIC_API_KEY）:
 *   npx tsx scripts/generate-columns.ts                 未生成の全トピックを生成
 *   npx tsx scripts/generate-columns.ts --limit 10      先頭から10本だけ生成
 *   npx tsx scripts/generate-columns.ts --slug <slug>   特定slugのみ生成
 *
 * - デフォルトモデル: claude-haiku-4-5-20251001（ANTHROPIC_MODEL で上書き可）
 * - 既に content/blog/<slug>.md がある記事はスキップ
 */
import fs from 'fs'
import path from 'path'
import { columnTopics, STANDARD_OUTLINE, type ColumnTopic } from '../data/column-topics'

const DEFAULT_MODEL = 'claude-haiku-4-5-20251001'
const MODEL = process.env.ANTHROPIC_MODEL?.trim() || DEFAULT_MODEL
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

const AREA_KEYWORD = '東京・埼玉・千葉・神奈川・静岡・大阪・兵庫'

function buildPrompt(topic: ColumnTopic): { system: string; user: string } {
  const outline = topic.outline ?? STANDARD_OUTLINE
  const system = `あなたは、フランチャイズ本部・多店舗展開企業向けの店舗内装工事・原状回復工事に詳しい専門ライターです。株式会社播磨商事（対応エリア: ${AREA_KEYWORD}、事業: 店舗内装工事・原状回復工事、FC本部・多店舗の施工管理を一括対応、現地調査・見積無料）のサイトに掲載するSEOコラムを書きます。

厳守ルール:
- 日本語。本文1,500〜2,500文字
- Markdownの ## 見出しのみ（# は使わない）。表は使わず箇条書き（- / 1.）を使う
- 構成: 導入文（見出しなし3〜4文）→ 指定の##セクション → 最後に自然なCTA（1〜2文）
- 営業感を出しすぎない。読者の実務に役立つ情報を優先。過度な煽り禁止
- 根拠のない実績表現（実績多数・No.1・最安・最短）や事実不明な施工実績、実在企業名の使用は禁止
- 「必ず」「絶対」などの断定禁止。工期・金額・対応可否は「物件条件による」「現地調査で確認が必要」に寄せる
- 建築基準法・消防法・保健所・用途変更などの法令は「自治体・管轄によって運用が異なるため確認が必要」といった安全な表現にする
- 「いかがでしたか」などのAIっぽい定型文、同じ語尾の連続を避ける
- 本文に内部リンクを2〜3本、文脈に合うものだけMarkdownリンクで自然に挿入:
  [店舗内装工事](/service/shop-interior) / [原状回復工事](/service/restoration) / [FC本部向けサービス](/franchise) / [お問い合わせ](/contact)
  （業種記事なら該当業種ページ /industry/... 、エリア記事なら /area も可）
- 本文のMarkdownのみ出力（タイトルやフロントマターは出力しない）`

  const user = `記事タイトル: ${topic.title}
狙うキーワード: ${topic.keywords.join(' / ')}
想定読者: FC本部担当者、店舗開発担当者、多店舗展開企業の施設管理担当者

以下の見出し構成で本文を書いてください（見出し文言は自然に調整可）:
${outline.map((h) => `## ${h}`).join('\n')}`

  return { system, user }
}

async function callClaude(apiKey: string, topic: ColumnTopic): Promise<string> {
  const { system, user } = buildPrompt(topic)
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: 4096, system, messages: [{ role: 'user', content: user }] }),
  })
  if (!res.ok) throw new Error(`Claude API error: ${res.status} ${(await res.text()).slice(0, 300)}`)
  const json = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
  const text = json.content?.filter((c) => c.type === 'text').map((c) => c.text).join('') ?? ''
  if (!text || text.length < 800) throw new Error(`生成本文が短すぎます（${text.length}字）`)
  return text.trim()
}

function frontmatter(topic: ColumnTopic, date: string): string {
  return [
    '---',
    `title: "${topic.title.replace(/"/g, '”')}"`,
    `slug: "${topic.slug}"`,
    `description: "${topic.description.replace(/"/g, '”')}"`,
    `date: "${date}"`,
    `category: "${topic.category}"`,
    `tags: [${topic.keywords.map((k) => `"${k.replace(/"/g, '”')}"`).join(', ')}]`,
    `image: "${topic.image}"`,
    '---',
    '',
  ].join('\n')
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('ERROR: ANTHROPIC_API_KEY が設定されていません')
    process.exit(1)
  }
  const args = process.argv.slice(2)
  const limitIdx = args.indexOf('--limit')
  const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity
  const slugIdx = args.indexOf('--slug')
  const onlySlug = slugIdx !== -1 ? args[slugIdx + 1] : undefined

  fs.mkdirSync(BLOG_DIR, { recursive: true })
  const date = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10)

  console.log(`[generate-columns] model: ${MODEL}`)
  let generated = 0
  for (const topic of columnTopics) {
    if (onlySlug && topic.slug !== onlySlug) continue
    if (generated >= limit) break
    const filePath = path.join(BLOG_DIR, `${topic.slug}.md`)
    if (fs.existsSync(filePath)) {
      console.log(`  skip (exists): ${topic.slug}`)
      continue
    }
    try {
      const body = await callClaude(apiKey, topic)
      fs.writeFileSync(filePath, frontmatter(topic, date) + body + '\n', 'utf8')
      generated++
      console.log(`  generated: content/blog/${topic.slug}.md (${body.length}字)`)
    } catch (e) {
      console.error(`  FAILED ${topic.slug}: ${e}`)
    }
  }
  console.log(`[generate-columns] done. generated ${generated} articles.`)
}

main().catch((e) => {
  console.error('[generate-columns] FATAL:', e)
  process.exit(1)
})
