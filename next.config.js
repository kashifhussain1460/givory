/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { theme: "DEFAULT", currency: "USD" },
  publicRuntimeConfig: { theme: "DEFAULT", currency: "USD" },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ui-lib.com" }, { protocol: "http", hostname: "localhost" }]
  }
};

module.exports = nextConfig;
