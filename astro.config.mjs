import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import Compress from "astro-compress"
import { defineConfig, sharpImageService } from "astro/config"
import config from "./src/config/config.json"


// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ?? "https://browswithnana.com",
  base: config.site.base_path ?? "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: sharpImageService(),
    domains: ["astro.build"],
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    Compress(),
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
