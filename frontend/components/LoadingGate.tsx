'use client'

import { useState, useEffect, type ReactNode } from 'react'

interface Props {
  skeleton: ReactNode
  children: ReactNode
}

export default function LoadingGate({ skeleton, children }: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return <>{loading ? skeleton : children}</>
}
