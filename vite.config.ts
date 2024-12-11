/// <reference types="vite/client" />
/// <reference types="vitest/config" />
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: "./src/test/setup.ts",
  }
} as UserConfig)
