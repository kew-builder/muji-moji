'use client'

import { useState } from 'react'
import { useApp, useThaiFont } from '@/context/AppContext'
import { gallery } from '@/lib/translations'

const photos = [
  { h: 1.4, label: 'latte art',       src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80&auto=format&fit=crop' },
  { h: 1.0, label: 'interior wide',   src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80&auto=format&fit=crop' },
  { h: 1.2, label: 'croissant',       src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80&auto=format&fit=crop' },
  { h: 1.0, label: 'counter bar',     src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80&auto=format&fit=crop' },
  { h: 1.5, label: 'window seat',     src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80&auto=format&fit=crop' },
  { h: 1.0, label: 'matcha latte',    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80&auto=format&fit=crop' },
  { h: 1.3, label: 'bookshelf corner',src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop' },
  { h: 1.0, label: 'coffee beans',    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80&auto=format&fit=crop' },
]

export default function GallerySection() {
  const { lang } = useApp()
  const ff = useThaiFont()
  const [lightbox, setLightbox] = useState<number | null>(null)
  const t = gallery[lang]

  return (
    <section id="gallery" className="section" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        <div className="section-head">
          <div className="label">{t.label}</div>
          <h2 style={{ fontFamily: ff }}>{t.title}</h2>
          <p className="subtitle" style={{ fontFamily: ff }}>{t.sub}</p>
        </div>

        {/* Masonry */}
        <div style={{ columns: '3', columnGap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {photos.map((p, i) => (
            <div
              key={i}
              className="gal-card"
              onClick={() => setLightbox(i)}
              style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 8, overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
            >
              <img src={p.src} alt={p.label} style={{ width: '100%', aspectRatio: `1/${p.h}`, objectFit: 'cover', display: 'block' }} />
              <div className="gal-hover" style={{ position: 'absolute', inset: 0, background: 'rgba(44,36,32,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <div style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: 16, overflow: 'hidden' }}>
            <img src={photos[lightbox].src.replace('w=600', 'w=1400')} alt={photos[lightbox].label} style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: 16 }} />
          </div>
        </div>
      )}
    </section>
  )
}
