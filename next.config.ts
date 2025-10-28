// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   images: {
//     domains: ["dxbperfume.co.uk"], // Add your external hostname here
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ reactStrictMode: true,
  images: {
    /**
     * The `domains` property is deprecated.
     * Using `remotePatterns` is the recommended approach.
     * domains: ["dxbperfume.co.uk"],
     */
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Wildcard for all hostnames
      },
      {
        protocol: "https",
        hostname: "**", // Wildcard for all hostnames
      },
    ],
  },
};

export default nextConfig;
