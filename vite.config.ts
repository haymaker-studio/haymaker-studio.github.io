import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  build: {
    assetsDir: 'assets',
    modulePreload: false,
    cssCodeSplit: true,
    sourcemap: false
  },
  plugins: [react()],
})
