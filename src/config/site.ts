import { Metadata } from 'next'

export const siteConfig = {
  name: 'vipqiv Lab',
  description: 'インターネットマーケティング、SEO、サイト制作、Webサービス開発に特化したクリエイティブ集団',
  url: 'https://vipqiv-lab.com',
  ogImage: 'https://vipqiv-lab.com/og.jpg',
  contact: {
    email: 'sales@vipqiv.jp',
    phone: 'Tobe Confirmed'
  },
  links: {
    twitter: 'https://twitter.com/vipqiv_lab',
    facebook: 'https://facebook.com/vipqiv.lab',
    linkedin: 'https://linkedin.com/company/vipqiv-lab',
    github: 'https://github.com/vipqiv-lab'
  }
} as const

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
} 