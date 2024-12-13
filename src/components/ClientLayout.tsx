'use client'

import { SideNavigation } from '@/components/SideNavigation'
import { SectionProvider } from '@/context/SectionContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <SectionProvider>
      <SideNavigation />
      {children}
    </SectionProvider>
  )
} 