import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { title: '3Dウェブサイト', image: '/placeholder.svg?height=300&width=400&text=3D+Website' },
  { title: 'AIチャットボット', image: '/placeholder.svg?height=300&width=400&text=AI+Chatbot' },
  { title: 'VRエクスペリエンス', image: '/placeholder.svg?height=300&width=400&text=VR+Experience' },
  { title: 'インタラクティブ広告', image: '/placeholder.svg?height=300&width=400&text=Interactive+Ad' },
]

export const ProjectSection = ({ id, className }: { id?: string, className?: string }) => {
  return (
    <section id={id} className={`min-h-screen bg-gray-900 text-white py-20 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

