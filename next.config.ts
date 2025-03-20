/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["github-readme-stats.vercel.app"],
        dangerouslyAllowSVG: true, // Allow SVGs
        contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;", // Add CSP for security
    },
};

module.exports = nextConfig;
