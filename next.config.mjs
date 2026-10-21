/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      // Только для разработки в браузерной среде GitHub Codespaces: её прокси подменяет заголовок
      // origin, и Next.js иначе отклоняет все серверные действия (вход, регистрацию, посты).
      // В production список пустой — защита остаётся строгой.
      allowedOrigins: process.env.NODE_ENV === "production" ? [] : ["*.app.github.dev"],
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
