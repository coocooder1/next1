/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode: true,
    basePath: '/next1/public',
  assetPrefix: '/next1/public/',
};
module.exports = {
    images: {
      unoptimized: true, // 禁用图片优化
    },
  };

export default nextConfig;
