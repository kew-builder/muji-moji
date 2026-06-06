'use client'

import { useApp } from '@/context/AppContext'
import { footer } from '@/lib/translations'

export default function Footer() {
  const { lang } = useApp()
  const t = footer[lang]
  const ff = lang === 'th' ? 'var(--font-noto-thai)' : undefined

  return (
    <footer style={{ background: 'var(--text-primary)', color: 'rgba(255,255,255,0.5)', padding: '48px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>M</div>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>MujiMoji Caf&#233;</span>
            </div>
            <p style={{ fontSize: 13, fontFamily: ff }}>{t.tagline}</p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            {['Menu','Gallery','Booking','Location'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'var(--transition)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              <svg key="ig" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>,
              <svg key="fb" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
              <svg key="tg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
            ].map((icon, i) => (
              <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'var(--transition)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 32, paddingTop: 24, textAlign: 'center', fontSize: 12 }}>
          &#169; 2024 MujiMoji Caf&#233;. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
