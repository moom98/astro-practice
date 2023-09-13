import { defineConfig } from "astro/config";
import compress from "astro-compress";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://ymkmy98.github.io",
  base: "/astro_practice",
  outDir: "./dist",
  build: {
    format: "file",
  },
  server: {
    open: true,
  },
  integrations: [
    compress({
      CSS: true,
      HTML: false,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    relativeLinks(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".")[1];
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = "fonts";
            }
            if (/png|jpe?g|svg|gif|webp|tiff|bmp|ico/i.test(extType)) {
              extType = "images";
            }
            if (extType === "css") {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          },
        },
        entryFileNames: "assets/js/[name].js",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/foundation/_mixin.scss";`,
        },
      },
    },
  },
});
