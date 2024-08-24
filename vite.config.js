import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  server: {
    // https: true,
    port: 3001,
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth"],
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === location.origin,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'app-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 7 days
              },
            },
          },
        ],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        "theme_color": "#000000",
        "background_color": "#000000",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Alert 24",
        "short_name": "Alert 24",
        "icons": [
          {
            "src": "images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "images/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})
