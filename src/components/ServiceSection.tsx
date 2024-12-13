import { motion } from 'framer-motion'

const services = [
  { title: 'ウェブデザイン', description: '最新のトレンドを取り入れた美しいウェブサイトの制作' },
  { title: '3Dモデリング', description: '没入感のある3Dモデルとアニメーションの制作' },
  { title: 'AIソリューション', description: 'ビジネスプロセスを最適化するAIソリューションの開発' },
  { title: 'VR/AR開発', description: '革新的なVR/ARアプリケーションの設計と開発' },
]

export const ServiceSection = ({ id, className }: { id?: string, className?: string }) => {
  return (
    <section id={id} className={`min-h-screen bg-gray-800 text-white py-20 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
