/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    disableStaticImages: true
  },
  transpilePackages: ["framer-motion"],
  webpack(config) {
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/bharathandshaurya' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bharathandshaurya/' : '',
};

export default nextConfig
