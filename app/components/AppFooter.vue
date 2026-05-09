<template>
  <footer class="border-t border-line/80 bg-canvas-soft/30 backdrop-blur">
    <div class="container mx-auto px-6 py-8 text-center text-ink-subtle">
      <p class="text-xs uppercase tracking-tactical">
        {{ t('footer.line', { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
