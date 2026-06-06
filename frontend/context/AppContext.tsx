'use client'

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react'
import type { Lang } from '@/lib/translations'

type HeroStyle = 'fullscreen' | 'split' | 'minimal'
type Theme = 'warm' | 'forest' | 'dark'
type HeadingWeight = 'light' | 'regular' | 'bold'

interface Tweaks {
  theme: Theme
  heroStyle: HeroStyle
  headingWeight: HeadingWeight
}

interface AppContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  tweaks: Tweaks
  setTweak: <K extends keyof Tweaks>(key: K, val: Tweaks[K]) => void
}

const AppContext = createContext<AppContextValue | null>(null)

const DEFAULTS: Tweaks = { theme: 'warm', heroStyle: 'fullscreen', headingWeight: 'light' }

const THEME_MAP: Record<Theme, string> = { warm: '', forest: 'forest', dark: 'dark' }

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS)

  const setTweak = <K extends keyof Tweaks>(key: K, val: Tweaks[K]) => {
    setTweaks(prev => ({ ...prev, [key]: val }))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', THEME_MAP[tweaks.theme])
  }, [tweaks.theme])

  useEffect(() => {
    const w = tweaks.headingWeight === 'light' ? '300' : tweaks.headingWeight === 'regular' ? '500' : '700'
    const ls = tweaks.headingWeight === 'light' ? '-1.5px' : '-0.5px'
    const fs = tweaks.headingWeight === 'light' ? '48px' : '40px'
    document.documentElement.style.setProperty('--heading-weight', w)
    const el = document.getElementById('heading-style')
    if (el) el.textContent = `.section-head h2 { font-weight: ${w}; letter-spacing: ${ls}; font-size: ${fs}; }`
  }, [tweaks.headingWeight])

  const value = useMemo(
    () => ({ lang, setLang, tweaks, setTweak }),
    [lang, tweaks]
  )

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}

export function useThaiFont() {
  const { lang } = useApp()
  return lang === 'th' ? 'var(--font-noto-thai)' : undefined
}
