/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ['i.postimg.cc', 'api.lorem.space'],
   },
};

module.exports = nextConfig;
