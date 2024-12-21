'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ServiceCard } from './ServiceCard'
import { services } from '@/config/services'
import { staggerContainer } from '@/config/animations'

export const ServiceList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1
              }
            }
          }}
        >
          <ServiceCard
            {...service}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
} 