import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vitepress']
  },
  plugins: [],
  server: {
    host: true,
    port: 3000
  }
})
