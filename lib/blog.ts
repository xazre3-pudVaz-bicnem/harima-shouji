import fs from 'fs'
import path from 'path'

// content/blog/ 配下のMarkdown記事（Claude APIによる自動生成コラム）を読み込むユーティリティ。
// 外部依存なし：frontmatterパーサーと、生成記事の書式に限定したMarkdown→HTML変換を内蔵する。

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  category: string
  tags: string[]
  image: string
  topic?: string
  html: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// カテゴリごとのデフォルトカバー画像（frontmatterにimageが無い場合のフォールバック）
const CATEGORY_IMAGES: Record<string, string> = {
  店舗内装: '/store-01.png',
  原状回復: '/resto-03.png',
  フランチャイズ: '/fc-01.png',
  業種別内装: '/rest-01.png',
  エリア: '/store-05.png',
  '費用・業者選び': '/fc-02.png',
  施工の流れ: '/store-04.png',
}

const DEFAULT_IMAGE = '/store-01.png'

/* ———— frontmatter ———— */

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    // クオートを外す
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2] }
}

function parseTags(value: string | undefined): string[] {
  if (!value) return []
  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((t) => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

/* ———— markdown → HTML（生成記事の書式に限定） ———— */

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function inline(s: string): string {
  let out = escapeHtml(s)
  // 太字
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  // リンク（サイト内・外部とも）
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text, href) => {
    const safeHref = String(href).startsWith('/') || String(href).startsWith('https://') || String(href).startsWith('http://')
      ? href
      : '#'
    return `<a href="${safeHref}">${text}</a>`
  })
  return out
}

export function markdownToHtml(md: string): string {
  const lines = md.split(/\r?\n/)
  const html: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${paragraph.map(inline).join('<br />')}</p>`)
      paragraph = []
    }
  }
  const flushList = () => {
    if (listType) {
      html.push(`</${listType}>`)
      listType = null
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.trim() === '') {
      flushParagraph()
      flushList()
      continue
    }

    const h3 = line.match(/^###\s+(.+)$/)
    const h2 = line.match(/^##\s+(.+)$/)
    const h1 = line.match(/^#\s+(.+)$/)
    const ul = line.match(/^[-*]\s+(.+)$/)
    const ol = line.match(/^\d+[.)]\s+(.+)$/)

    if (h3) {
      flushParagraph(); flushList()
      html.push(`<h3>${inline(h3[1])}</h3>`)
    } else if (h2) {
      flushParagraph(); flushList()
      html.push(`<h2>${inline(h2[1])}</h2>`)
    } else if (h1) {
      // 本文中のh1はh2に降格（ページのh1はタイトルが担う）
      flushParagraph(); flushList()
      html.push(`<h2>${inline(h1[1])}</h2>`)
    } else if (ul) {
      flushParagraph()
      if (listType !== 'ul') { flushList(); html.push('<ul>'); listType = 'ul' }
      html.push(`<li>${inline(ul[1])}</li>`)
    } else if (ol) {
      flushParagraph()
      if (listType !== 'ol') { flushList(); html.push('<ol>'); listType = 'ol' }
      html.push(`<li>${inline(ol[1])}</li>`)
    } else {
      flushList()
      paragraph.push(line)
    }
  }
  flushParagraph()
  flushList()

  return html.join('\n')
}

/* ———— 読み込みAPI ———— */

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts: BlogPost[] = []

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, body } = parseFrontmatter(raw)
      const slug = data.slug || file.replace(/\.md$/, '')
      if (!data.title || !slug) continue

      posts.push({
        slug,
        title: data.title,
        description: data.description || '',
        date: data.date || '1970-01-01',
        category: data.category || 'コラム',
        tags: parseTags(data.tags),
        image: data.image || CATEGORY_IMAGES[data.category || ''] || DEFAULT_IMAGE,
        topic: data.topic,
        html: markdownToHtml(body),
      })
    } catch {
      // 壊れたファイルはスキップ（ビルドを止めない）
      continue
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug)
}
