import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Chemin de base pour GitHub Pages (remplacez par votre nom de repo)
  base: "/Saasland/",
  
  server: {
    host: "::",  // permet d'accéder au serveur sur le réseau local
    port: 8080,
    open: true,  // ouvre automatiquement le navigateur
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // raccourci pour les imports
    },
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "chunk-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.css"; // CSS global
          }
          return "asset-[name][extname]";
        },
      },
    },
  },
}));
