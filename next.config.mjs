/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cwiaktjsoxpvaequbvzr.supabase.co',
      },
    ],
  },
};

export default nextConfig;