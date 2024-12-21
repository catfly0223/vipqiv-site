import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'エラーが発生しました')
      }

      setStatus({
        type: 'success',
        message: 'メッセージを送信しました。お問い合わせありがとうございます。',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'エラーが発生しました',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/80 border border-[#00ff00]/20 rounded-lg p-8 shadow-lg"
    >
      <div>
        <label htmlFor="name" className="block mb-2 text-[#00ff00] font-mono">
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-black border border-[#00ff00]/40 rounded text-[#00ff00] font-mono focus:ring-2 focus:ring-[#00ff00] focus:border-transparent"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-[#00ff00] font-mono">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-black border border-[#00ff00]/40 rounded text-[#00ff00] font-mono focus:ring-2 focus:ring-[#00ff00] focus:border-transparent"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-[#00ff00] font-mono">
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-black border border-[#00ff00]/40 rounded text-[#00ff00] font-mono focus:ring-2 focus:ring-[#00ff00] focus:border-transparent"
          disabled={isSubmitting}
        />
      </div>

      {status.message && (
        <div
          className={`p-4 rounded ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </Button>
    </motion.form>
  )
} 