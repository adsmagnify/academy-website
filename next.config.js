/** @type {import('next').NextConfig} */
const nextConfig = {
  // Put the build into /out for static hosting
  output: 'export',

  // App Router + next/image on static hosts
  images: { unoptimized: true },

  // Make /about -> /about/index.html (Apache/OVH friendly)
  trailingSlash: true,

  // Keep your existing settings
  eslint: { ignoreDuringBuilds: true },
  devIndicators: false,
};

module.exports = nextConfig;
