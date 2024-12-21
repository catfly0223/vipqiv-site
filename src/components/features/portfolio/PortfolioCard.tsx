import { motion } from 'framer-motion'
import Image from 'next/image'
import { PortfolioItem } from '@/types/portfolio'
import { fadeInUp, scaleIn } from '@/config/animations'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface PortfolioCardProps {
  item: PortfolioItem
  onSelect: (item: PortfolioItem) => void
}

export const PortfolioCard = ({ item, onSelect }: PortfolioCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { isInView } = useScrollAnimation(cardRef)

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-black/80 border border-[#00ff00]/20 rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => onSelect(item)}
      tabIndex={0}
      role="button"
      aria-label={`${item.title}のプロジェクト詳細を表示`}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(item)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.div
          variants={scaleIn}
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="text-[#00ff00] font-mono">詳細を見る</span>
        </motion.div>
      </div>

      <motion.div 
        className="p-6"
        variants={fadeInUp}
      >
        <h3 className="text-[#00ff00] font-mono text-xl mb-2">{item.title}</h3>
        <p className="text-[#00ff00]/80 font-mono text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-1 text-xs font-mono bg-[#00ff00]/10 text-[#00ff00] rounded"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
} 