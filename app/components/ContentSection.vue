<template>
  <div class="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
    <div v-if="icon" class="text-4xl mb-4">
      <img v-if="isIconPath" :src="icon" :alt="title" class="w-12 h-12" />
      <span v-else>{{ icon }}</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  icon?: string
}>()

const isIconPath = computed(() => {
  if (!props.icon) return false
  return props.icon.includes('/') || /\.(svg|png|jpg|jpeg|gif|webp)$/i.test(props.icon)
})
</script>
