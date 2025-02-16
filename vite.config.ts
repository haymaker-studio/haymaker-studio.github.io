import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  outDir: 'dist',
  plugins: [react()],
  base: '/haymaker-studio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
