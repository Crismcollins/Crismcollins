/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/portfolio',
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
