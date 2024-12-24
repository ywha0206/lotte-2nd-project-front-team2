import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      util: 'rollup-plugin-polyfill-node/polyfills/util',
      stream: "rollup-plugin-polyfill-node/polyfills/stream",
    },
  },
  server: {
    port: 8010,
    proxy: {
      "/v1": {
        target: "http://localhost:9090/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
