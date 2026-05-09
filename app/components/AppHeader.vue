<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 dark:border-line/80 bg-white/70 dark:bg-canvas-soft/40 backdrop-blur">
    <div class="container mx-auto px-6 py-4">
      <nav class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-baseline gap-2 font-bold text-slate-900 dark:text-ink"
        >
          <span class="text-lg md:text-xl uppercase tracking-tactical">Portfolio</span>
          <span class="text-xs text-slate-500 dark:text-ink-subtle uppercase tracking-tactical">v0</span>
        </NuxtLink>
        <div class="flex items-center gap-6">
          <AppHeaderLink
            to="/"
            text="Home"
          />
          <AppHeaderLink
            to="/projects"
            text="Projects"
          />
          <AppHeaderLink
            to="/about"
            text="About"
          />
          <AppHeaderLink
            to="/contact"
            text="Contact"
          />
          <UiButton
            variant="ghost"
            class-name="px-3 py-2"
            :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <span class="text-xs md:text-sm">
              {{ colorMode.value === 'dark' ? 'LIGHT' : 'DARK' }}
            </span>
          </UiButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
