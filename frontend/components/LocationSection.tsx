'use client'

import { useApp, useThaiFont } from '@/context/AppContext'
import { location } from '@/lib/translations'

export default function LocationSection() {
  const { lang } = useApp()
  const ff = useThaiFont()
  const t = location[lang]

  return (
    <section id="location" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <div className="label">{t.label}</div>
          <h2 style={{ fontFamily: ff }}>{t.title}</h2>
          <p className="subtitle" style={{ fontFamily: ff }}>{t.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 1000, margin: '0 auto', alignItems: 'start' }}>
          {/* Map image */}
          <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80&auto=format&fit=crop" alt="cafe exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'var(--surface)', padding: '10px 16px', borderRadius: 4, boxShadow: 'var(--shadow-md)', fontSize: 12, fontWeight: 500, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--accent)' }}>&#128205;</span>
              <span style={{ fontFamily: ff }}>{t.mapsLabel}</span>
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: '16px 0' }}>
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Address</h4>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', whiteSpace: 'pre-line', fontFamily: ff }}>{t.addr}</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8, fontFamily: ff }}>&#128205; {t.transit}</p>
            </div>
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>{t.hours}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: 'var(--surface-warm)', borderRadius: 4, border: '1px solid var(--border-light)', marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 500, fontFamily: ff }}>{t.daily}</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent)' }}>{t.time}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: ff }}>{t.closed}</p>
            </div>
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Contact</h4>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 4 }}>{t.phone}</p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{t.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
