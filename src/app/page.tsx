'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import { VideoSection } from '@/components/VideoSection'
import { ProjectSection } from '@/components/ProjectSection'
import { ServiceSection } from '@/components/ServiceSection'
import { ContactSection } from '@/components/ContactSection'
import { MainTitle } from '@/components/MainTitle'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTitleVisible, setIsTitleVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      setIsTitleVisible(scrollPosition < windowHeight * 0.05)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0">
        <VideoSection />
      </div>

      <div 
        ref={containerRef} 
        className="relative min-h-screen overflow-y-auto"
        style={{ 
          scrollBehavior: 'smooth',
          backgroundColor: 'transparent'
        }}
      >
        <section id="home" className="h-screen relative flex items-center justify-center">
          <div className="z-10">
            <MainTitle isVisible={isTitleVisible} />
          </div>
        </section>
        
        <div className="relative z-10">
          <ProjectSection id="projects" className="min-h-screen backdrop-blur-sm bg-black/30" />
          <ServiceSection id="services" className="min-h-screen backdrop-blur-sm bg-black/30" />
          <ContactSection id="contact" className="min-h-screen backdrop-blur-sm bg-black/30" />
        </div>
      </div>
    </>
  )
}

