import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: 'サイト作成',
    description: '最新のWeb技術を使用して、美しく機能的なウェブサイトを構築します。レスポンシブデザイン、高速なパフォーマンス、SEOフレンドリーな構造を備えたサイトを提供します。',
  },
  {
    title: 'SEO',
    description: '検索エンジン最適化（SEO）戦略を立案し、実行します。オンページSEO、コンテンツ最適化、バックリンク戦略など、包括的なアプローチでサイトの検索順位を向上させます。',
  },
  {
    title: 'マーケティング',
    description: 'デジタルマーケティング戦略の立案から実行まで支援します。ソーシャルメディアマーケティング、コンテンツマーケティング、メールマーケティングなど、多角的なアプローチでブランドの認知度と顧客獲得を促進します。',
  },
  {
    title: 'AI関連',
    description: '最新のAI技術を活用したソリューションを提供します。自然言語処理、機械学習モデルの開発、AIチャットボットの実装など、ビジネスプロセスの効率化や顧客体験の向上を実現します。',
  },
]

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">サービス</h1>
      <p className="text-xl text-gray-600 mb-8">
        vipqiv Labは、最先端のデジタルソリューションを提供します。私たちの専門知識を活用して、あなたのビジネスを次のレベルへ引き上げましょう。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

