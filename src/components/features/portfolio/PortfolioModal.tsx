import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioItem } from '@/types/portfolio'
import Image from 'next/image'
import { X, Globe, Github } from 'lucide-react'
import { fadeInUp, scaleIn } from '@/config/animations'

interface PortfolioModalProps {
  item: PortfolioItem | null
  onClose: () => void
}

export const PortfolioModal = ({ item, onClose }: PortfolioModalProps) => {
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          exit="initial"
          onClick={e => e.stopPropagation()}
          className="bg-black border border-[#00ff00]/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#00ff00] bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-mono text-[#00ff00] mb-2">{item.title}</h2>
              <p className="text-[#00ff00]/80 font-mono">{item.description}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-mono text-[#00ff00]">課題</h3>
              <p className="text-[#00ff00]/80 font-mono">{item.details.challenge}</p>

              <h3 className="text-xl font-mono text-[#00ff00]">解決策</h3>
              <p className="text-[#00ff00]/80 font-mono">{item.details.solution}</p>

              <h3 className="text-xl font-mono text-[#00ff00]">結果</h3>
              <ul className="list-disc list-inside text-[#00ff00]/80 font-mono space-y-2">
                {item.details.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {result}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex gap-4 pt-4"
            >
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00ff00] hover:text-[#00ff00]/80 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>サイトを見る</span>
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00ff00] hover:text-[#00ff00]/80 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 