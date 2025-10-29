// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import { fileURLToPath } from "url";

export default defineConfig({
  site: process.env.ASTRO_SITE || undefined,
  trailingSlash: "always",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [tailwind(), mdx()],
  vite: {
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".astro"],
    },
  },
});
