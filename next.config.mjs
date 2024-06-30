/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "53.fs1.hubspotusercontent-na1.net",
      },
    ],
  },
};

export default nextConfig;
