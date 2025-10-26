// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: {
      semi: false,
      quotes: 'single',
    },
  },
}, {
  rules: {
    'vue/no-parsing-error': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
