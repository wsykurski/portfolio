import { mountSuspended } from '@nuxt/test-utils/runtime'
import { defineComponent, h } from 'vue'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import type { AppTheme } from '~/composables/useAppTheme'
import { THEME_STORAGE_KEY } from '~/composables/useAppTheme'

type HarnessVm = {
  setTheme: (value: AppTheme) => void
}

const UseAppThemeHarness = defineComponent({
  setup() {
    return useAppTheme()
  },
  render() {
    return h('span', { 'data-testid': 'use-app-theme-harness' })
  },
})

describe('useAppTheme', () => {
  async function mountHarness() {
    const wrapper = await mountSuspended(UseAppThemeHarness)
    return wrapper.vm as unknown as HarnessVm
  }

  beforeEach(async () => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    const vm = await mountHarness()
    vm.setTheme('dark')
  })

  it('persists woodland theme to document and storage', async () => {
    const vm = await mountHarness()

    vm.setTheme('woodland')

    expect(document.documentElement.getAttribute('data-theme')).toBe('woodland')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('woodland')
  })

  it('persists dark theme to document and storage after switching back', async () => {
    const vm = await mountHarness()

    vm.setTheme('woodland')
    vm.setTheme('dark')

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
  })

  it('sets data-theme on document element when changing theme on client', async () => {
    const setAttrSpy = vi.spyOn(document.documentElement, 'setAttribute')
    const vm = await mountHarness()

    setAttrSpy.mockClear()
    vm.setTheme('woodland')

    expect(setAttrSpy).toHaveBeenCalledWith('data-theme', 'woodland')

    setAttrSpy.mockRestore()
  })
})
