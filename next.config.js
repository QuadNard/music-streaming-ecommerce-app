/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['files.stripe.com', 'grngfdjdflpeheocxgkj.supabase.co'],
  },
};

module.exports = nextConfig;
