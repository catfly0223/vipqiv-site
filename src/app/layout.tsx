import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientLayout } from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vipqiv Lab - クリエイティブ3Dエクスペリエンス',
  description: '最先端の3Dウェブデザインとインタラクティブなユーザーエクスペリエンスを提供するクリエイティブ集団',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

