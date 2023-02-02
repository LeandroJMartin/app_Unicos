/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'unicos.mayacomunicacao.com.br'],
  },
};

module.exports = nextConfig;
