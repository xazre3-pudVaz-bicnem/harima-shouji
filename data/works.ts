export type WorkCategory = 'shop-interior' | 'restoration' | 'salon' | 'gym'

export type WorkData = {
  slug: string
  title: string
  category: WorkCategory
  area: string
  duration: string
  imageUrl: string
  summary: string
  challenge: string
  approach: string
  scope: string[]
  relatedLinks: { label: string; href: string }[]
}

export const works: WorkData[] = [
  {
    slug: 'restaurant-fc-tokyo',
    title: 'FC飲食店 新規出店内装工事',
    category: 'shop-interior',
    area: '東京都新宿区',
    duration: '14日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_22.jpg',
    summary:
      '大手飲食フランチャイズの新規出店に伴う内装工事。FC本部仕様書に基づき、厨房設備・内装仕上げ・ブランドサインまで一括対応しました。',
    challenge:
      '商業ビル内テナントのため搬入経路が制限されており、資材の搬入スケジュールと各職種との調整が課題でした。FC本部仕様の詳細確認と現場での変更対応も並行して求められました。',
    approach:
      '着工前に搬入経路・資材保管場所を確認し、職種ごとの搬入タイミングを計画。本部担当者との事前確認を徹底することで、変更対応を最小限に抑えながら14日間で完工しました。',
    scope: [
      '厨房設備基礎工事・排気ダクト設置',
      '防滑床材施工（ホール・厨房）',
      'ホール内装仕上げ（クロス・天井・照明）',
      'ブランドサイン・サインボード設置',
      '給排水接続工事',
      'グリストラップ設置',
    ],
    relatedLinks: [
      { label: '店舗内装工事について', href: '/service/shop-interior' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
  {
    slug: 'beauty-salon-kanagawa',
    title: 'FCサロン 新規出店内装工事',
    category: 'salon',
    area: '神奈川県横浜市',
    duration: '10日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_7.jpg',
    summary:
      '美容サロンフランチャイズの新規出店内装工事。シャンプー台の給排水工事・スタイリングミラー設置・ブランド仕様仕上げを含む総合施工を実施しました。',
    challenge:
      '既存テナントの電気容量が不足しており、増設申請と工事の調整が必要でした。シャンプー台4台分の床下配管ルートの確保も工程上の課題でした。',
    approach:
      '電気増設申請を着工前に完了させ、配管ルートの事前確認で工事中の手戻りを防止。ブランド仕様書に基づいた品質管理を徹底し、10日間でオープンに間に合わせました。',
    scope: [
      'シャンプー台給排水工事（4台分）',
      '電気容量増設（60A→100A）',
      'スタイリングミラー設置（8面）',
      '受付カウンター造作・壁面仕上げ',
      'ブランド仕様クロス・床材施工',
      '照明計画・設置',
    ],
    relatedLinks: [
      { label: '店舗内装工事について', href: '/service/shop-interior' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
  {
    slug: 'gym-interior-saitama',
    title: 'パーソナルジム 内装工事',
    category: 'gym',
    area: '埼玉県さいたま市',
    duration: '21日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_3.jpg',
    summary:
      'パーソナルトレーニングジムの新規出店内装工事。防音・床補強・換気設備など、ジム特有の要件に対応した施工を実施しました。',
    challenge:
      'トレーニング機器の重量に耐える床補強と、運動時の騒音を抑える防音間仕切りの施工が求められました。隣接テナントへの工事中の振動・騒音対策も必要でした。',
    approach:
      '構造設計に基づいた床補強計画を立案し、防音性能の高い間仕切り材を選定。騒音が集中する工程は隣接テナントの閉店後に実施し、クレームを防止しながら21日間で完工しました。',
    scope: [
      '床補強工事（重量機器設置対応）',
      'ゴムフロア・防滑床材施工',
      '防音間仕切り設置（4室）',
      '換気設備・空調工事',
      'ミラー壁面施工',
      'シャワールーム・洗面設備設置',
    ],
    relatedLinks: [
      { label: '店舗内装工事について', href: '/service/shop-interior' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
  {
    slug: 'restaurant-restoration-tokyo',
    title: '飲食店 テナント退去 原状回復',
    category: 'restoration',
    area: '東京都渋谷区',
    duration: '7日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_19.jpg',
    summary:
      '渋谷区内の飲食店退去に伴う原状回復工事。グリストラップ清掃・臭気処理・床材復旧・クロス張替えまで、退去立会い代行を含めて一括対応しました。',
    challenge:
      '長期使用による厨房の油汚れと臭気が壁・天井に浸透しており、通常の清掃では対応できない状態でした。管理会社から提示された原状回復費用の適正確認も求められていました。',
    approach:
      '専門の消臭処理を実施し、臭気基準をクリア。独自見積りを管理会社に提示することで費用の適正化をサポートしました。7日間で全工程を完了し、退去立会いに同行しました。',
    scope: [
      'グリストラップ清掃・撤去',
      '厨房排気ダクト内部清掃',
      '消臭処理（壁・天井・床）',
      '防滑床材撤去・床材復旧',
      'クロス補修・全面張替え',
      '退去立会い代行',
    ],
    relatedLinks: [
      { label: '原状回復工事について', href: '/service/restoration' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
  {
    slug: 'retail-fc-osaka',
    title: 'FC小売店 新規出店内装工事',
    category: 'shop-interior',
    area: '大阪府大阪市',
    duration: '18日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_5.jpg',
    summary:
      '関西エリア初出店となるFC小売店の内装工事。ブランドコンセプトに合わせた什器レイアウト・照明設計・サイン設置を含む総合施工を担当しました。',
    challenge:
      '東京本部との遠隔連絡でのFC仕様確認と、大阪現地の職人手配・品質管理の両立が求められました。搬入車両の制限がある立地での資材搬入スケジュール管理も課題でした。',
    approach:
      '施工前に本部仕様書の読み合わせを現地職人と実施し、品質基準を共有。本部担当者への毎日の写真報告を実施することで遠隔管理を実現し、18日間で完工しました。',
    scope: [
      '内装仕上げ工事（クロス・床・天井）',
      '什器・棚・陳列台設置',
      '照明計画・設置（ブランド仕様）',
      'フィッティングルーム設置（4室）',
      'レジカウンター造作',
      'ブランドサイン・ウィンドウディスプレイ',
    ],
    relatedLinks: [
      { label: '店舗内装工事について', href: '/service/shop-interior' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
  {
    slug: 'office-restoration-chiba',
    title: 'オフィス 原状回復工事',
    category: 'restoration',
    area: '千葉県千葉市',
    duration: '5日間',
    imageUrl: '/LINE_ALBUM_2026.6.10_260610_2.jpg',
    summary:
      '千葉市内のオフィステナント退去に伴う原状回復工事。パーテーション撤去・OAフロア復旧・クロス張替えを5日間で完工。費用の適正化もサポートしました。',
    challenge:
      '退去期限まで1週間という短期間での対応が必要でした。長期入居によるクロスの日焼け・汚損範囲が広く、補修対象の判断と費用交渉を並行して進める必要がありました。',
    approach:
      '現地調査当日に作業計画を立案し、翌日から着工。クロスの経年劣化と入居者責任の範囲を整理した資料を作成し、管理会社との費用交渉をサポート。5日間で完工し、予定通り鍵を返却しました。',
    scope: [
      'パーテーション・間仕切り撤去',
      'OAフロア撤去・床材復旧',
      'クロス補修・部分張替え',
      '天井補修',
      '照明器具原状回復',
      '退去立会い代行',
    ],
    relatedLinks: [
      { label: '原状回復工事について', href: '/service/restoration' },
      { label: 'FC本部向けサービス', href: '/franchise' },
    ],
  },
]

export function getWork(slug: string): WorkData | undefined {
  return works.find((w) => w.slug === slug)
}

export function getWorksByCategory(category: WorkCategory): WorkData[] {
  return works.filter((w) => w.category === category)
}
