import { describe, expect, it } from 'vitest'
import {
  buildThemeHeadInlineScript,
  parseStoredAppTheme,
  THEME_STORAGE_KEY,
} from '../../app/utils/appTheme'

describe('parseStoredAppTheme', () => {
  it('returns dark when stored value is missing or unknown', () => {
    expect(parseStoredAppTheme(null)).toBe('dark')
    expect(parseStoredAppTheme(undefined)).toBe('dark')
    expect(parseStoredAppTheme('')).toBe('dark')
    expect(parseStoredAppTheme('light')).toBe('dark')
    expect(parseStoredAppTheme('WOODLAND')).toBe('dark')
  })

  it('accepts dark and woodland', () => {
    expect(parseStoredAppTheme('dark')).toBe('dark')
    expect(parseStoredAppTheme('woodland')).toBe('woodland')
  })
})

describe('buildThemeHeadInlineScript', () => {
  it('embeds the storage key and woodland/dark branches', () => {
    const script = buildThemeHeadInlineScript()
    expect(script).toContain(JSON.stringify(THEME_STORAGE_KEY))
    expect(script).toContain(`t==='woodland'||t==='dark'`)
    expect(script).toContain(`document.documentElement.setAttribute('data-theme',v)`)
  })
})
