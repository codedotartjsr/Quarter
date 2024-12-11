/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',           // The path you’re redirecting from
        destination: '/home/page-three', // The path you’re redirecting to
        permanent: true,       // Indicates if the redirect is permanent (301) or temporary (307)
      },
    ];
  },
}

module.exports = nextConfig
