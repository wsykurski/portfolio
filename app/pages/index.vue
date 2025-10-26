<template>
  <div class="container mx-auto px-6 py-16 md:py-24">
    <div class="flex flex-col items-center justify-center text-center">
      <div class="mb-8 relative">
        <div class="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-5xl font-bold text-gray-800 dark:text-gray-200">
          W
        </div>
        <div class="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900"></div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
        Web Developer
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-16">
        Specialized in <span class="font-semibold text-gray-900 dark:text-white">Nuxt</span> & <span class="font-semibold text-gray-900 dark:text-white">Pinia</span>
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <ContentSection title="Nuxt Expert" icon="⚡">
          <p class="text-gray-600 dark:text-gray-300">Building powerful, SEO-friendly applications with Nuxt 3 & 4</p>
        </ContentSection>

        <ContentSection title="Pinia Mastery" icon="🍍">
          <p class="text-gray-600 dark:text-gray-300">State management solutions that scale with your application</p>
        </ContentSection>

        <ContentSection title="Modern Stack" icon="🚀">
          <p class="text-gray-600 dark:text-gray-300">Vue 3, TypeScript, Tailwind CSS, and cutting-edge tools</p>
        </ContentSection>

        <ContentSection title="View Projects" icon="📁">
          <p class="text-gray-600 dark:text-gray-300">Explore my portfolio of web applications and open source contributions</p>
        </ContentSection>
      </div>
    </div>
  </div>
</template>
