/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Ensure environment variables are available at build time
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  // Add any experimental features if needed
  experimental: {
    // Enable if needed
    // serverActions: true,
  },
};

module.exports = nextConfig;
