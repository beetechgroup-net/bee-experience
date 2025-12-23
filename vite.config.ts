import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

// Plugin para copiar 404.html para o build
const copy404Plugin = () => {
  return {
    name: 'copy-404',
    writeBundle() {
      copyFileSync(
        path.resolve(__dirname, 'public/404.html'),
        path.resolve(__dirname, 'dist/404.html')
      )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

