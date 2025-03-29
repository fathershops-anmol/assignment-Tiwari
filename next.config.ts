/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["sgp1.digitaloceanspaces.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/categories",
        destination:
          "https://fatherstock-cache.b-cdn.net/category/hot-category.json",
      },
      {
        source: "/api/products/:categoryId",
        destination:
          "https://fatherstock-cache.b-cdn.net/category/:categoryId.json",
      },
      {
        source: "/api/product-details/:productId",
        destination:
          "https://fatherstock-cache.b-cdn.net/cache/:productId.json",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/categories",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
        ],
      },
      {
        source: "/api/products/:categoryId",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
        ],
      },
      {
        source: "/api/product-details/:productId",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
