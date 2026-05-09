export type AppTheme = 'dark' | 'woodland'

/** Keep in sync with inline script in nuxt.config.ts app.head */
export const THEME_STORAGE_KEY = 'portfolio_theme'

export function useAppTheme() {
  const theme = useState<AppTheme>('app-theme', () => 'dark')

  const applyDom = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem(THEME_STORAGE_KEY, theme.value)
  }

  const setTheme = (value: AppTheme) => {
    theme.value = value
    if (import.meta.client) {
      applyDom()
    }
  }

  return { theme, setTheme }
}
