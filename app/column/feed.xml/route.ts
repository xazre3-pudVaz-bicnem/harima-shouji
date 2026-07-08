import { getAllColumns } from '@/lib/columns'

// コラムのRSS 2.0フィード。/column/feed.xml で配信し、検索エンジンやフィードリーダーの巡回・発見を助ける。
export const dynamic = 'force-static'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function GET() {
  const baseUrl = 'https://harima-shouji.co.jp'
  const items = getAllColumns().slice(0, 50)

  const body = items
    .map((c) => {
      const url = `${baseUrl}/column/${c.slug}`
      const pub = new Date(c.date).toUTCString()
      return `    <item>
      <title>${esc(c.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${esc(c.categoryLabel)}</category>
      <pubDate>${pub}</pubDate>
      <description>${esc(c.description)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>株式会社播磨商事 コラム</title>
    <link>${baseUrl}/column</link>
    <atom:link href="${baseUrl}/column/feed.xml" rel="self" type="application/rss+xml" />
    <description>FC本部・多店舗展開企業向けの店舗内装工事・原状回復工事に関する専門コラム</description>
    <language>ja</language>
${body}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
