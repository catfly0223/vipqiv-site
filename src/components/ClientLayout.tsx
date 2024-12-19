'use client'

import { SectionProvider } from '@/context/SectionContext'
import Header from '@/components/Header'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <SectionProvider>
      <Header />
      {children}
    </SectionProvider>
  )
} 