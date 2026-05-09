// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const pkgPath = join(dirname(fileURLToPath(import.meta.url)), 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as { version: string }

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/test-utils/module'],
  devtools: { enabled: true },
  // GitHub Pages project sites live under /<repo>/; set NUXT_APP_BASE_URL in CI (see docs/github-pages.md).
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      script: [
        {
          key: 'theme-inline',
          innerHTML: `(function(){try{var k='portfolio_theme';var t=localStorage.getItem(k);var v=t==='woodland'||t==='dark'?t:'dark';document.documentElement.setAttribute('data-theme',v)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`,
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
