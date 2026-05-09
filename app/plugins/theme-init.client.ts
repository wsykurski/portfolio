/** Must match THEME_STORAGE_KEY in useAppTheme.ts */
const STORAGE_KEY = 'portfolio_theme'

type AppTheme = 'dark' | 'woodland'

export default defineNuxtPlugin({
  name: 'theme-init',
  enforce: 'pre',
  setup() {
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial = (stored === 'woodland' || stored === 'dark' ? stored : 'dark') as AppTheme
    const theme = useState<AppTheme>('app-theme', () => initial)
    theme.value = initial
    document.documentElement.setAttribute('data-theme', initial)
  },
})
