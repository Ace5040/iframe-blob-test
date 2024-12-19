import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        map: 'src/map.js'
      },
      output: {
        entryFileNames: '[name]/assets/[name].js',
        chunkFileNames: '[name]/assets/[name].js',
        assetFileNames: '[name]/assets/[name].[ext]'
      }
    },
    sourcemap: true,
    minify: false,
  },
});
