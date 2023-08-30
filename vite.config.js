import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  proxy: {
    "/product": "https://bandagebyomar-api.onrender.com",
    "/auth": "https://bandagebyomar-api.onrender.com"
  }
}
})


