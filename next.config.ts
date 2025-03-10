/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:lang(en|zh|ja)/top', // 匹配 /en/top, /zh/top, /ja/top
        destination: '/:lang/pc/top',   // 重写到内部的 /lang/pc/top
      },
      {
        source: '/:lang(en|zh|ja)/route/:path*', // 匹配 /lang/route/* 通配符
        destination: '/:lang/pc/route/:path*',   // 重写到 /lang/pc/route/*
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ]
  },
  
}

module.exports = nextConfig