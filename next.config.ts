/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  env: {
    PORT: "4000",
  },
};

export default nextConfig;
