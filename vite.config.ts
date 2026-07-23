import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),

    Sitemap({
      hostname: 'https://araartical.vercel.app',
      exclude: [
        '/google55e2cfdb79c0b019'
      ],
    }),

    {
      name: 'security-headers',
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('X-Content-Type-Options', 'nosniff')
          res.setHeader('X-Frame-Options', 'SAMEORIGIN')
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
          res.setHeader('X-XSS-Protection', '1; mode=block')
          res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
          next()
        })
      },
    },
  ],

  server: {
    host: true,
    port: 5173,
  },
})