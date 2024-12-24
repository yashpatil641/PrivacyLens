import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"




import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// export default defineConfig({
//   plugins: [
//     react(),
//     crx({ manifest }),
//   ],
// })


export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit (in KB)
  },
  server:{
    proxy:{
      '/api':'http://localhost:6969'
    }
  },
  plugins: [react(),crx({ manifest }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000', // Address of your Express server
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix before forwarding
//       },
//     },
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
