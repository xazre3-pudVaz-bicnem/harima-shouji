// 実績件数。集計時点（asOf）と集計対象（scope）が入力され、件数が入っている項目だけを掲載する。
// 掲載場所: トップページ（ABOUT）・施工事例一覧（/works）

export type Achievement = {
  id: string
  label: string
  en: string
  /** 件数。未確認の間は null */
  count: number | null
  unit: string
}

export const achievements = {
  /** 集計時点（例: '2026年9月30日時点'） */
  asOf: '',
  /** 集計対象（例: '2020年4月〜2026年9月に播磨商事が施工した案件。1店舗につき1件として集計'） */
  scope: '',
  items: [
    { id: 'shop-interior', label: '店舗内装', en: 'SHOP INTERIOR', count: null, unit: '件' },
    { id: 'restoration', label: '原状回復', en: 'RESTORATION', count: null, unit: '件' },
  ] as Achievement[],
}

export const publishedAchievements: Achievement[] =
  achievements.asOf && achievements.scope ? achievements.items.filter((a) => a.count !== null) : []

// 件数だけ入っていて集計時点・対象が空のときはビルドを止める（根拠のない数字を出さないため）
if (achievements.items.some((a) => a.count !== null) && (!achievements.asOf || !achievements.scope)) {
  throw new Error('[achievements] 実績件数を掲載するには asOf（集計時点）と scope（集計対象）を入力してください')
}

/** 「2026年9月30日時点／集計対象：…」 */
export const achievementsNote = publishedAchievements.length > 0 ? `${achievements.asOf}／集計対象：${achievements.scope}` : ''
