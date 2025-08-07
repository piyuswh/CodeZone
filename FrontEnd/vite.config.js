import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment variables
const backendUrl = process.env.VITE_BACKEND_URL

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/userdata': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
