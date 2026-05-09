import type { AppTheme } from '~/utils/appTheme'
import {
  parseStoredAppTheme,
  syncThemeRefFromDocument,
  THEME_STORAGE_KEY,
} from '~/utils/appTheme'

export default defineNuxtPlugin({
  name: 'theme-init',
  enforce: 'pre',
  setup(nuxtApp) {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const initial = parseStoredAppTheme(stored)
    const theme = useState<AppTheme>('app-theme', () => initial)
    theme.value = initial
    document.documentElement.setAttribute('data-theme', initial)

    nuxtApp.hook('app:mounted', () => {
      syncThemeRefFromDocument(theme)
    })
  },
})
