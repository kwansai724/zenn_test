/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Syntax error: "next/font" requires SWC although Babel is being used due to a custom babel config being present.
  // swcMinify: false, // 上記エラーが発生したらコメントアウト外す
}

module.exports = nextConfig
