import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["react-router"],
//     },
//   },
//   base: "./",
// });

export default defineConfig({
  plugins: [react()],
  // ✅ remove rollupOptions.external
})
