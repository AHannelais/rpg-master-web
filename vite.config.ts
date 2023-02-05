import { resolve, join } from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
//import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  // @ts-ignore
  plugins: [solidPlugin() /*webfontDownload()*/],

  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
  },
});
