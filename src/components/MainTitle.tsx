import { motion } from 'framer-motion'

interface MainTitleProps {
  isVisible: boolean
}

export const MainTitle: React.FC<MainTitleProps> = ({ isVisible }) => {
  return (
    <motion.div
      className="text-blue-800 drop-shadow-lg text-center z-10 relative"
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20,
        transition: { duration: 0.5 }
      }}
    >
      <h1 className="text-6xl font-bold mb-4 text-white">vipqiv Lab</h1>
      <p className="text-2xl text-white">クリエイティブ3Dエクスペリエンス</p>
    </motion.div>
  )
}

