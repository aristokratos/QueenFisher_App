import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // set chunk size limit to 2000kb to avoid warning
    rollupOptions: {
      output: {
        manualChunks: {
          // manually specify chunks to improve chunking
        },
      },
    },
  },
});
