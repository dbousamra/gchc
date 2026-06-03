import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is set for GitHub Pages project hosting (served from /gchc/).
// Override at build time for a custom domain, e.g. `vite build --base=/`.
export default defineConfig({
  base: '/gchc/',
  plugins: [react()],
})
