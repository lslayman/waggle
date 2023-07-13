/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = {
    //reactStrictMode: true,
    images: {
      domains: ['dl5zpyw5k3jeb.cloudfront.net'],
    },
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5555/:path*",
        },
      ];
    },
  };
  
  // module.exports = nextConfig