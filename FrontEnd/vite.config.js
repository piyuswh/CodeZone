import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const backurl=import.meta.env.VITE_BACKEND_URL
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/userdata':`${backurl}`,
  }
})
