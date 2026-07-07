'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function V2Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const shell = document.getElementById('v2-shell')
    if (shell) shell.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div
      id="v2-shell"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        background: '#F6F4EF',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {children}
    </div>
  )
}
