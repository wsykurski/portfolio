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
      <p class="text-xl md:text-2xl text-gray-600 mb-8">
        Specialized in <span class="font-semibold text-gray-900">Nuxt</span> & <span class="font-semibold text-gray-900">Pinia</span>
      </p>

      <div class="flex flex-wrap gap-4 justify-center mb-16">
        <button class="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
          View Projects
        </button>
        <button class="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-all duration-300">
          Contact Me
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div class="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Nuxt Expert</h3>
          <p class="text-gray-600">Building powerful, SEO-friendly applications with Nuxt 3 & 4</p>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
          <div class="text-4xl mb-4">🍍</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Pinia Mastery</h3>
          <p class="text-gray-600">State management solutions that scale with your application</p>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Modern Stack</h3>
          <p class="text-gray-600">Vue 3, TypeScript, Tailwind CSS, and cutting-edge tools</p>
        </div>
      </div>
    </div>
  </div>
</template>
