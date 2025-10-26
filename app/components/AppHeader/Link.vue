<template>
  <NuxtLink 
    :to="to" 
    class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
  >
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>
