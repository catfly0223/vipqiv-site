import { Service } from '@/types/service'
import { Megaphone, Cpu, Layers, Bot } from 'lucide-react'
import React from 'react'

export const services: Service[] = [
  { 
    icon: React.createElement(Megaphone, { className: "w-12 h-12 text-[#00ff00]" }),
    title: 'ウェブ制作', 
    description: '最新のトレンドを取り入れたウェブサイトの制作',
    details: [
      '最新のフレームワークを活用したモダンな開発',
      'レスポンシブデザインの実装',
      'パフォーマンス最適化',
      'アクセシビリティ対応',
      'SEOフレンドリーな構造設計'
    ]
  },
  { 
    icon: React.createElement(Cpu, { className: "w-12 h-12 text-[#00ff00]" }),
    title: 'SEO', 
    description: 'サイトの検索順位を向上させるSEO戦略の立案と実行',
    details: [
      'キーワード分析と戦略立案',
      'オンページSEOの最適化',
      'コンテンツマーケティング',
      '検索順位のモニタリングと改善',
      'アナリティクスレポートの作成'
    ]
  },
  { 
    icon: React.createElement(Layers, { className: "w-12 h-12 text-[#00ff00]" }),
    title: 'マーケティング', 
    description: 'デジタルマーケティング戦略の立案から実行まで',
    details: [
      'マーケティング戦略の立案',
      'SNSマーケティング',
      'コンテンツマーケティング',
      'メールマーケティング',
      'アナリティクスと改善'
    ]
  },
  {
    icon: React.createElement(Bot, { className: "w-12 h-12 text-[#00ff00]" }),
    title: 'AI関連',
    description: '最新のAI技術を活用したソリューションの提供',
    details: [
      '自然言語処理の実装',
      '機械学習モデルの開発',
      'AIチャットボットの構築',
      'ビジネスプロセスの自動化',
      'データ分析と予測モデリング'
    ]
  }
] 