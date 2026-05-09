<template>
  <UiCard
    hoverable
    class-name="h-full"
  >
    <div
      v-if="icon"
      class="text-4xl mb-4 text-ink"
    >
      <img
        v-if="isIconPath"
        :src="icon"
        :alt="title"
        class="w-12 h-12"
      >
      <span v-else>{{ icon }}</span>
    </div>
    <h3 class="text-xl font-bold text-ink mb-2">
      {{ title }}
    </h3>
    <div class="text-ink-muted">
      <slot />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  icon?: string
}

const props = defineProps<Props>()

const isIconPath = computed(() => {
  if (!props.icon) return false
  return props.icon.includes('/') || /\.(?:svg|png|jpg|jpeg|gif|webp)$/i.test(props.icon)
})
</script>
