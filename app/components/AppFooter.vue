<template>
  <footer class="border-t border-slate-200 dark:border-line/80 bg-white/60 dark:bg-canvas-soft/30 backdrop-blur">
    <div class="container mx-auto px-6 py-8 text-center text-slate-600 dark:text-ink-subtle">
      <p class="text-xs uppercase tracking-tactical">
        {{ t('footer.line', { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
