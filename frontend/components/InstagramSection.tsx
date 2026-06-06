'use client'

import { useApp } from '@/context/AppContext'
import { instagram } from '@/lib/translations'

const posts = [
  { label: 'morning brew',  src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&q=80' },
  { label: 'matcha art',    src: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop&q=80' },
  { label: 'corner table',  src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&q=80' },
  { label: 'pastry tray',   src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop&q=80' },
  { label: 'moji mochi',    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&q=80' },
  { label: 'sunset window', src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=400&fit=crop&q=80' },
]

export default function InstagramSection() {
  const { lang } = useApp()
  const t = instagram[lang]
  const ff = lang === 'th' ? 'var(--font-noto-thai)' : undefined

  return (
    <section className="section" style={{ background: 'var(--bg-deep)', paddingBottom: 80 }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="label">{t.label}</div>
          <h2 style={{ fontFamily: ff }}>{t.title}</h2>
          <p className="subtitle" style={{ marginTop: 8 }}>@mujimoji.cafe</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
          {posts.map((p, i) => (
            <div
              key={i}
              style={{ position: 'relative', cursor: 'pointer', borderRadius: 4, overflow: 'hidden' }}
              onMouseEnter={e => { const ov = e.currentTarget.querySelector('.ig-hover') as HTMLElement; if (ov) ov.style.opacity = '1' }}
              onMouseLeave={e => { const ov = e.currentTarget.querySelector('.ig-hover') as HTMLElement; if (ov) ov.style.opacity = '0' }}
            >
              <img src={p.src} alt={p.label} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
              <div className="ig-hover" style={{ position: 'absolute', inset: 0, background: 'rgba(44,36,32,0.4)', opacity: 0, transition: 'var(--transition)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="#fff" stroke="none" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
