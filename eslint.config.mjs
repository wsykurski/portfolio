// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: {
      semi: false,
      quotes: 'single',
    },
  },
}, {
  files: ['test/**/*.{ts,vue}'],
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      vi: 'readonly',
    },
  },
}, {
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
})
