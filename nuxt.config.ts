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
    '@app/ui': path.join(__dirname, './libs/ui'),
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
        port: 24678,
        host: '0.0.0.0',
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
});
