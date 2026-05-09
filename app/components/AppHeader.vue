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
              <svg
                v-if="theme === 'dark'"
                class="size-5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.4a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l2.3 3.3a1 1 0 0 1-.7 1.7h-.4z"
                />
                <path d="M12 22v-3" />
              </svg>
              <svg
                v-else
                class="size-5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
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
