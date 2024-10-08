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
      assets: path.resolve(root, "assets"),
      components: path.resolve(root, "components"),
      constants: path.resolve(root, "constants"),
      i18n: path.resolve(root, "i18n"),
      store: path.resolve(root, "store"),
      types: path.resolve(root, "types"),
      utils: path.resolve(root, "utils"),
    },
  },
})
