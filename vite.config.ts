import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` MUST match the path the site is served from.
// Currently deployed to GitHub Pages project hosting at
// https://dbousamra.github.io/gchc/ , so base is '/gchc/'.
// When a custom domain (e.g. gcheartcare.com) is live at the root, switch this
// to '/' and add a `public/CNAME` file containing the domain.
export default defineConfig({
  base: '/gchc/',
  plugins: [react()],
})
