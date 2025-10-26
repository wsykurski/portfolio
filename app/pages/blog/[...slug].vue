<template>
  <div class="container mx-auto px-6 py-16">
    <article v-if="article" class="max-w-3xl mx-auto">
      <div class="mb-8">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <span class="mr-2">←</span> Back to Blog
        </NuxtLink>

        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <time :datetime="article.date">
            {{ formatDate(article.date) }}
          </time>
          <span v-if="article.author">· {{ article.author }}</span>
        </div>

        <div v-if="article.tags" class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="prose prose-lg dark:prose-invert max-w-none">
        <ContentRenderer :value="article" />
      </div>
    </article>

    <div v-else class="text-center py-16">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Post not found
      </h1>
      <NuxtLink
        to="/blog"
        class="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug
console.log('slug', slug)

const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`blog/${slug}`).first()
)

console.log('article', article)

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO meta tags
useHead({
  title: article.value?.title,
  meta: [
    { name: 'description', content: article.value?.description }
  ]
})
</script>

<style>
/* Custom prose styling for better code blocks and content rendering */
.prose pre {
  @apply bg-gray-900 dark:bg-gray-950;
}

.prose code {
  @apply text-pink-600 dark:text-pink-400;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400 no-underline hover:underline;
}
</style>
