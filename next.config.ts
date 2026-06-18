import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.harima-shouji.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Old service detail URLs → new URLs
      { source: '/service/interior', destination: '/service/shop-interior', permanent: true },
      // Old specialized service pages → consolidated service pages
      { source: '/service/cross-wallpaper', destination: '/service/shop-interior', permanent: true },
      { source: '/service/cleaning', destination: '/service/restoration', permanent: true },
      { source: '/service/exit-support', destination: '/service/restoration', permanent: true },
      { source: '/service/demolition', destination: '/service/restoration', permanent: true },
      { source: '/service/maintenance', destination: '/service/shop-interior', permanent: true },
      // v2 routes → canonical root routes
      { source: '/v2', destination: '/', permanent: true },
      { source: '/v2/service/interior', destination: '/service/shop-interior', permanent: true },
      { source: '/v2/service/restoration', destination: '/service/restoration', permanent: true },
      { source: '/v2/company', destination: '/company', permanent: true },
      { source: '/v2/area', destination: '/area', permanent: true },
      { source: '/v2/faq', destination: '/faq', permanent: true },
      { source: '/v2/contact', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
