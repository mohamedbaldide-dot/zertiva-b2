import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false
  },

  plugins: [
    viteStaticCopy({
      targets: [
        { src: "data", dest: "" },
        { src: "images", dest: "" },
        { src: "sounds", dest: "" },

        { src: "*.js", dest: "" },

        { src: "*.css", dest: "" },

        { src: "*.html", dest: "" },

        { src: "premium.json", dest: "" }
      ]
    })
  ]
});