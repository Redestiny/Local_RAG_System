import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // 开启独立部署模式，配合Dockerfile
};

export default nextConfig;
