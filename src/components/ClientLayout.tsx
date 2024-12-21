'use client'

import { SectionProvider } from '@/context/SectionContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <SectionProvider>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-black"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </SectionProvider>
  )
} 