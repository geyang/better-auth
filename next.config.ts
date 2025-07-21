import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      }
    ]
  },
  allowedDevOrigins: [
    'ge-authkit-dev.ngrok.app',
    'ge-authkit-api-dev.ngrok.app',
  ]
};

export default nextConfig;
