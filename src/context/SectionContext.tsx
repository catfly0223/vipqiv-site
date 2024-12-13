'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface SectionContextType {
  currentSection: number
  setCurrentSection: (section: number) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'services', 'contact']
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      const currentIndex = sections.findIndex((id) => {
        const element = document.getElementById(id)
        if (!element) return false
        
        const rect = element.getBoundingClientRect()
        const sectionTop = rect.top + scrollPosition
        const sectionCenter = sectionTop + (rect.height / 2)
        const viewportCenter = scrollPosition + (windowHeight / 2)
        
        return Math.abs(sectionCenter - viewportCenter) < windowHeight / 2
      })

      if (currentIndex !== -1) {
        setCurrentSection(currentIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => {
  const context = useContext(SectionContext)
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider')
  }
  return context
} 