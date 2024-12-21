'use client'

import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/features/home/HeroSection'
import { HomeServiceSection } from '@/components/features/home/HomeServiceSection'
import { HomeContactSection } from '@/components/features/home/HomeContactSection'
import LainBackground from '@/components/LainBackground'

export default function Home() {
  const [isTitleVisible, setIsTitleVisible] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      setIsTitleVisible(scrollPosition < windowHeight * 0.05)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <LainBackground />
      <HeroSection />
      <HomeServiceSection />
      <HomeContactSection />
    </div>
  )
}

