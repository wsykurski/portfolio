<template>
  <div class="min-h-screen bg-canvas text-ink flex flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-ui focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-olive/80 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      @click="onSkipToMain"
    >
      {{ t('a11y.skipToContent') }}
    </a>
    <AppHeader />

    <main
      id="main-content"
      class="flex-1"
      tabindex="-1"
    >
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const onSkipToMain = () => {
  nextTick(() => {
    document.getElementById('main-content')?.focus()
  })
}
const i18nHead = useLocaleHead()

useHead(() => {
  const baseAttrs = i18nHead.value.htmlAttrs ?? {}
  const mergedClass = ['dark', baseAttrs.class].flat().filter(Boolean).join(' ')
  return {
    htmlAttrs: {
      ...baseAttrs,
      class: mergedClass,
    },
    link: i18nHead.value.link,
    meta: i18nHead.value.meta,
    titleTemplate: titleChunk =>
      titleChunk ? `${titleChunk} · ${t('brand.name')}` : t('seo.titleDefault'),
  }
})
</script>
