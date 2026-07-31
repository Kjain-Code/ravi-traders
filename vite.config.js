import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // during `npm run dev`, calls to /api/* go to the Express backend
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
