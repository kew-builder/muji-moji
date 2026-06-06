'use client'

import { useApp } from '@/context/AppContext'
import { hero } from '@/lib/translations'

export default function Hero() {
  const { lang, tweaks } = useApp()
  const c = hero[lang]

  if (tweaks.heroStyle === 'split') {
    return (
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 60px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 480 }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>{c.pre}</p>
            <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.15, color: 'var(--text-primary)', whiteSpace: 'pre-line', letterSpacing: '-1px' }}>{c.h1}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 24, whiteSpace: 'pre-line', fontFamily: lang === 'th' ? 'var(--font-noto-thai)' : undefined }}>{c.sub}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <a href="#menu" className="btn btn-primary">{c.cta1}</a>
              <a href="#booking" className="btn btn-outline">{c.cta2}</a>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80&auto=format&fit=crop" alt="cafe interior" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </div>
      </section>
    )
  }

  if (tweaks.heroStyle === 'minimal') {
    return (
      <section style={{ position: 'relative', width: '100%', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', padding: '160px 40px 80px', maxWidth: 600 }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>{c.pre}</p>
          <h1 style={{ fontSize: 56, fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)', whiteSpace: 'pre-line', letterSpacing: '-1.5px' }}>{c.h1}</h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 24, whiteSpace: 'pre-line', fontFamily: lang === 'th' ? 'var(--font-noto-thai)' : undefined }}>{c.sub}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 48, justifyContent: 'center' }}>
            <a href="#menu" className="btn btn-primary">{c.cta1}</a>
            <a href="#booking" className="btn btn-outline">{c.cta2}</a>
          </div>
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&auto=format&fit=crop" alt="coffee cup" style={{ width: 200, height: 260, borderRadius: 16, margin: '56px auto 0', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>
    )
  }

  // Default: fullscreen
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#3A2A1E' }} />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,22,19,0.45) 0%, rgba(26,22,19,0.65) 100%)', zIndex: 1 }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 40px', maxWidth: 700 }}>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 14, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.8, marginBottom: 24 }}>{c.pre}</p>
        <h1 style={{ fontSize: 60, fontWeight: 300, lineHeight: 1.1, whiteSpace: 'pre-line', letterSpacing: '-1.5px', fontFamily: lang === 'th' ? 'var(--font-noto-thai)' : undefined }}>{c.h1}</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.75, marginTop: 24, whiteSpace: 'pre-line', fontFamily: lang === 'th' ? 'var(--font-noto-thai)' : undefined }}>{c.sub}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 48, justifyContent: 'center' }}>
          <a href="#menu" style={{ padding: '14px 36px', fontSize: 13, fontWeight: 500, letterSpacing: 1, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 4, textDecoration: 'none' }}>{c.cta1}</a>
          <a href="#booking" style={{ padding: '14px 36px', fontSize: 13, fontWeight: 500, letterSpacing: 1, background: '#fff', color: 'var(--text-primary)', borderRadius: 4, textDecoration: 'none' }}>{c.cta2}</a>
        </div>
      </div>
      {/* Hours badge */}
      <div style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 3, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '16px 24px', color: '#fff' }}>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.7, marginBottom: 4, fontFamily: lang === 'th' ? 'var(--font-noto-thai)' : undefined }}>{c.open}</div>
        <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: 1 }}>{c.time}</div>
      </div>
    </section>
  )
}
