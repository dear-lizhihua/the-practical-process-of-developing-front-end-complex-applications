import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const build = {
  // manifest: true,
  minify: false,
  rollupOptions: {
    external: [
      'lodash',
      'vue',
    ],
  }
}
if (process.env.APP_ENV !== 'development') {
  build.lib = {
    formats: ['esm'],
    entry: {
      index: resolve(__dirname, 'src/index.js'),
      // internal: resolve(__dirname, 'src/internal.js'),
    },
    fileName: (format, entryName) => `${entryName}.${format}.js`,
    // name: 'ComponentName',
  }
  // build.sourcemap = 'inline'
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build,
})
