import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(), // Plugin ini yang bertugas membaca alias @ dari jsconfig.json
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: false,
      },
      workbox: {
        sourcemap: true,
        globPatterns: [
          "*.{html,ico}",
          "**/*.{js,css,woff,woff2}",
          "**/**/**/*.{png,jpg,webp,svg}",
        ],
      },
      manifest: {
        base: "/",
        name: "The wedding of Dilan & Mila",
        short_name: "Dilan & Mila",
        description: "Sabtu, 08 November 2026",
        theme_color: "rgb(229, 229, 203)",
        background_color: "rgb(60, 42, 33)",
        orientation: "portrait",
        display: "standalone",
        icons: [
          {
            src: "public/assets/img/favicon-logo.png",
            sizes: "71x71",
          }
          // ... tambahkan sisa icon kamu di sini jika ada
        ],
      },
    }),
  ],
});