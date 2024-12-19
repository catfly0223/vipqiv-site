'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: 'ホーム', href: '/#home' },
    { name: 'サービス', href: '/#services' },
    { name: 'お問い合わせ', href: '/#contact' }
  ]

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '')
      const targetElement = document.getElementById(targetId)
      
      if (pathname !== '/') {
        router.push('/')
        setTimeout(() => {
          targetElement?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        targetElement?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-[#00ff00]/20">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-[#00ff00] font-mono text-xl hover:text-[#00ff00]/80 transition-colors"
          onClick={(e) => handleNavigation(e, '/')}
        >
          vipqiv Lab
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#00ff00] font-mono hover:text-[#00ff00]/80 transition-colors"
              onClick={(e) => handleNavigation(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-[#00ff00]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black/95 border-[#00ff00]/20">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#00ff00] font-mono hover:text-[#00ff00]/80 transition-colors"
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default Header

