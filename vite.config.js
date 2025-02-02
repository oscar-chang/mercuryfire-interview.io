import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '/imgs': 'src/assets/images',
      }
    },
    build: {
      chunkSizeWarningLimit: 1500
    }
  };
});