'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactSection = ({ id, className }: { id?: string, className?: string }) => {
  const [mounted, setMounted] = useState(false)
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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // 初期レンダリング時はnullを返す
  }

  const initialFormState = {
    name: '',
    email: '',
    message: ''
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id={id} className={`min-h-screen py-20 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">お問い合わせ</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={async (e) => {
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
              setFormData(initialFormState)
            } catch (error) {
              setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'エラーが発生しました',
              })
            } finally {
              setIsSubmitting(false)
            }
          }}
          className="max-w-lg mx-auto space-y-6 bg-white rounded-lg p-8 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-gray-700">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

