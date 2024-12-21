'use client'

import { motion } from 'framer-motion'
import { ServiceList } from './ServiceList'

interface ServiceSectionProps {
  id?: string
  className?: string
}

export const ServiceSection = ({ id, className }: ServiceSectionProps) => {
  return (
    <div className={`${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceList />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 