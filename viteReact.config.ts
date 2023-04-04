import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  root: "reactComponent",
  publicDir: false,
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Some React Component",
      fileName: "some-react-component",
    },
    rollupOptions: {
      output: {
        dir: "public/distReact",
      },
    },
  },
});
