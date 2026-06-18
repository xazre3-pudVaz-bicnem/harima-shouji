'use client'

import { useState } from 'react'

type FaqCategory = {
  category: string
  items: { q: string; a: string }[]
}

export default function FaqAccordion({ faqs }: { faqs: FaqCategory[] }) {
  return (
    <>
      {faqs.map((category) => (
        <div key={category.category} style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '2px solid #0A0A0A' }}>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>{category.category}</h2>
          </div>
          {category.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      ))}
    </>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #F0EFEC' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1.75rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1.5rem',
          fontFamily: 'inherit',
        }}
      >
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flex: 1 }}>
          <span style={{ flexShrink: 0, fontSize: '0.875rem', fontWeight: 700, color: '#C4C2BE', paddingTop: '0.125rem' }}>Q</span>
          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.75 }}>{q}</span>
        </div>
        <span
          style={{
            flexShrink: 0,
            fontSize: '1.25rem',
            color: '#9CA3AF',
            lineHeight: 1,
            marginTop: '0.125rem',
            transition: 'transform 0.25s ease',
            display: 'inline-block',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div style={{ paddingBottom: '1.75rem', paddingLeft: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <span style={{ flexShrink: 0, fontSize: '0.875rem', fontWeight: 700, color: '#0A0A0A', paddingTop: '0.125rem' }}>A</span>
            <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 2, margin: 0 }}>{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}
