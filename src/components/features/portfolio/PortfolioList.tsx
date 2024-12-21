import { useState } from 'react'
import { motion } from 'framer-motion'
import { PortfolioCard } from './PortfolioCard'
import { PortfolioModal } from '@/components/features/portfolio/PortfolioModal'
import { PortfolioFilter, PortfolioItem } from '@/types/portfolio'
import { staggerContainer } from '@/config/animations'

interface PortfolioListProps {
  items: PortfolioItem[]
}

export const PortfolioList = ({ items }: PortfolioListProps) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [filter, setFilter] = useState<PortfolioFilter>({
    category: null,
    technology: null
  })

  const filteredItems = items.filter(item => {
    if (filter.category && item.category !== filter.category) return false
    if (filter.technology && !item.technologies.includes(filter.technology)) return false
    return true
  })

  const categories = Array.from(new Set(items.map(item => item.category)))
  const technologies = Array.from(new Set(items.flatMap(item => item.technologies)))

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <select
          value={filter.category || ''}
          onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value || null }))}
          className="bg-black border border-[#00ff00]/20 text-[#00ff00] font-mono rounded px-4 py-2"
        >
          <option value="">すべてのカテゴリー</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          value={filter.technology || ''}
          onChange={(e) => setFilter(prev => ({ ...prev, technology: e.target.value || null }))}
          className="bg-black border border-[#00ff00]/20 text-[#00ff00] font-mono rounded px-4 py-2"
        >
          <option value="">すべての技術</option>
          {technologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            onSelect={setSelectedItem}
          />
        ))}
      </motion.div>

      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
} 