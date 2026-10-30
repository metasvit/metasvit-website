import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.metasvit.io" }], destination: "https://metasvit.io/:path*", permanent: true }];
  },
};

export default nextConfig;
