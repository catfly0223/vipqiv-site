import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          vipqiv Lab
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">ホーム</Link></li>
          <li><Link href="/services" className="text-gray-600 hover:text-gray-800 transition-colors">サービス</Link></li>
          <li><Link href="/portfolio" className="text-gray-600 hover:text-gray-800 transition-colors">ポートフォリオ</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

