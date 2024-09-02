import { defineConfig } from "vite";
import litCss from "vite-plugin-lit-css"
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [
    litCss(),
  ],
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
});
