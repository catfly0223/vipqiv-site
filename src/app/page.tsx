'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'
import { ProjectSection } from '@/components/ProjectSection'
import { ServiceSection } from '@/components/ServiceSection'
import { ContactSection } from '@/components/ContactSection'
import { MainTitle } from '@/components/MainTitle'
import LainBackground from '@/components/LainBackground'
import GlitchText from '@/components/GlitchText'

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
      {/* <NavBar /> */}
      <LainBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <GlitchText className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-4 tracking-wider">
          vipqiv Lab
        </GlitchText>
        <div className="text-[#00ff00] font-mono text-xl mb-16">
          Internet Marketing
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20">
        <div className="flex flex-col items-center">
          <GlitchText className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-12 tracking-wider">
            Services
          </GlitchText>
        </div>
        <ServiceSection id="services" className="bg-transparent" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="flex flex-col items-center">
          <GlitchText className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-12 tracking-wider">
            Contact
          </GlitchText>
        </div>
        <ContactSection id="contact" className="bg-transparent" />
      </section>
    </div>
  )
}

