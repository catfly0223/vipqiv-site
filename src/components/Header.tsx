'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('/#')) {
      // ホームページ内のセクションへのスクロール
      const targetId = href.replace('/#', '')
      const targetElement = document.getElementById(targetId)
      
      if (pathname !== '/') {
        // 別ページにいる場合はまずホームに遷移
        router.push('/')
        // 遷移後にスクロール
        setTimeout(() => {
          targetElement?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // 同じページ内なら直接スクロール
        targetElement?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // 通常のページ遷移
      router.push(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800"
          onClick={(e) => handleNavigation(e, '/')}
        >
          vipqiv Lab
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link 
              href="/#home" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
              onClick={(e) => handleNavigation(e, '/#home')}
            >
              ホーム
            </Link>
          </li>
          <li>
            <Link 
              href="/#services" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
              onClick={(e) => handleNavigation(e, '/#services')}
            >
              サービス
            </Link>
          </li>
          {/*
          <li>
            <Link 
              href="/portfolio" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
              onClick={(e) => handleNavigation(e, '/portfolio')}
            >
              ポートフォリオ
            </Link>
          </li>
          */}
          <li>
            <Link 
              href="/#contact" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
              onClick={(e) => handleNavigation(e, '/#contact')}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

