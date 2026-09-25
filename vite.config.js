import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// TODO: Replace 'your-repo-name' with your actual GitHub repository name
// e.g. if your repo URL is https://github.com/panasasonu/portfolio → base: '/portfolio/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
