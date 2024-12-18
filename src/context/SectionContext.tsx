'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface SectionContextType {
  currentSection: number
  setCurrentSection: (section: number) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0)

  const handleScroll = useCallback(() => {
    const sections = ['home', 'services', 'contact']
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const threshold = windowHeight * 0.3 // 画面の30%をしきい値として使用

    // 各セクションの位置を確認
    const sectionPositions = sections.map(id => {
      const element = document.getElementById(id)
      if (!element) return null

      const rect = element.getBoundingClientRect()
      return {
        id,
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height
      }
    }).filter(Boolean)

    // 現在のセクションを特定
    const currentIndex = sectionPositions.findIndex((section, index) => {
      if (!section) return false

      // 最初のセクション
      if (index === 0 && section.top <= threshold) {
        return section.bottom > 0
      }

      // 最後のセクション
      if (index === sectionPositions.length - 1 && section.bottom >= windowHeight) {
        return section.top < windowHeight
      }

      // 中間のセクション
      return section.top <= threshold && section.bottom >= threshold
    })

    if (currentIndex !== -1) {
      setCurrentSection(currentIndex)
    }
  }, []) // 空の依存配列

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期状態を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]) // handleScrollを依存配列に追加

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