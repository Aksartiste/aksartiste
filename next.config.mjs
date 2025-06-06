/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  },
  output: "standalone",
  distDir: ".next",
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;



// import path from 'path';
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
//   distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",
//   typescript: {
//     ignoreBuildErrors: true
//   }
// };
// export default nextConfig;