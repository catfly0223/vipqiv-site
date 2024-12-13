import Image from 'next/image'

const projects = [
  {
    title: 'Eコマースサイトのリニューアル',
    description: '大手小売業者のEコマースサイトを最新のテクノロジーでリニューアル。売上が30%増加。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'スタートアップのブランディング',
    description: 'テクノロジースタートアップの包括的なブランディングとマーケティング戦略を実施。資金調達に成功。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'AIチャットボットの開発',
    description: '金融機関向けにカスタムAIチャットボットを開発。顧客サポート効率が50%向上。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'グローバル企業のSEO最適化',
    description: '多国籍企業のウェブサイトSEOを最適化。オーガニック検索トラフィックが3倍に増加。',
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">ポートフォリオ</h1>
      <p className="text-xl text-gray-600 mb-8">
        私たちが手がけた主要プロジェクトをご紹介します。各プロジェクトで、クライアントのニーズに合わせたソリューションを提供し、素晴らしい結果を達成しました。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

