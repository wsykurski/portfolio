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
    // Drop SSR/prerender payload so useState re-inits from storage instead of
    // staying stuck on `'dark'` from the build-time snapshot (wrong toggle SVG).
    clearNuxtState(['app-theme'])

    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const initial = parseStoredAppTheme(stored)
    const theme = useState<AppTheme>('app-theme', () => initial)
    theme.value = initial
    document.documentElement.setAttribute('data-theme', initial)

    const runSync = () => syncThemeRefFromDocument(theme)

    nuxtApp.hook('app:mounted', runSync)
    onNuxtReady(runSync)
  },
})
