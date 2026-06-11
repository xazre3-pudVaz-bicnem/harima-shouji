const stats = [
  { label: '施工対応実績', value: '300件以上', note: '※累計対応実績' },
  { label: '対応エリア', value: '関東一円', note: '東京都を中心に関東7都県' },
  { label: '最短対応', value: '即日相談可', note: '夜間・急ぎ工事もご相談を' },
  { label: '法人実績', value: 'FC本部対応', note: '多店舗展開企業向け専門' },
]

export default function StatsStrip() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="py-9 px-6 text-center">
              <div className="text-[10px] font-bold tracking-[0.22em] text-amber-500 uppercase mb-2">{stat.label}</div>
              <div
                className="font-bold text-gray-900 mb-1 leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 1.8vw, 1.9rem)', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 leading-snug">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
