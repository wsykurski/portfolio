<template>
  <div class="container mx-auto px-6 py-16 md:py-24">
    <div class="flex flex-col items-center justify-center text-center">
      <div class="mb-8 relative">
        <div class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-5xl font-bold text-gray-800">
          W
        </div>
        <div class="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
        Web Developer
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-16">
        Specialized in <span class="font-semibold text-gray-900">Nuxt</span> & <span class="font-semibold text-gray-900">Pinia</span>
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <ContentSection title="Nuxt Expert" icon="⚡">
          <p class="text-gray-600">Building powerful, SEO-friendly applications with Nuxt 3 & 4</p>
        </ContentSection>

        <ContentSection title="Pinia Mastery" icon="🍍">
          <p class="text-gray-600">State management solutions that scale with your application</p>
        </ContentSection>

        <ContentSection title="Modern Stack" icon="🚀">
          <p class="text-gray-600">Vue 3, TypeScript, Tailwind CSS, and cutting-edge tools</p>
        </ContentSection>

        <ContentSection title="View Projects" icon="📁">
          <p class="text-gray-600">Explore my portfolio of web applications and open source contributions</p>
        </ContentSection>
      </div>
    </div>
  </div>
</template>
