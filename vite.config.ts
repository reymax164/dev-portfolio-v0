import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    // Use root '/' when running locally ('serve'), but use repo subpath when building for production ('build')
    base: command === 'serve' ? '/' : '/dev-portfolio-v0/',
  }
})