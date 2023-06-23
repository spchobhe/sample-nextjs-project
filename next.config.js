/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,

       // Add basePath
        basePath: '/github-pages',
      output: 'export',
      images: {
    loader: "akamai",
    path: "/",
  },
}

module.exports = nextConfig
