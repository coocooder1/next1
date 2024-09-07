/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
   
    images: {
      unoptimized: true, // 禁用图片优化
    },
    // 这里替换为你的仓库名，例如 'my-repo'
    basePath: '/next1', 
    assetPrefix: '/next1/cook/', // 静态资源路径前缀
  };

export default nextConfig;
