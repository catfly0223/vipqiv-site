import { motion } from 'framer-motion'
import { ContactSection } from '@/components/features/contact/ContactSection'
import GlitchText from '@/components/GlitchText'
import { fadeInUp, matrixReveal } from '@/config/animations'

export const HomeContactSection = () => {
  return (
    <section id="contact" className="relative py-20">
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
              Contact
            </GlitchText>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-[#00ff00]/80 font-mono text-center max-w-2xl"
          >
            サービスに関するご質問、お見積もりのご依頼など、お気軽にお問い合わせください。
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2
              }
            }
          }}
        >
          <ContactSection />
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