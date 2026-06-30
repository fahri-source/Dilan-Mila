import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Menggunakan "/" agar folder assets terbaca dengan aman di root domain Vercel
  base: "/", 
});