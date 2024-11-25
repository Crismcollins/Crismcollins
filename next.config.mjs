/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,

  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
