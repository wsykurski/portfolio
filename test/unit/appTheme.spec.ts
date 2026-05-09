import { ref } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { AppTheme } from '../../app/utils/appTheme'
import {
  buildThemeHeadInlineScript,
  parseStoredAppTheme,
  resolveThemeFromDocument,
  syncThemeRefFromDocument,
  THEME_STORAGE_KEY,
} from '../../app/utils/appTheme'

afterEach(() => {
  vi.unstubAllGlobals()
})

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

describe('resolveThemeFromDocument', () => {
  it('prefers valid data-theme on document over storage', () => {
    vi.stubGlobal('document', {
      documentElement: {
        getAttribute: vi.fn((name: string) =>
          name === 'data-theme' ? 'woodland' : null,
        ),
      },
    })
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => 'dark'),
    })

    expect(resolveThemeFromDocument()).toBe('woodland')
  })

  it('falls back to storage when data-theme is missing or invalid', () => {
    vi.stubGlobal('document', {
      documentElement: {
        getAttribute: vi.fn((name: string) =>
          name === 'data-theme' ? 'bogus' : null,
        ),
      },
    })
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => 'woodland'),
    })

    expect(resolveThemeFromDocument()).toBe('woodland')
  })
})

describe('syncThemeRefFromDocument', () => {
  it('updates theme ref when document shows woodland but ref is still dark', () => {
    vi.stubGlobal('document', {
      documentElement: {
        getAttribute: vi.fn((name: string) =>
          name === 'data-theme' ? 'woodland' : null,
        ),
      },
    })
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
    })

    const theme = ref<AppTheme>('dark')
    syncThemeRefFromDocument(theme)
    expect(theme.value).toBe('woodland')
  })
})
