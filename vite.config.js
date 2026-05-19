import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/luminatask/',
  build: {
    outDir: 'docs', // هنا جعلنا المخرجات باسم docs ليتوافق مع خيارات GitHub
  }
})