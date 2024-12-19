import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientLayout } from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vipqiv Lab',
  description: 'インターネットマーケティング、SEO、サイト制作、Webサービス開発に特化したクリエイティブ集団',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} pt-16`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

