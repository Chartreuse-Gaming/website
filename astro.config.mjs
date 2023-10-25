import { SITE_URL } from "./src/consts.js";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()]
});
