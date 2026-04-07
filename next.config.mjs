/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.pravatar.cc",
      "images.unsplash.com",
      "res.cloudinary.com", // ✅ correct Unsplash domain
    ],
  },
};

export default nextConfig;