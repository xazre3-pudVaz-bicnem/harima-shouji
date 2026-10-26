// 構造化データ（JSON-LD）を出力する。
// `<` を < に置き換え、文字列中の </script> による注入を防ぐ（Next.js 公式ガイドの推奨）。
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
