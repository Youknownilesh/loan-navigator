import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use "/" for Vercel deployment
  // Only use "/loan-navigator-hub/" if deploying to GitHub Pages
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


export default {
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
};

  
}));


