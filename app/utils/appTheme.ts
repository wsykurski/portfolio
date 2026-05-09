import type { Ref } from 'vue'

export type AppTheme = 'dark' | 'woodland'

export const THEME_STORAGE_KEY = 'portfolio_theme'

/** Normalize a value read from `localStorage` (or missing) to a theme. */
export function parseStoredAppTheme(stored: string | null | undefined): AppTheme {
  return stored === 'woodland' || stored === 'dark' ? stored : 'dark'
}

/**
 * Theme applied on `<html>` by the critical inline head script (and layout).
 * Prefer this over `useState` after navigation refresh when SSR payload can
 * disagree until client plugins run.
 */
export function resolveThemeFromDocument(): AppTheme {
  if (typeof document === 'undefined')
    return 'dark'

  const fromDom = document.documentElement.getAttribute('data-theme')
  if (fromDom === 'woodland' || fromDom === 'dark')
    return fromDom

  if (typeof localStorage === 'undefined')
    return 'dark'

  return parseStoredAppTheme(localStorage.getItem(THEME_STORAGE_KEY))
}

/** Align reactive theme with DOM/storage (e.g. after hydration mismatch). */
export function syncThemeRefFromDocument(theme: Ref<AppTheme>): void {
  const resolved = resolveThemeFromDocument()
  if (resolved !== theme.value)
    theme.value = resolved
}

/**
 * Runs in the document head before hydration to avoid a wrong-theme flash.
 * Validation must stay aligned with {@link parseStoredAppTheme}.
 */
export function buildThemeHeadInlineScript(): string {
  const key = JSON.stringify(THEME_STORAGE_KEY)
  return `(function(){try{var k=${key};var t=localStorage.getItem(k);var v=t==='woodland'||t==='dark'?t:'dark';document.documentElement.setAttribute('data-theme',v)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`
}
