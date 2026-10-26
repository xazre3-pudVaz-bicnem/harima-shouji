import type { QaItem } from './types'

// 費用・業者選び（10問）
// home: 'start' の質問は、修正指示書の /start 原稿（2026-10-21）をそのまま使っている。
export const costQa: QaItem[] = [
  {
    slug: 'who-to-consult',
    question: '内装は誰に相談すればいい？',
    answer:
      '店舗内装を専門にする内装会社に直接相談するのが、費用もやり取りもいちばん少なく済みます。住宅のリフォーム会社とは、保健所や消防の届出、看板、設備容量の確認で差が出ます。',
    home: 'start',
    status: 'published',
    updatedAt: '2026-10-21',
  },
  {
    slug: 'cost-per-tsubo',
    question: '店舗内装の費用は、坪あたりいくらが目安ですか？',
    answer:
      '播磨商事の施工例では、坪あたり【要確認：○○万〜○○万円（税込・税別）】が目安です。業種や物件の状態（居抜き・スケルトン）で幅があるため、業種別の目安は費用の表をご覧ください。',
    home: 'price',
    status: 'draft',
    needs: ['坪単価の幅（居抜き・スケルトン別）', '税込・税別の別'],
  },
  {
    slug: 'no-image-yet',
    question: '内装のイメージが決まっていなくても大丈夫？',
    answer: '大丈夫です。予算・業種・坪数を伺えば、その範囲でできる内装を提案します。',
    home: 'start',
    status: 'published',
    updatedAt: '2026-10-21',
  },
  {
    slug: 'compare-estimates',
    question: '見積もりはどこを見て比べる？',
    answer: '「一式」でまとめられていないか、設備工事と解体費が入っているか、管理費の割合を確認します。',
    links: [{ label: '内装工事見積書の内訳の読み方', href: '/column/estimate-breakdown-reading' }],
    home: 'start',
    status: 'published',
    updatedAt: '2026-10-21',
  },
  {
    slug: 'over-budget',
    question: '予算をオーバーしたときは？',
    answer: '居抜きの活用、床や壁の仕上げのグレード調整、工事を分けて実施する、の3つで調整します。',
    links: [{ label: '店舗内装工事の費用を抑えるために確認すべきこと', href: '/column/reduce-interior-cost' }],
    home: 'start',
    status: 'published',
    updatedAt: '2026-10-21',
  },
  {
    slug: 'small-work',
    question: '壁紙や床だけの小さな工事も頼めますか？',
    answer:
      'はい。壁紙（クロス）の張替えだけのご依頼も承っています。部分補修から店舗全体の張替えまで、規模に合わせて対応します。【要確認：床だけの工事の可否、最小の工事規模・最低料金の有無】',
    status: 'draft',
    needs: ['床だけの工事の対応可否', '最小の工事規模・最低料金の有無', '費用の目安（例：10坪の壁紙・床の張り替え）'],
  },
  {
    slug: 'avoid-extra-cost',
    question: '後から追加料金が出ないようにするには？',
    answer: '契約前に「工事範囲」「追加工事の判断基準」を書面で取り決めます。',
    links: [{ label: '追加・変更工事の進め方と費用管理', href: '/column/change-order' }],
    home: 'start',
    status: 'published',
    updatedAt: '2026-10-21',
  },
  {
    slug: 'flow',
    question: '相談から開業までの流れは？',
    answer:
      'お問い合わせ → 物件の内見同行（契約前の場合）→ 現地調査 → お見積もり → 施工・現場管理 → 完了・引き渡し、の順に進みます。',
    facts: [
      { label: '1. お問い合わせ', value: '【要確認：日数】' },
      { label: '2. 物件の内見同行（契約前の場合）', value: '【要確認：日数】' },
      { label: '3. 現地調査', value: '【要確認：日数】' },
      { label: '4. お見積もり', value: '【要確認：日数】' },
      { label: '5. 施工・現場管理', value: '【要確認：日数】' },
      { label: '6. 完了・引き渡し', value: '【要確認：日数】' },
    ],
    home: 'start',
    status: 'draft',
    needs: ['各段階の実際の日数'],
  },
  {
    slug: 'lead-time',
    question: '相談から開業まで、どのくらいの期間がかかりますか？',
    answer:
      '10坪前後の店舗で、ご相談から開業まで【要確認：約○か月】が目安です。物件の契約時期や、ビルへの工事申請の期間によって前後します。',
    home: 'start',
    status: 'draft',
    needs: ['相談から開業までの期間の目安（業種・坪数別）'],
  },
  {
    slug: 'signage',
    question: '看板もまとめて頼めますか？',
    answer: '【要確認：看板工事に対応しているか】',
    status: 'draft',
    needs: ['看板工事に対応しているか（自社施工／協力会社）', '対応できる看板の種類（ファサード・袖看板・ウィンドウサインなど）'],
  },
]
