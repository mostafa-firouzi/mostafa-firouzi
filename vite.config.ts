import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/firouzi-portfolio/', // exakt der Repo-Name auf GitHub
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
