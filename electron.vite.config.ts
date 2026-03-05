import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      tanstackRouter({
        autoCodeSplitting: true,
        routeToken: 'layout'
      }),
      react()
    ]
  }
})
