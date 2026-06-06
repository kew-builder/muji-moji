import type { CSSProperties } from 'react'

interface SkProps {
  width?: string | number
  height?: string | number
  rounded?: number | string
  style?: CSSProperties
}

export default function Sk({ width = '100%', height = 16, rounded = 4, style }: SkProps) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: rounded,
        background: 'var(--border-light)',
        flexShrink: 0,
        ...style,
      }}
    />
  )
}
