/** tailwind.config.cjs */
module.exports = {
  content: ["./src/**/*.{astro,ts,tsx,js,jsx,md,mdx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.25rem" } },
    extend: {},
  },
  plugins: [],
};
