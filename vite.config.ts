import reactRefresh from '@vitejs/plugin-react-refresh'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'vite'
import { basePath } from './bathPath'

// console.log(process.env)
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: process.env.NODE_ENV !== 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactFamily: [
            'react-router-dom',
            'styled-components',
            'react-icons',
            'react-dropzone',
          ],
          rtk: ['react-redux', '@reduxjs/toolkit'],
          others: ['lodash', 'web-vitals', 'date-fns'],
          firebase: [
            'firebase/app',
            'firebase/auth',
            'firebase/analytics',
            'firebase/firestore/lite',
          ],
          udon: ['file-saver', 'crypto-js'],
        },
      },
    },
  },
  // すべてのファイルにJSXヘルパーを挿入
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
  plugins: [reactRefresh(), terser({ compress: { drop_console: true } })],
  root: 'client',
  resolve: {
    // viteのホットリロードのために、/で始める必要がある。
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    VITE_DEFINE_BASE_PATH: JSON.stringify(basePath),
  },
  base: `/${basePath}/`,
  server: {
    host: true,
    port: 3000,
  },
})
