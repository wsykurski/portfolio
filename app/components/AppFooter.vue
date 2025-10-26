<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-6 py-8 text-center text-gray-400 dark:text-gray-500">
      <p>&copy; {{ currentYear }} Portfolio. Built with Nuxt 4 & Tailwind CSS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
