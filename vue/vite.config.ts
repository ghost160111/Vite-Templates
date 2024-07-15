import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      components: path.resolve(root, "components"),
      types: path.resolve(root, "types"),
      assets: path.resolve(root, "assets"),
      utils: path.resolve(root, "utils"),
    },
  },
})
