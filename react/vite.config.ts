import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const __dirname = path.resolve(import.meta.url);
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": path.resolve(root, "components"),
      "types": path.resolve(root, "types"),
      "assets": path.resolve(root, "assets"),
      "utils": path.resolve(root, "utils")
    },
  },
})
