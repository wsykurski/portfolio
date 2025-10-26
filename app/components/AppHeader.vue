<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-6 py-4">
      <nav class="flex items-center justify-between">
        <div class="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</NuxtLink>
          <NuxtLink to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</NuxtLink>
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span v-if="colorMode.value === 'dark'" class="text-xl">☀️</span>
            <span v-else class="text-xl">🌙</span>
          </button>
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
