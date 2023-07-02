import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ?? "https://browswithnana.com",
  experimental: {
    assets: true,
  },
  base: config.site.base_path ?? "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    mdx(),
    react(),
  ],
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
