import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: './tsconfig.json',
      include: ['./packages/components']
    })
  ],
  build: {
    target: 'modules',
    minify: false,
    outDir: resolve(__dirname, 'dist/es'),
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true
      }
    }
  }
})
