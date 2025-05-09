/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  // swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["api.placeholder.com"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
