const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">vipqiv Lab</h3>
            <p className="text-gray-400">クリエイティブ集団として、最高のデジタルソリューションを提供します。</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">お問い合わせ</h4>
            <p className="text-gray-400">メール: info@vipqiv-lab.com</p>
            <p className="text-gray-400">電話: 03-1234-5678</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">フォローする</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 vipqiv Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

