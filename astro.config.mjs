import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://alpes-esport.fr",
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Import variables globally
          additionalData: `@import "@/styles/variables.scss";`
        }
      }
    }
  }
});
