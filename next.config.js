/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptmized: true,
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
