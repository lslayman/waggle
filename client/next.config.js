/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:5555/:path*",
        }
      ];
    };
    return {
      rewrites,
    };
  };
  
  // module.exports = nextConfig