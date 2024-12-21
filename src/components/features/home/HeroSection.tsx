import { motion } from 'framer-motion'
import GlitchText from '@/components/GlitchText'
import { matrixReveal, fadeInUp, slideIn } from '@/config/animations'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 1,
              staggerChildren: 0.2
            }
          }
        }}
        initial="initial"
        animate="animate"
        className="text-center space-y-8"
      >
        <motion.div variants={matrixReveal}>
          <GlitchText glitchInterval={1000} glitchProbability={0.8} className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-4 tracking-wider">
            vipqiv Lab
          </GlitchText>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="relative"
        >
          <div className="text-[#00ff00] font-mono text-xl mb-16">
            Internet Marketing
          </div>
        </motion.div>

        <motion.div
          variants={slideIn}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#00ff00]/10 border border-[#00ff00] text-[#00ff00] font-mono rounded-lg hover:bg-[#00ff00]/20 transition-colors"
            onClick={() => {
              const servicesSection = document.getElementById('services')
              servicesSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            サービスを見る
          </motion.button>

          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-[#00ff00]/60 font-mono text-sm"
          >
            スクロールして詳細を見る
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {/* ここにLainBackgroundコンポーネントを配置 */}
      </motion.div>
    </section>
  )
} 