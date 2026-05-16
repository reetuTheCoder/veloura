/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  basePath: '/veloura',
  assetPrefix: '/veloura/',
};

export default nextConfig;