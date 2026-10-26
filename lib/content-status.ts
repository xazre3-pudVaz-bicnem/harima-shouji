// 掲載前の下書き（未確認の金額・条件を含む原稿）の扱いを決める。
//
// - 本番ビルド（next build）では下書きを一切出力しない
// - `npm run dev` のとき、または環境変数 SHOW_DRAFTS=true のときだけ、確認用に下書きも表示する
//   （プレビュー環境で確認する場合は SHOW_DRAFTS=true を設定。下書きを含むページは noindex になる）
export const showDrafts = process.env.NODE_ENV === 'development' || process.env.SHOW_DRAFTS === 'true'

/** 原稿中の未確認箇所の目印。例: 【要確認：10坪の施工金額】 */
export const PENDING_MARK = '【要確認'

export function hasPendingMark(...texts: (string | undefined)[]): boolean {
  return texts.some((t) => t?.includes(PENDING_MARK))
}
