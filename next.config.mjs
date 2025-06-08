/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures directory-style URLs (important for GitHub Pages)
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // No subpath; you're using a root custom domain
};

export default nextConfig;
