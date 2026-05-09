// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { buildThemeHeadInlineScript } from './app/utils/appTheme'

const pkgPath = join(dirname(fileURLToPath(import.meta.url)), 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as { version: string }

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/test-utils/module'],
  // Icons live under components/icons/: register by filename only (IconThemeMoon),
  // not IconsIconThemeMoon — exclude this folder from the default ~/components scan.
  components: [
    {
      path: '~/components',
      pathPrefix: true,
      ignore: ['**/icons/**'],
    },
    {
      path: '~/components/icons',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  // GitHub Pages project sites live under /<repo>/; set NUXT_APP_BASE_URL in CI (see docs/github-pages.md).
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      script: [
        {
          key: 'theme-inline',
          innerHTML: buildThemeHeadInlineScript(),
          tagPosition: 'head',
          tagPriority: 'critical',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      appVersion: `v${pkg.version}`,
    },
  },
  compatibilityDate: '2026-05-09',
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'PL', file: 'pl.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },
})
