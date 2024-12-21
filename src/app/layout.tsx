import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/ClientLayout'
import { metadata as siteMetadata } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ...siteMetadata,
  icons: {
    icon: '/favicon.ico',  // 基本のfavicon
  },
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

