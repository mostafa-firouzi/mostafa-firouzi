import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/firouzi-portfolio/",  // Dein GitHub Repo Name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
