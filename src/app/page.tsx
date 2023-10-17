"use client"

import Navbar from '@/components/common/navbar'
import ThemeButton from '@/components/common/theme-button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <ThemeButton />
    </main>
  )
}
