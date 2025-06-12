const nextConfig = {
  images: {
    domains: ["github-readme-stats.vercel.app", "i.imgur.com", "imgur.com"],
    dangerouslyAllowSVG: true, 
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;", // Add CSP for security
  },
};

module.exports = nextConfig;
