import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import Compress from "astro-compress"
import { defineConfig, sharpImageService } from "astro/config"
import config from "./src/config/config.json"


// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ?? "https://browswithnana.com",
  base: config.site.base_path ?? "https://browswithnana.com/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: sharpImageService(),
    domains: ["astro.build"],
  },
  integrations: [
    sitemap({
      filter: page => ![
        `${config.site.base_url}/404.html`,
        `${config.site.base_url}/read-before-booking`,
        `${config.site.base_url}/thank-you`,
        `${config.site.base_url}/policy-and-guidelines`
      ].includes(page.path),
    }),
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
