import * as path from 'path';

const isDev = process.env.VITE_ENV !== 'prod';

export default defineNuxtConfig({
  devtools: { enabled: isDev },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  alias: {
    '#global': path.join(__dirname, '../../global'),
  },
  devServer: {
    port: 5000,
  },
  srcDir: 'src/',
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
    server: {
      hmr: {
        protocol: 'ws',
        port: Number(process.env.HMR_PORT) || 24678,
        host: '0.0.0.0',
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
})
