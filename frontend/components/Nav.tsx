'use client'

import { useEffect, useState } from 'react'
import { useApp } from '@/context/AppContext'
import { nav } from '@/lib/translations'

export default function Nav() {
  const { lang, setLang } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-height)',
      background: scrolled ? 'var(--surface)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'var(--transition)',
    }}>
      <div style={{ maxWidth: 'var(--container-width, 1200px)', margin: '0 auto', padding: '0 40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: scrolled ? 'var(--text-primary)' : '#fff', transition: 'var(--transition)' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700 }}>M</div>
          <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px' }}>MujiMoji</span>
        </a>

        {/* Links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {nav.links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase', color: textColor, textDecoration: 'none', transition: 'var(--transition)' }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = textColor)}
              >
                {lang === 'th' ? l.th : l.en}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            style={{ padding: '6px 14px', fontSize: 12, fontWeight: 500, border: scrolled ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.3)', borderRadius: 4, background: 'transparent', color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.9)', cursor: 'pointer', transition: 'var(--transition)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {lang === 'en' ? 'TH' : 'EN'}
          </button>
          <a
            href="#booking"
            style={{ padding: '10px 24px', fontSize: 13, fontWeight: 500, background: scrolled ? 'var(--accent)' : 'rgba(255,255,255,0.15)', color: '#fff', border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.3)', borderRadius: 4, textDecoration: 'none', transition: 'var(--transition)', letterSpacing: '0.5px' }}
          >
            {lang === 'th' ? nav.reserve.th : nav.reserve.en}
          </a>
        </div>
      </div>
    </nav>
  )
}
