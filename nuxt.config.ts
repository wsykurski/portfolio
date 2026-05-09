// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'PL', file: 'pl.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },
})
