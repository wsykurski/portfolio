// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2025-07-15',
})
