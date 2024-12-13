import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactSection = ({ id, className }: { id?: string, className?: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // ここで実際のフォーム送信処理を行います
  }

  return (
    <section id={id} className={`min-h-screen bg-gray-900 text-white py-20 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">お問い合わせ</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            送信
          </button>
        </motion.form>
      </div>
    </section>
  )
}

