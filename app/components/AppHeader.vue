<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-canvas-soft/40 backdrop-blur">
    <div class="container mx-auto px-6 py-4">
      <nav class="flex flex-wrap items-center justify-between gap-4">
        <NuxtLink
          to="/"
          class="inline-flex items-baseline gap-2 font-bold text-ink"
        >
          <span class="text-lg md:text-xl uppercase tracking-tactical">{{ t('brand.name') }}</span>
          <span class="text-xs text-ink-subtle uppercase tracking-tactical">{{ t('brand.version') }}</span>
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
          <div class="flex items-center gap-1">
            <UiButton
              variant="ghost"
              :class-name="localeButtonClass('pl')"
              :aria-label="t('locale.switchToPl')"
              :aria-pressed="locale === 'pl'"
              @click="setLocale('pl')"
            >
              <span class="text-xs md:text-sm">PL</span>
            </UiButton>
            <UiButton
              variant="ghost"
              :class-name="localeButtonClass('en')"
              :aria-label="t('locale.switchToEn')"
              :aria-pressed="locale === 'en'"
              @click="setLocale('en')"
            >
              <span class="text-xs md:text-sm">EN</span>
            </UiButton>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t, locale, setLocale } = useI18n()

const localeButtonClass = (code: string) => {
  const base = 'px-2 py-1 min-w-10'
  const active = locale.value === code ? 'border-accent-olive/60 bg-accent-olive/15' : ''
  return [base, active].filter(Boolean).join(' ')
}
</script>
