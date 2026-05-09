export type AppTheme = 'dark' | 'woodland'

export const THEME_STORAGE_KEY = 'portfolio_theme'

/** Normalize a value read from `localStorage` (or missing) to a theme. */
export function parseStoredAppTheme(stored: string | null | undefined): AppTheme {
  return stored === 'woodland' || stored === 'dark' ? stored : 'dark'
}

/**
 * Runs in the document head before hydration to avoid a wrong-theme flash.
 * Validation must stay aligned with {@link parseStoredAppTheme}.
 */
export function buildThemeHeadInlineScript(): string {
  const key = JSON.stringify(THEME_STORAGE_KEY)
  return `(function(){try{var k=${key};var t=localStorage.getItem(k);var v=t==='woodland'||t==='dark'?t:'dark';document.documentElement.setAttribute('data-theme',v)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`
}
