/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    reactStrictMode: true,

};
module.exports = {
    images: {
      unoptimized: true, // 禁用图片优化
    },
  };

export default nextConfig;
