/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export to disable image optimization
  },
};

module.exports = nextConfig;