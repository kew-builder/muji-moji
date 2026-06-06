'use client'

import { useState } from 'react'
import { useApp, useThaiFont } from '@/context/AppContext'
import { menu, type MenuItem } from '@/lib/translations'

export default function MenuSection() {
  const { lang } = useApp()
  const ff = useThaiFont()
  const [activeCat, setActiveCat] = useState(0)
  const data = menu[lang]
  const catName = data.categories[activeCat]
  const items: MenuItem[] = data.items[catName] ?? []

  return (
    <section id="menu" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <div className="label">{data.label}</div>
          <h2 style={{ fontFamily: ff }}>{data.title}</h2>
          <p className="subtitle" style={{ fontFamily: ff }}>{data.sub}</p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {data.categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCat(i)}
              style={{ padding: '10px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.5px', background: i === activeCat ? 'var(--accent)' : 'transparent', color: i === activeCat ? '#fff' : 'var(--text-secondary)', border: i === activeCat ? 'none' : '1px solid var(--border)', borderRadius: 4, cursor: 'pointer', transition: 'var(--transition)', fontFamily: ff }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="menu-card"
              style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 24, background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: 8 }}
            >
              <img src={item.img} alt={item.name} style={{ width: 64, height: 64, borderRadius: 4, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, fontFamily: ff }}>{item.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, fontFamily: ff }}>{item.desc}</div>
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--accent)', whiteSpace: 'nowrap' }}>฿{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
