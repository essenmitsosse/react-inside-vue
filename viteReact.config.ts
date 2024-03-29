import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  root: "reactComponent",
  publicDir: false,
  build: {
    sourcemap: true,
    lib: {
      entry: "src/main.jsx",
      name: "Some React Component",
      fileName: "some-react-component",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        dir: "public/distReact",
      },
    },
  },
  define: { "process.env.NODE_ENV": '"development"' },
});
