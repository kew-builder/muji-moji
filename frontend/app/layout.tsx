import type { Metadata } from 'next'
import { DM_Sans, Noto_Sans_Thai, Cormorant_Garamond } from 'next/font/google'
import { AppProvider } from '@/context/AppContext'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-thai',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MujiMoji Café',
  description: 'A quiet space for slow mornings. Specialty coffee, house-baked pastries, and the sound of nothing in particular.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${notoSansThai.variable} ${cormorant.variable}`}>
      <head>
        <style id="heading-style">{`.section-head h2 { font-weight: 300; letter-spacing: -1.5px; font-size: 48px; }`}</style>
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
