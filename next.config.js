/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "rb.gy",
      "www.themoviedb.org",
      "i.ibb.co",
    ],
  },
};
