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
        <div key={category.category} style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid #0A0A0A' }}>
            <span className="mono" style={{ fontSize: '0.625rem', letterSpacing: '0.24em', color: '#C25E7F', textTransform: 'uppercase', flexShrink: 0 }}>FAQ</span>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0A0A0A', letterSpacing: '-0.01em' }}>{category.category}</h2>
          </div>
          {category.items.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      ))}
    </>
  )
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid #E7E3DA' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', flex: 1 }}>
          <span className="mono" style={{ flexShrink: 0, fontSize: '0.6875rem', fontWeight: 500, color: open ? '#C25E7F' : '#B5B0A4', letterSpacing: '0.08em', transition: 'color 0.25s' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.75 }}>{q}</span>
        </div>
        <span
          aria-hidden
          style={{
            flexShrink: 0,
            width: '2rem',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: open ? '#0A0A0A' : '#DDD8CE',
            borderRadius: '50%',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#0A0A0A',
            lineHeight: 1,
            transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.25s, background 0.25s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            background: open ? '#F6F4EF' : 'transparent',
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div style={{ paddingBottom: '1.875rem', paddingLeft: '3.1rem' }}>
          <p style={{ fontSize: '0.9375rem', color: '#57544D', lineHeight: 2.05, margin: 0, borderLeft: '1px solid #C25E7F', paddingLeft: '1.5rem' }}>
            {a}
          </p>
        </div>
      )}
    </div>
  )
}
