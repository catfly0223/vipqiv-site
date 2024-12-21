import { motion } from 'framer-motion'
import { ServiceList } from '@/components/features/services/ServiceList'
import GlitchText from '@/components/ui/GlitchText'
import { fadeInUp, matrixReveal } from '@/config/animations'

export const HomeServiceSection = () => {
  return (
    <section id="services" className="relative py-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <motion.div variants={matrixReveal}>
            <GlitchText 
              glitchInterval={1000} 
              glitchProbability={0.8}
              className="text-4xl md:text-6xl font-mono text-[#00ff00] mb-4 tracking-wider"
            >
              Services
            </GlitchText>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-[#00ff00]/80 font-mono text-center max-w-2xl"
          >
            vipqiv Labは、最先端のデジタルソリューションを提供します。
            私たちの専門知識を活用して、あなたのビジネスを次のレベルへ引き上げましょう。
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2
              }
            }
          }}
        >
          <ServiceList />
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* オプション: 背景エフェクト */}
        </motion.div>
      </motion.div>
    </section>
  )
} 