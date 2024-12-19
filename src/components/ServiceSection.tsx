import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Megaphone, Cpu, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { 
    icon: <Megaphone className="w-12 h-12 text-[#00ff00]" />,
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
    icon: <Cpu className="w-12 h-12 text-[#00ff00]" />,
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
  // ... 他のサービス���同様に詳細を追加
]

export const ServiceSection = ({ id, className }: { id?: string, className?: string }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className={`${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => {
              const isExpanded = expandedIndex === index

              return (
                <motion.div
                  key={index}
                  className="bg-black/80 border border-[#00ff00] rounded-lg overflow-hidden hover:bg-[#00ff00]/10 transition-colors"
                  layout
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full p-8 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-[#00ff00] font-mono text-xl mb-2">{service.title}</h3>
                          <p className="text-[#00ff00]/80 font-mono text-sm">{service.description}</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-[#00ff00] transition-transform ${
                          isExpanded ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { duration: 0.3 }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { duration: 0.3 }
                        }}
                        className="px-6 pb-6 overflow-hidden"
                      >
                        <div className="md:grid md:grid-cols-2 gap-8">
                          <motion.div layout="position" className="mb-6 md:mb-0">
                            <h4 className="text-[#00ff00] font-mono text-xl mb-4">詳細情報</h4>
                            <ul className="space-y-2 text-[#00ff00]/80 font-mono list-disc list-inside">
                              {service.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                          <motion.div layout="position">
                            <h4 className="text-[#00ff00] font-mono text-xl mb-4">実績例</h4>
                            <div className="bg-black/20 border border-[#00ff00]/20 rounded-lg p-4 text-[#00ff00]/80 font-mono">
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
      </div>
    </div>
  )
}

