import { defineConfig } from "astro/config";
import compress from "astro-compress";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://ymkmy98.github.io",
  base: "",
  outDir: "./dist",
  build: {
    format: "file",
    assets: "assets/images",
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
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          leNames: (assetInfo) => {
            let extType = assetInfo.name.split(".").at(-1);
            if (/png|jpe?g|svg|gif|webp|tiff|bmp|ico/i.test(extType)) {
              extType = "images";
            }
            if (/ts|js/i.test(extType)) {
              extType = "script";
            }
            if (/css|scss/i.test(extType)) {
              extType = "css";
            }
            //   if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            //     extType = "fonts";
            //   }
            return `assets/${extType}/[name]-[hash][extname]`;
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
