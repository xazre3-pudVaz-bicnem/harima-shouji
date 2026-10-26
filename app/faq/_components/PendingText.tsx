import { Fragment } from 'react'
import { PENDING_MARK } from '@/lib/content-status'

const PENDING_RE = new RegExp(`(${PENDING_MARK}[^】]*】)`)

// 下書きの確認用：【要確認：…】の箇所に色を付けて表示する（本番では下書き自体が出力されない）
export default function PendingText({ text }: { text: string }) {
  return (
    <>
      {text.split(PENDING_RE).map((part, i) =>
        part.startsWith(PENDING_MARK) ? (
          <mark key={i} style={{ background: 'rgba(194,94,127,0.14)', color: '#9B3F5F', padding: '0 0.2em' }}>
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
