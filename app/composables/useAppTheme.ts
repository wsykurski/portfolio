import type { AppTheme } from '~/utils/appTheme'
import { THEME_STORAGE_KEY } from '~/utils/appTheme'

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
