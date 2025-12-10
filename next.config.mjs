/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fajitsolutions.com',
          },
        ],
        destination: 'https://www.fajitsolutions.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
