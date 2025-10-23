/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'http://13.201.184.160',   // your AWS public IP or domain
    'http://localhost:3000',   // keep localhost too
  ],
}

export default nextConfig
