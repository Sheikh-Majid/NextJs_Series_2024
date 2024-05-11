/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/home",
        permanent: false,
      },
      {
        source: "/about/:more",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
