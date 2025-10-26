<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
    <div class="text-8xl mb-6">🚧</div>
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-2">
      This page is still under construction
    </p>
    <p class="text-lg text-gray-500 dark:text-gray-400 italic">
      {{ message }}
    </p>
    <NuxtLink 
      to="/" 
      class="mt-8 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
    >
      Back to Home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  message?: string
}>(), {
  message: "I promise it'll be worth the wait... probably 😅"
})
</script>
