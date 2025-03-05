import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@layout": path.resolve(__dirname, "src/components/layout"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
});
