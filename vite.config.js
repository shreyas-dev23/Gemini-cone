import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext", // Allow modern JavaScript features like top-level await
  },
});
