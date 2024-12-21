import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Service } from '@/types/service'
import { fadeInUp, glowPulse, scaleIn } from '@/config/animations'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ServiceCardProps extends Service {
  isExpanded: boolean
  onToggle: () => void
}

export const ServiceCard = ({
  icon,
  title,
  description,
  details,
  isExpanded,
  onToggle
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { isInView } = useScrollAnimation(cardRef)

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="bg-black/80 border border-[#00ff00] rounded-lg overflow-hidden"
    >
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full text-left p-6 flex items-start gap-4"
      >
        <motion.div 
          variants={glowPulse} 
          initial="initial" 
          animate="animate"
          className="flex-shrink-0"
        >
          {icon}
        </motion.div>
        <div className="flex-1">
          <motion.h3 
            variants={scaleIn}
            className="text-[#00ff00] font-mono text-xl mb-2"
          >
            {title}
          </motion.h3>
          <motion.p 
            variants={scaleIn}
            className="text-[#00ff00]/80 font-mono"
          >
            {description}
          </motion.p>
        </div>
        <motion.div 
          className="flex-shrink-0 text-[#00ff00]/80"
          animate={{ 
            rotate: isExpanded ? 180 : 0,
            opacity: isExpanded ? 1 : 0.6
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.1
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="px-6 pb-6 overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={scaleIn}
                initial="initial"
                animate="animate"
                className="mb-6 md:mb-0"
              >
                <h4 className="text-[#00ff00] font-mono text-xl mb-4">詳細情報</h4>
                <ul className="space-y-2 text-[#00ff00]/80 font-mono list-disc list-inside">
                  {details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 