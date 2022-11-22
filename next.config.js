/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    allowMiddlewareResponseBody: true,
  },
};

module.exports = nextConfig;
