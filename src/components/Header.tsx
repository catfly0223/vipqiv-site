import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          vipqiv Lab
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-gray-800">ホーム</Link></li>
          <li><Link href="/services" className="text-gray-600 hover:text-gray-800">サービス</Link></li>
          <li><Link href="/portfolio" className="text-gray-600 hover:text-gray-800">ポートフォリオ</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

