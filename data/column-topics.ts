// 専門コラムのトピック・レジストリ。
// - 初期50本の設計データ（scripts/generate-columns.ts / エージェント執筆の入力）
// - 今後100本以上へ増やす際は、このファイルに追記するだけで生成対象になる
//
// 記事本文は content/blog/<slug>.md に保存され、/column および /column/category/[category] に表示される。
// #1「FC本部が店舗内装工事を一括管理すべき理由」は既存の手書きコラム
// （data/columns.ts: franchise-interior-management）が担うため、本レジストリには含めない。

export type ColumnTopic = {
  slug: string
  title: string
  category: string // data/column-categories.ts の label と一致させる
  description: string
  keywords: string[]
  image: string
  // 記事のH2見出し。未指定なら標準テンプレートを使う。
  outline?: string[]
}

// 標準テンプレート（本部担当者の課題起点の構成）
export const STANDARD_OUTLINE = [
  'なぜこの課題が起きるのか',
  '放置すると起きる問題',
  '本部側が確認すべきポイント',
  '施工会社に相談する前に整理すべきこと',
  '播磨商事がサポートできること',
  'まとめ',
]

export const columnTopics: ColumnTopic[] = [
  // ———— フランチャイズ内装工事 / FC本部向け ————
  { slug: 'fc-store-interior-checklist', title: 'フランチャイズ店舗の内装工事で本部が確認すべきこと', category: 'フランチャイズ内装工事', description: 'フランチャイズ店舗の内装工事で、本部が加盟店任せにせず確認しておくべき仕様・品質・工程のポイントを整理します。', keywords: ['フランチャイズ 内装工事', 'FC本部 内装工事', '加盟店 工事'], image: '/fc-03.png' },
  { slug: 'quality-consistency-franchise', title: '加盟店ごとに施工品質がばらつく原因と対策', category: 'FC本部向け店舗工事', description: '加盟店ごとに内装の施工品質がばらつく原因を掘り下げ、本部が品質を統一するための具体的な対策を解説します。', keywords: ['施工品質 統一', 'FC本部 店舗工事', '加盟店 工事'], image: '/fc-04.png' },
  { slug: 'brand-spec-standardization', title: 'チェーン店の内装工事でブランド仕様を統一する方法', category: 'フランチャイズ内装工事', description: 'チェーン店の内装工事で、全店舗のブランド仕様を統一するために本部が整えるべき基準と施工管理の仕組みを解説します。', keywords: ['チェーン店 内装工事', 'ブランド仕様 統一', 'フランチャイズ 店舗工事'], image: '/fc-01.png' },
  { slug: 'choosing-contractor-fc', title: 'FC本部が施工会社を選ぶときの判断基準', category: 'FC本部向け店舗工事', description: 'フランチャイズ本部が長期的なパートナーとなる施工会社を選ぶ際に、確認しておきたい判断基準を実務目線でまとめます。', keywords: ['FC本部 内装工事', '店舗施工 パートナー', '業者管理'], image: '/fc-02.png' },
  { slug: 'outsourcing-benefits', title: '店舗工事を外部パートナーに任せるメリット', category: 'FC本部向け店舗工事', description: '店舗工事の管理を外部の施工パートナーに一本化することで、本部担当者の負担がどう変わるかを整理します。', keywords: ['店舗工事 管理', '業者管理', '店舗施工 パートナー'], image: '/fc-05.png' },
  { slug: 'nationwide-partner-selection', title: '広域展開する企業が施工パートナーを選ぶ基準', category: 'FC本部向け店舗工事', description: '複数エリアに広域展開する企業が、遠隔地の店舗工事まで任せられる施工パートナーを選ぶ基準を解説します。', keywords: ['多店舗 内装工事', '店舗施工 パートナー', '複数店舗 工事'], image: '/store-05.png' },

  // ———— 多店舗展開の施工管理 ————
  { slug: 'multi-store-bulk-management', title: '多店舗展開企業が店舗工事を一括管理するメリット', category: '多店舗展開の施工管理', description: '複数店舗を展開する企業が、内装工事・原状回復工事を一括管理することで得られるメリットを実務目線で整理します。', keywords: ['多店舗 内装工事', '店舗工事 管理', '複数店舗 工事'], image: '/store-07.png' },
  { slug: 'multi-store-restoration-process', title: '多店舗展開における原状回復工事の進め方', category: '多店舗展開の施工管理', description: '複数店舗の退店が重なる多店舗展開企業に向けて、原状回復工事を計画的に進めるための手順を解説します。', keywords: ['多店舗 原状回復', '複数店舗 工事', '退店 原状回復'], image: '/resto-05.png' },
  { slug: 'multi-store-exit-process', title: '複数店舗の退店対応をスムーズに進める方法', category: '多店舗展開の施工管理', description: '複数店舗の退店・閉店が同時期に発生する場合に、対応を一覧化して滞りなく進めるための考え方を解説します。', keywords: ['複数店舗 工事', '退店 原状回復', '多店舗 原状回復'], image: '/resto-07.png' },

  // ———— 店舗開発・新規出店 ————
  { slug: 'pre-construction-checklist', title: '店舗開発担当者が内装工事前に整理すべき項目', category: '店舗開発・新規出店', description: '店舗開発担当者が内装工事を依頼する前に整理しておくと、見積りと工程の精度が上がる項目をまとめます。', keywords: ['店舗開発 内装工事', '新規出店 内装', '店舗工事 管理'], image: '/store-03.png' },
  { slug: 'new-store-interior-tips', title: '新規出店時の店舗内装工事で失敗しないためのポイント', category: '店舗開発・新規出店', description: '新規出店の内装工事で起きやすいトラブルを避けるために、物件選定から施工までに押さえておきたいポイントを解説します。', keywords: ['新規出店 内装', '店舗内装工事', '店舗開発 内装工事'], image: '/store-04.png' },

  // ———— 店舗改装・リニューアル ————
  { slug: 'franchise-renovation-notes', title: 'フランチャイズ店舗の改装工事で注意すべきこと', category: '店舗改装・リニューアル', description: 'フランチャイズ店舗の改装・リニューアル工事で、本部仕様への適合と営業への影響を両立させる注意点を解説します。', keywords: ['店舗改装 工事', 'フランチャイズ 内装工事', 'リニューアル'], image: '/store-02.png' },
  { slug: 'minimize-closure-renovation', title: '店舗改装時に営業停止期間を短くする考え方', category: '店舗改装・リニューアル', description: '店舗改装で売上への影響を抑えるために、営業停止期間を短くする工程設計の考え方を実務目線でまとめます。', keywords: ['店舗改装 工事', '短工期 工事', '夜間工事'], image: '/beauty-04.png' },

  // ———— 原状回復・退店対応 ————
  { slug: 'fc-exit-restoration-management', title: 'FC本部が退店時の原状回復を管理すべき理由', category: '原状回復・退店対応', description: 'フランチャイズ本部が加盟店の退店時の原状回復まで管理体制に組み込むべき理由と、そのメリットを解説します。', keywords: ['退店 原状回復', 'FC本部 店舗工事', '店舗 原状回復'], image: '/resto-03.png' },
  { slug: 'restoration-common-troubles', title: '店舗退去時の原状回復で起きやすいトラブル', category: '原状回復・退店対応', description: '店舗退去時の原状回復工事で起きやすいトラブルの典型的なパターンと、事前に防ぐための確認事項を整理します。', keywords: ['店舗 原状回復', '退店 原状回復', 'テナント 原状回復'], image: '/resto-01.png' },
  { slug: 'restoration-cost-causes', title: 'テナント原状回復の費用が高くなる原因', category: '原状回復・退店対応', description: 'テナントの原状回復費用が想定より高くなる原因を掘り下げ、費用を適正化するために確認すべき点を解説します。', keywords: ['テナント 原状回復', '店舗 原状回復', '店舗工事 コスト削減'], image: '/resto-06.png' },
  { slug: 'restoration-estimate-checklist', title: '原状回復工事の見積もりで確認すべき項目', category: '原状回復・退店対応', description: '原状回復工事の見積書を受け取ったときに、範囲・数量・単価のどこを確認すれば妥当性を判断できるかを解説します。', keywords: ['原状回復 見積もり', '店舗 原状回復', '退店 原状回復'], image: '/resto-04.png' },
  { slug: 'restoration-negotiation', title: '管理会社との原状回復交渉で確認すべきこと', category: '原状回復・退店対応', description: '管理会社・貸主との原状回復交渉で、借主負担の範囲を適正に切り分けるために確認しておくべき点をまとめます。', keywords: ['テナント 原状回復', '店舗 原状回復', '退店 原状回復'], image: '/resto-02.png' },
  { slug: 'store-closing-restoration-flow', title: '閉店時に必要な原状回復工事の流れ', category: '原状回復・退店対応', description: '店舗の閉店が決まってから明け渡しまで、原状回復工事をどの順序で進めるのか、全体の流れを解説します。', keywords: ['閉店 原状回復', '退店 原状回復', '店舗 原状回復'], image: '/resto-05.png' },
  { slug: 'avoid-restoration-extra-cost', title: '原状回復工事で追加費用を防ぐための確認事項', category: '原状回復・退店対応', description: '原状回復工事で後から追加費用が発生するのを防ぐために、着工前に確認しておくべき事項を整理します。', keywords: ['原状回復 見積もり', '店舗工事 コスト削減', '店舗 原状回復'], image: '/resto-07.png' },
  { slug: 'fc-franchisee-exit-works', title: 'FC加盟店の退店時に本部が把握すべき工事内容', category: '原状回復・退店対応', description: 'フランチャイズ加盟店が退店する際に、本部が把握しておくべき原状回復工事の内容とチェックポイントを解説します。', keywords: ['退店 原状回復', 'FC本部 店舗工事', '加盟店 工事'], image: '/resto-03.png' },

  // ———— 店舗工事のコスト削減 ————
  { slug: 'reduce-interior-cost', title: '店舗内装工事の費用を抑えるために確認すべきこと', category: '店舗工事のコスト削減', description: '店舗内装工事の費用を抑えるために、品質を落とさずに確認・調整できるポイントを実務目線で解説します。', keywords: ['店舗工事 コスト削減', '店舗内装工事', '店舗改装 工事'], image: '/store-06.png' },
  { slug: 'multi-store-cost-leveling', title: '多店舗の内装工事コストを平準化する方法', category: '店舗工事のコスト削減', description: '店舗ごとにばらつきがちな内装工事コストを、仕様の標準化と一括管理によって平準化する方法を解説します。', keywords: ['店舗工事 コスト削減', '多店舗 内装工事', '複数店舗 工事'], image: '/fc-02.png' },
  { slug: 'estimate-comparison-tips', title: '店舗工事の見積比較で注意すべきポイント', category: '店舗工事のコスト削減', description: '複数社の見積りを比較するときに、金額だけでなく工事範囲・仕様の前提をそろえて判断するための注意点を解説します。', keywords: ['店舗工事 コスト削減', '店舗内装工事', '業者管理'], image: '/store-01.png' },
  { slug: 'short-term-construction', title: '短工期の店舗工事で失敗しないための進め方', category: '店舗工事のコスト削減', description: 'オープン日が決まっている短工期の店舗工事で、品質を保ちながら期限に間に合わせるための進め方を解説します。', keywords: ['短工期 工事', '店舗内装工事', '工程管理'], image: '/store-03.png' },

  // ———— 本部担当者向けノウハウ ————
  { slug: 'night-construction-checklist', title: '夜間工事を依頼する際に確認すべきこと', category: '本部担当者向けノウハウ', description: '営業を止めずに施工する夜間工事を依頼する際に、施設条件や作業範囲について確認しておくべき点をまとめます。', keywords: ['夜間工事', '短工期 工事', '店舗工事 管理'], image: '/rest-09.png' },
  { slug: 'prevent-schedule-delay', title: '店舗内装工事で工期遅れを防ぐ管理方法', category: '本部担当者向けノウハウ', description: '店舗内装工事で工期遅れが起きる原因を整理し、本部・担当者が進捗を管理して遅延を防ぐ方法を解説します。', keywords: ['工程管理', '店舗工事 管理', '店舗内装工事'], image: '/store-04.png' },
  { slug: 'vendor-consolidation', title: '業者管理を一本化することで本部負担を減らす方法', category: '本部担当者向けノウハウ', description: '複数の工事業者への個別対応を一本化し、本部担当者の管理負担を減らすための考え方と進め方を解説します。', keywords: ['業者管理', '店舗工事 管理', '店舗施工 パートナー'], image: '/fc-02.png' },
  { slug: 'quality-standardization-checklist', title: '施工品質を統一するためのチェックポイント', category: '本部担当者向けノウハウ', description: '複数店舗で施工品質を統一するために、本部が用意しておくと有効なチェックポイントと基準づくりを解説します。', keywords: ['施工品質 統一', 'ブランド仕様 統一', '店舗工事 管理'], image: '/fc-04.png' },
  { slug: 'progress-management', title: '店舗工事の進捗管理で本部が見るべき項目', category: '本部担当者向けノウハウ', description: '現場に行かなくても状況を把握できるように、店舗工事の進捗管理で本部が確認すべき項目を整理します。', keywords: ['工程管理', '店舗工事 管理', '複数店舗 工事'], image: '/store-07.png' },

  // ———— 業種別内装工事 ————
  { slug: 'salon-interior-fc', title: 'サロン内装工事でFC本部が確認すべきポイント', category: '業種別内装工事', description: 'サロンのフランチャイズ展開で、本部が内装工事の仕様・設備を統一するために確認すべきポイントを解説します。', keywords: ['サロン 内装工事', 'フランチャイズ 内装工事', 'FC本部 内装工事'], image: '/salon-03.png' },
  { slug: 'beauty-salon-flow-lighting', title: '美容室の内装工事で重視すべき動線と照明', category: '業種別内装工事', description: '美容室の内装工事で、施術効率と居心地を左右する動線設計と照明計画のポイントを実務目線でまとめます。', keywords: ['美容室 内装工事', 'サロン 内装工事', '店舗内装工事'], image: '/beauty-06.png' },
  { slug: 'gym-interior-flooring', title: 'ジム内装工事で確認すべき床材・防音・設備', category: '業種別内装工事', description: 'ジム・フィットネスの内装工事で重要になる床材の耐荷重、防音対策、設備計画の確認ポイントを解説します。', keywords: ['ジム 内装工事', 'フィットネス 内装', '店舗内装工事'], image: '/gym-01.png' },
  { slug: 'restaurant-interior-fc', title: '飲食店内装工事で本部が注意すべきこと', category: '業種別内装工事', description: '飲食店のチェーン展開で、本部が厨房・排気・保健所要件などの内装工事の要点を管理するための注意点を解説します。', keywords: ['飲食店 内装工事', 'FC本部 内装工事', '店舗内装工事'], image: '/rest-01.png' },
  { slug: 'clinic-interior-flow', title: 'クリニック内装工事で清潔感と動線を両立する考え方', category: '業種別内装工事', description: 'クリニックの内装工事で、清潔感のある空間と患者・スタッフの動線を両立させるための設計の考え方を解説します。', keywords: ['クリニック 内装工事', '医院 内装', '店舗内装工事'], image: '/clinic-09.png' },
  { slug: 'apparel-interior-brand', title: 'アパレル店舗内装でブランドイメージを統一する方法', category: '業種別内装工事', description: 'アパレル店舗の多店舗展開で、内装によってブランドイメージを全店統一するための考え方と施工管理を解説します。', keywords: ['アパレル 店舗内装', 'ブランド仕様 統一', '店舗内装工事'], image: '/retail-01.png' },
  { slug: 'retail-interior-flow', title: '小売店の内装工事で売場導線を整えるポイント', category: '業種別内装工事', description: '小売店の内装工事で、売上につながる売場導線と什器レイアウトを整えるための考え方を実務目線でまとめます。', keywords: ['小売店 内装工事', 'アパレル 店舗内装', '店舗内装工事'], image: '/retail-02.png' },
  { slug: 'multi-salon-renovation', title: '多店舗サロンの改装工事を一括管理する方法', category: '業種別内装工事', description: '複数店舗を展開するサロンが、改装・リニューアル工事を一括管理してブランドを統一する方法を解説します。', keywords: ['サロン 内装工事', '多店舗 内装工事', '店舗改装 工事'], image: '/beauty-02.png' },
  { slug: 'multi-gym-restoration', title: '多店舗ジムの原状回復工事で注意すべきこと', category: '業種別内装工事', description: '複数店舗を展開するジムの退店・原状回復工事で、床材や設備の撤去など業態特有の注意点を解説します。', keywords: ['ジム 内装工事', '多店舗 原状回復', '退店 原状回復'], image: '/gym-08.png' },
  { slug: 'restaurant-exit-restoration', title: '飲食店の退店時に必要な原状回復工事の考え方', category: '業種別内装工事', description: '飲食店の退店時に発生する厨房・ダクト・グリストラップなどの原状回復工事の考え方と費用要因を解説します。', keywords: ['飲食店 内装工事', '店舗 原状回復', '退店 原状回復'], image: '/resto-04.png' },

  // ———— エリア別店舗工事 ————
  { slug: 'tokyo-shop-interior', title: '東京で店舗内装工事を依頼する際の注意点', category: 'エリア別店舗工事', description: '東京で店舗内装工事を依頼する際に、テナント条件や商業施設のルールなど都市部特有の注意点を解説します。', keywords: ['東京 店舗内装工事', '店舗内装工事', 'テナント 原状回復'], image: '/rest-05.png' },
  { slug: 'saitama-franchise-interior', title: '埼玉でフランチャイズ店舗の内装工事を進めるポイント', category: 'エリア別店舗工事', description: '埼玉県でフランチャイズ店舗の内装工事を進める際に、ロードサイド・郊外型の物件で押さえたいポイントを解説します。', keywords: ['埼玉 店舗内装工事', 'フランチャイズ 内装工事', '店舗内装工事'], image: '/cafe-01.png' },
  { slug: 'chiba-multi-store-interior', title: '千葉で多店舗展開企業が内装工事を依頼する際の考え方', category: 'エリア別店舗工事', description: '千葉県で多店舗展開する企業が、複数店舗の内装工事をまとめて依頼する際の考え方と進め方を解説します。', keywords: ['千葉 店舗内装工事', '多店舗 内装工事', '店舗内装工事'], image: '/rest-04.png' },
  { slug: 'kanagawa-restoration', title: '神奈川で店舗原状回復工事を進める際の注意点', category: 'エリア別店舗工事', description: '神奈川県で店舗の原状回復工事を進める際に、都市部・郊外それぞれの物件で確認しておくべき注意点を解説します。', keywords: ['神奈川 原状回復工事', '店舗 原状回復', '退店 原状回復'], image: '/resto-06.png' },
  { slug: 'shizuoka-shop-interior', title: '静岡で店舗内装工事を相談する前に整理すべきこと', category: 'エリア別店舗工事', description: '静岡県で店舗内装工事を相談する前に、物件条件や出店計画について整理しておくと話が早く進む項目を解説します。', keywords: ['静岡 店舗内装工事', '店舗内装工事', '新規出店 内装'], image: '/rest-02.png' },
  { slug: 'osaka-chain-interior', title: '大阪でチェーン店の内装工事を進める際のポイント', category: 'エリア別店舗工事', description: '大阪でチェーン店・フランチャイズの内装工事を進める際に、都市部の商業施設や繁華街の物件で押さえるべき点を解説します。', keywords: ['大阪 店舗内装工事', 'チェーン店 内装工事', '店舗内装工事'], image: '/rest-06.png' },
  { slug: 'hyogo-restoration', title: '兵庫で店舗原状回復工事を依頼する際の確認事項', category: 'エリア別店舗工事', description: '兵庫県（神戸ほか）で店舗の原状回復工事を依頼する際に、契約条件や工事範囲について確認すべき事項を解説します。', keywords: ['兵庫 原状回復工事', '店舗 原状回復', 'テナント 原状回復'], image: '/beauty-01.png' },
  { slug: 'kanto-multi-store', title: '関東エリアで複数店舗の工事を一括管理する方法', category: 'エリア別店舗工事', description: '関東エリアに複数店舗を展開する企業が、エリアをまたいだ店舗工事を一括管理する方法を解説します。', keywords: ['東京 店舗内装工事', '多店舗 内装工事', '複数店舗 工事'], image: '/store-05.png' },
  { slug: 'kansai-fc-construction', title: '関西エリアでFC店舗工事を進める際の注意点', category: 'エリア別店舗工事', description: '関西エリア（大阪・兵庫ほか）でフランチャイズ店舗の工事を進める際に、遠隔管理も含めた注意点を解説します。', keywords: ['大阪 店舗内装工事', 'フランチャイズ 内装工事', '多店舗 内装工事'], image: '/rest-10.png' },

  // ———— 第2バッチ：業種・費用・工程・原状回復・FCの深掘り ————
  { slug: 'izakaya-interior', title: '居酒屋の内装工事で本部が確認すべきこと', category: '業種別内装工事', description: '居酒屋・大衆酒場の内装工事で、厨房・排気・個室造作など業態特有の確認ポイントを本部目線で解説します。', keywords: ['居酒屋 内装工事', '飲食店 内装工事', '厨房 工事'], image: '/rest-09.png' },
  { slug: 'ramen-interior', title: 'ラーメン店の内装工事で重視すべき厨房と排気計画', category: '業種別内装工事', description: 'ラーメン店の内装工事で要となる厨房設備・排気ダクト・給排水の計画と、確認しておきたいポイントを解説します。', keywords: ['ラーメン店 内装工事', '飲食店 内装工事', '厨房 排気'], image: '/rest-03.png' },
  { slug: 'yakiniku-interior', title: '焼肉店の内装工事でダクト・排煙を計画するポイント', category: '業種別内装工事', description: '焼肉店の内装工事で欠かせない無煙ロースター用ダクト・排煙・臭気対策の考え方を実務目線でまとめます。', keywords: ['焼肉店 内装工事', '飲食店 内装工事', '排煙 ダクト'], image: '/rest-07.png' },
  { slug: 'cram-school-interior', title: '学習塾の内装工事で防音と動線を両立する考え方', category: '業種別内装工事', description: '学習塾・スクールの内装工事で、教室間の防音と生徒の安全な動線を両立させる設計の考え方を解説します。', keywords: ['学習塾 内装工事', 'スクール 内装', '防音 工事'], image: '/store-04.png' },
  { slug: 'relaxation-salon-interior', title: 'リラクゼーションサロンの内装工事で注意すべき点', category: '業種別内装工事', description: 'リラクゼーション・整体サロンの内装工事で、個室の遮音・照明・空調など施術環境を整える注意点を解説します。', keywords: ['リラクゼーション 内装工事', 'サロン 内装工事', '整体 内装'], image: '/salon-05.png' },
  { slug: 'pharmacy-interior', title: '調剤薬局の内装工事で確認すべき動線と設備', category: '業種別内装工事', description: '調剤薬局の内装工事で、投薬・調剤・待合の動線と設備要件を整理し、確認すべきポイントを解説します。', keywords: ['調剤薬局 内装工事', 'クリニック 内装工事', '薬局 開業'], image: '/clinic-04.png' },

  { slug: 'tsubo-unit-price', title: '店舗内装工事の坪単価の考え方と内訳', category: '店舗工事のコスト削減', description: '店舗内装工事の「坪単価」がどう決まるのか、内訳と変動要因を整理し、比較検討に使う際の注意点を解説します。', keywords: ['店舗内装工事 坪単価', '内装工事 費用', '店舗工事 コスト削減'], image: '/store-06.png' },
  { slug: 'abc-construction-division', title: 'B工事・C工事とは？店舗工事の区分を理解する', category: '店舗工事のコスト削減', description: '商業施設やビルの店舗工事で登場するA工事・B工事・C工事の区分を整理し、費用と交渉のポイントを解説します。', keywords: ['B工事 C工事', '店舗工事 区分', '店舗工事 コスト削減'], image: '/fc-02.png' },
  { slug: 'estimate-breakdown-reading', title: '内装工事見積書の内訳の読み方', category: '店舗工事のコスト削減', description: '内装工事の見積書に並ぶ項目の意味と、範囲・数量・単価をどう確認すれば妥当性を判断できるかを解説します。', keywords: ['内装工事 見積もり', '見積書 内訳', '店舗工事 費用'], image: '/store-01.png' },
  { slug: 'payment-terms-construction', title: '店舗工事の支払い条件で確認すべきこと', category: '店舗工事のコスト削減', description: '店舗工事の契約前に、着手金・中間金・完成払いなどの支払い条件で確認しておくべきポイントを解説します。', keywords: ['店舗工事 支払い', '内装工事 契約', '店舗工事 コスト削減'], image: '/fc-03.png' },

  { slug: 'completion-inspection', title: '店舗内装工事の竣工検査でチェックすべき項目', category: '本部担当者向けノウハウ', description: '店舗内装工事の引き渡し前、竣工検査で本部・担当者が確認しておくべきチェック項目を整理します。', keywords: ['竣工検査', '店舗工事 管理', '施工品質 統一'], image: '/store-02.png' },
  { slug: 'construction-photos', title: '施工写真を管理・報告に活用する方法', category: '本部担当者向けノウハウ', description: '着工前・施工中・完了の施工写真を、進捗報告と品質管理にどう活用するか、本部目線の考え方を解説します。', keywords: ['施工写真', '工程管理', '店舗工事 管理'], image: '/store-07.png' },
  { slug: 'neighbor-greeting', title: '店舗工事の近隣挨拶と養生で気をつけること', category: '本部担当者向けノウハウ', description: '店舗工事の着工前に行う近隣挨拶と共用部・什器の養生について、トラブルを避けるための注意点を解説します。', keywords: ['店舗工事 近隣挨拶', '養生', '店舗工事 管理'], image: '/store-03.png' },
  { slug: 'equipment-delivery', title: '什器・厨房機器の搬入段取りで失敗しない方法', category: '本部担当者向けノウハウ', description: '什器や厨房機器の搬入経路・タイミングを工程に組み込み、搬入トラブルや工期遅れを防ぐ段取りを解説します。', keywords: ['什器 搬入', '厨房機器 搬入', '工程管理'], image: '/rest-10.png' },

  { slug: 'skeleton-return', title: 'スケルトン返しとは？原状回復の範囲を理解する', category: '原状回復・退店対応', description: '店舗退去で求められる「スケルトン返し」の意味と、契約上どこまで解体・復旧するのかを整理して解説します。', keywords: ['スケルトン返し', '店舗 原状回復', '退店 原状回復'], image: '/resto-05.png' },
  { slug: 'restoration-guideline', title: '原状回復をめぐるガイドラインと店舗の考え方', category: '原状回復・退店対応', description: '原状回復に関する一般的な考え方（通常損耗と借主負担の区分など）を整理し、店舗契約での注意点を解説します。', keywords: ['原状回復 ガイドライン', '店舗 原状回復', 'テナント 原状回復'], image: '/resto-02.png' },
  { slug: 'inuki-transfer-restoration', title: '居抜き売却で原状回復を免除できるケース', category: '原状回復・退店対応', description: '退去時に居抜きで次のテナントへ引き継ぐことで、原状回復工事を抑えられる可能性と注意点を解説します。', keywords: ['居抜き 売却', '原状回復 免除', '退店 原状回復'], image: '/resto-07.png' },
  { slug: 'restoration-schedule', title: '退去日から逆算する原状回復工事のスケジュール', category: '原状回復・退店対応', description: '明け渡し期限から逆算して、調査・見積り・施工・立会いをどう配置するか、原状回復の工程設計を解説します。', keywords: ['原状回復 スケジュール', '退店 原状回復', '店舗 原状回復'], image: '/resto-01.png' },

  { slug: 'standard-equipment-package', title: 'FC標準什器パッケージと内装施工の連携', category: 'フランチャイズ内装工事', description: 'FC本部が定める標準什器パッケージと内装施工をどう連携させ、全店の統一と効率化を図るかを解説します。', keywords: ['FC 什器 標準化', 'フランチャイズ 内装工事', 'ブランド仕様 統一'], image: '/fc-04.png' },
  { slug: 'sv-store-inspection', title: 'SVの店舗巡回で見る内装・設備のチェックポイント', category: '多店舗展開の施工管理', description: 'スーパーバイザーが店舗巡回時に確認しておきたい内装・設備の劣化やメンテナンスのポイントを解説します。', keywords: ['SV 店舗巡回', '多店舗 施工管理', '店舗 メンテナンス'], image: '/store-05.png' },
  { slug: 'store-opening-review', title: '出店審査と内装計画の進め方', category: '店舗開発・新規出店', description: '出店審査の段階から内装計画を並行して進めることで、開業までをスムーズにする考え方を解説します。', keywords: ['出店審査', '新規出店 内装', '店舗開発 内装工事'], image: '/store-03.png' },
  { slug: 'multi-store-maintenance', title: '多店舗の内装・設備の保守メンテナンスを一括管理する', category: '多店舗展開の施工管理', description: '複数店舗の内装・設備の不具合対応や小修繕を、窓口を一本化して一括管理するメリットと進め方を解説します。', keywords: ['店舗 メンテナンス', '多店舗 施工管理', '業者管理'], image: '/store-07.png' },
]
