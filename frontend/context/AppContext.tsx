'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
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

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS)

  const setTweak = <K extends keyof Tweaks>(key: K, val: Tweaks[K]) => {
    setTweaks(prev => ({ ...prev, [key]: val }))
  }

  useEffect(() => {
    const themeMap: Record<Theme, string> = { warm: '', forest: 'forest', dark: 'dark' }
    document.documentElement.setAttribute('data-theme', themeMap[tweaks.theme])
  }, [tweaks.theme])

  useEffect(() => {
    const w = tweaks.headingWeight === 'light' ? '300' : tweaks.headingWeight === 'regular' ? '500' : '700'
    const ls = tweaks.headingWeight === 'light' ? '-1.5px' : '-0.5px'
    const fs = tweaks.headingWeight === 'light' ? '48px' : '40px'
    document.documentElement.style.setProperty('--heading-weight', w)
    const el = document.getElementById('heading-style')
    if (el) el.textContent = `.section-head h2 { font-weight: ${w}; letter-spacing: ${ls}; font-size: ${fs}; }`
  }, [tweaks.headingWeight])

  return (
    <AppContext.Provider value={{ lang, setLang, tweaks, setTweak }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
