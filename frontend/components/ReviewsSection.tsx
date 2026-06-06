'use client'

import { useState } from 'react'
import { useApp, useThaiFont } from '@/context/AppContext'
import { reviews } from '@/lib/translations'

export default function ReviewsSection() {
  const { lang } = useApp()
  const ff = useThaiFont()
  const [active, setActive] = useState(0)
  const t = reviews[lang]

  return (
    <section id="reviews" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <div className="label">{t.label}</div>
          <h2 style={{ fontFamily: ff }}>{t.title}</h2>
        </div>

        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border-light)', borderRadius: 16, padding: '48px 56px', boxShadow: 'var(--shadow-sm)' }}>
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
              {[...Array(t.items[active].rating)].map((_, i) => (
                <svg key={i} style={{ width: 16, height: 16, color: 'var(--accent)' }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-secondary)', fontStyle: 'italic', fontFamily: ff }}>
              &ldquo;{t.items[active].text}&rdquo;
            </p>
            <p style={{ marginTop: 24, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', fontFamily: ff }}>
              — {t.items[active].name}
            </p>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {t.items.map((_, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 4, cursor: 'pointer', background: i === active ? 'var(--accent)' : 'var(--border)', transition: 'var(--transition)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
