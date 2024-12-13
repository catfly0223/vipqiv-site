'use client'

import { useSection } from '@/context/SectionContext'

const navItems = [
  { name: 'ホーム', id: 'home' },
  { name: 'プロジェクト', id: 'projects' },
  { name: 'サービス', id: 'services' },
  { name: 'お問い合わせ', id: 'contact' }
]

export const SideNavigation = () => {
  const { currentSection, setCurrentSection } = useSection()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, index: number) => {
    e.preventDefault()
    setCurrentSection(index)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id, index)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            >
              <span className="sr-only">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

