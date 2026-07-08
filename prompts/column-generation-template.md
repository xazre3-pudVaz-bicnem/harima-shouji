# 専門コラム 大量生成ガイド

播磨商事の専門コラム（/column）を、Claude Haiku で低コストに大量生成・追加していくための運用ガイドです。

## 仕組みの全体像

```
data/column-topics.ts          ← 記事の設計データ（title/slug/category/description/keywords/image）
prompts/haiku-column-template.md ← Haikuに渡す本文生成プロンプト
scripts/generate-columns.ts    ← 未生成のトピックをHaikuで一括生成し content/blog/<slug>.md を作成
content/blog/*.md              ← 生成された記事（frontmatter + 本文Markdown）
lib/blog.ts / lib/columns.ts   ← 記事の読み込み・カテゴリ集約
app/column/**                  ← 一覧・カテゴリ・詳細ページ
```

記事は **content/blog/<slug>.md** に保存され、`/column` と `/column/category/[category]` に自動で表示されます。
`data/columns.ts`（手書きの構造化コラム）と併存し、両方が一覧・カテゴリに統合表示されます。

## 100記事・200記事へ増やす手順

1. `data/column-topics.ts` に新しいトピックを追記する
   - `slug`: 英数字とハイフンのみ（重複不可）
   - `category`: `data/column-categories.ts` の `label` と一致させる
   - `title` / `description` / `keywords` / `image` を設定
2. 環境変数 `ANTHROPIC_API_KEY` を設定して生成スクリプトを実行
   ```bash
   ANTHROPIC_API_KEY=xxxxx npx tsx scripts/generate-columns.ts        # 未生成の全トピックを生成
   ANTHROPIC_API_KEY=xxxxx npx tsx scripts/generate-columns.ts --limit 10  # 10本だけ生成
   ANTHROPIC_API_KEY=xxxxx npx tsx scripts/generate-columns.ts --slug tokyo-shop-interior  # 特定slugのみ
   ```
   - モデルは既定で `claude-haiku-4-5-20251001`（`ANTHROPIC_MODEL` で上書き可）
   - 既に `content/blog/<slug>.md` がある記事はスキップ（重複生成しない）
3. `npm run build` でビルド確認 → コミット → Vercel が自動公開

## 記事生成の入力（1記事あたり）

各トピックから、以下がHaikuプロンプトに差し込まれます。

- 記事タイトル（title）
- 狙うキーワード（keywords）
- 想定読者（固定: FC本部・店舗開発・多店舗展開の担当者）
- 記事構成（固定テンプレート: 導入→課題→放置リスク→確認ポイント→相談前整理→サポート→まとめ→CTA）
- 内部リンク候補（店舗内装/原状回復/FC本部/お問い合わせ + 業種・エリアページ）
- 禁止表現・トーン（prompts/haiku-column-template.md 参照）
- 文字数（1,500〜2,500字）

## 品質を保つためのルール

- 1トピック=1テーマ。タイトルと切り口が既存記事と重複しないようにする
- 事実は「播磨商事の事実」の範囲内に限定（実績数・他社名を作らない）
- 法令・費用・工期は断定せず「確認が必要」「現場条件による」の表現に寄せる
- 生成後は数本を目視で確認し、薄い・不自然な記事は再生成する
