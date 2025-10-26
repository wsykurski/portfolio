<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
    <div
      v-if="icon"
      class="text-4xl mb-4"
    >
      <img
        v-if="isIconPath"
        :src="icon"
        :alt="title"
        class="w-12 h-12"
      >
      <span v-else>{{ icon }}</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
})

const isIconPath = computed(() => {
  if (!props.icon) return false
  return props.icon.includes('/') || /\.(?:svg|png|jpg|jpeg|gif|webp)$/i.test(props.icon)
})
</script>
