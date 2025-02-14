import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
        usePolling: true,
    },
    proxy: {
        '/api': {
            target: 'http://backend:5000',
        },
    },
  },
});
