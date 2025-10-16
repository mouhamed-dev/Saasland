import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Remplacez "votre-nom-utilisateur" et "nom-du-repo" par les vôtres
const repoName = "Saasland";

export default defineConfig(({ mode }) => ({
  // Chemin de base pour GitHub Pages
  base: `/${repoName}/`,

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
