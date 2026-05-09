<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-canvas-soft/40 backdrop-blur">
    <div class="container mx-auto px-6 py-4">
      <nav class="flex flex-wrap items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="inline-flex items-baseline gap-2 font-bold text-ink"
        >
          <span class="text-lg md:text-xl uppercase tracking-tactical">{{ t('brand.name') }}</span>
          <span class="text-xs text-ink-subtle uppercase tracking-tactical">{{ appVersion }}</span>
        </NuxtLink>
        <div class="flex flex-wrap items-center justify-end gap-3 md:gap-6">
          <AppHeaderLink
            to="/"
            :text="t('nav.home')"
          />
          <AppHeaderLink
            to="/projects"
            :text="t('nav.projects')"
          />
          <AppHeaderLink
            to="/about"
            :text="t('nav.about')"
          />
          <AppHeaderLink
            to="/contact"
            :text="t('nav.contact')"
          />
          <div class="flex items-center gap-1 border-l border-line/60 pl-3 ml-1 md:ml-2">
            <UiButton
              variant="ghost"
              :class-name="localeButtonClass('pl')"
              :aria-label="t('locale.switchToPl')"
              :aria-pressed="locale === 'pl'"
              @click="setLocale('pl')"
            >
              <span
                class="text-lg leading-none"
                aria-hidden="true"
              >🇵🇱</span>
            </UiButton>
            <UiButton
              variant="ghost"
              :class-name="localeButtonClass('en')"
              :aria-label="t('locale.switchToEn')"
              :aria-pressed="locale === 'en'"
              @click="setLocale('en')"
            >
              <span
                class="text-lg leading-none"
                aria-hidden="true"
              >🇬🇧</span>
            </UiButton>
          </div>
          <div class="flex items-center border-l border-line/60 pl-3">
            <UiButton
              variant="ghost"
              :class-name="themeToggleClass"
              :aria-label="themeToggleAriaLabel"
              type="button"
              @click="toggleTheme"
            >
              <!--
                SSR/prerender bakes theme=dark → wrong SVG in HTML. Hydration can
                leave that subtree stale even after useState updates. Render icons
                only on the client after plugins fix payload (clearNuxtState).
              -->
              <ClientOnly>
                <template #fallback>
                  <span
                    class="size-5 shrink-0 inline-block"
                    aria-hidden="true"
                  />
                </template>
                <span
                  :key="themeToggleIconKey"
                  class="inline-flex items-center justify-center"
                >
                  <IconThemeWoodland v-if="showDarkThemeIcon" />
                  <IconThemeMoon v-else />
                </span>
              </ClientOnly>
            </UiButton>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const appVersion = useRuntimeConfig().public.appVersion
const { theme, setTheme } = useAppTheme()

/** Explicit .value tracking avoids edge cases with template ref unwrapping. */
const showDarkThemeIcon = computed(() => theme.value === 'dark')

/** Force icon subtree swap when theme changes (belt-and-suspenders). */
const themeToggleIconKey = computed(() => theme.value)

const themeToggleClass = 'px-2 py-1 min-w-11'

const themeToggleAriaLabel = computed(() =>
  theme.value === 'dark' ? t('theme.switchToWoodland') : t('theme.switchToDark'),
)

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'woodland' : 'dark')
}

const localeButtonClass = (code: string) => {
  const base = 'px-2 py-1 min-w-11'
  const active = locale.value === code ? 'border-accent-olive/60 bg-accent-olive/15' : ''
  return [base, active].filter(Boolean).join(' ')
}
</script>
