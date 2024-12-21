'use client'

import { motion } from 'framer-motion'
import { ContactForm } from './ContactForm'

interface ContactSectionProps {
  id?: string
  className?: string
}

export const ContactSection = ({ id, className }: ContactSectionProps) => {
  return (
    <div className={`${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 