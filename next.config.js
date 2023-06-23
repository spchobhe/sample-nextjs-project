/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,

       // Add basePath
        basePath: '/sample-nextjs-project/',
      output: 'export',
      images: {
    loader: "akamai",
    path: "/sample-nextjs-project/",
  },
}

module.exports = nextConfig
