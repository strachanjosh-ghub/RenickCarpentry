/** Static export: deploys to any static host (Netlify, Vercel, Cloudflare Pages). */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
