import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/goit-react-hw-04-image/',
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
  publicDir: 'public',
});
