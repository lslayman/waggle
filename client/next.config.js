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
          destination: "http://127.0.0.1:5555/:path*",
        },
      ];
    },
  };
  
  // module.exports = nextConfig