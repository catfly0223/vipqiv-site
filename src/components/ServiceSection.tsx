import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const services = [
  { 
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
  // ... 他のサービスも同様に詳細を追加
]

export const ServiceSection = ({ id, className }: { id?: string, className?: string }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id={id} className={`min-h-screen py-20 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index
            
            return (
              <motion.div
                key={index}
                layout
                transition={{ 
                  layout: { duration: 0.3 }
                }}
                className={`bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden
                  ${isExpanded ? 'md:col-span-2 z-10' : ''}`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <motion.div layout="position" className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </motion.div>
                  <motion.div
                    layout="position"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="text-white w-6 h-6" />
                  </motion.div>
                </button>
                
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <div className="md:grid md:grid-cols-2 gap-8">
                        <motion.div layout="position" className="mb-6 md:mb-0">
                          <h4 className="text-xl font-semibold mb-4 text-white">詳細情報</h4>
                          <ul className="space-y-2 text-white/90 list-disc list-inside">
                            {service.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div layout="position">
                          <h4 className="text-xl font-semibold mb-4 text-white">実績例</h4>
                          <div className="bg-black/20 rounded-lg p-4 text-white/90">
                            実績例やケーススタディの内容をここに表示します。
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

