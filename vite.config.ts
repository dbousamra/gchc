import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is '/' for serving from a custom domain root (gcheartcare.com).
// For GitHub Pages *project* hosting (gcheartcare.github.io/gchc/) build with
// `vite build --base=/gchc/` instead.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
