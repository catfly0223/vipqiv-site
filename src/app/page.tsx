'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ProjectSection } from '@/components/ProjectSection'
import { ServiceSection } from '@/components/ServiceSection'
import { ContactSection } from '@/components/ContactSection'
import { MainTitle } from '@/components/MainTitle'

const VideoSection = dynamic(() => import('@/components/VideoSection'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-900" />
  )
})

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTitleVisible, setIsTitleVisible] = useState<boolean>(true)
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // スクロール進捗を0-1の範囲で計算（より遅めに効果を適用）
      const progress = Math.min(scrollPosition / (windowHeight * 1.5), 1)
      setScrollProgress(progress)
      
      // タイトルの表示制御
      setIsTitleVisible(scrollPosition < windowHeight * 0.05)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 固定背景レイヤー */}
      <div className="fixed inset-0 w-full h-full">
        <VideoSection scrollProgress={scrollProgress} />
      </div>

      {/* スクロール可能なコンテンツレイヤー */}
      <div className="absolute inset-0 w-full min-h-screen">
        {/* ファーストビューセクション */}
        <section 
          id="home" 
          className="h-screen flex items-center justify-center"
        >
          <div className="z-10">
            <MainTitle isVisible={isTitleVisible} />
          </div>
        </section>

        {/* コンテンツセクション */}
        <div>
          <ServiceSection id="services" className="bg-transparent" />
          <ContactSection id="contact" className="bg-transparent" />
        </div>
      </div>
    </>
  )
}

