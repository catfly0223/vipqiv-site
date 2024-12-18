/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的アセットのキャッシュ期間を設定
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 