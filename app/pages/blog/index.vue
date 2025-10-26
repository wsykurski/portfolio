<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      Blog
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
      Thoughts on web development, Nuxt, and modern JavaScript
    </p>

    <div v-if="articles && articles.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="article in articles"
        :key="article.path"
        :to="article.path"
        class="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <div class="flex flex-col h-full">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ article.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {{ article.description }}
          </p>
          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <time :datetime="article.date">
              {{ formatDate(article.date) }}
            </time>
            <div v-if="article.tags" class="flex gap-2">
              <span
                v-for="tag in article.tags.slice(0, 2)"
                :key="tag"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-16">
      <p class="text-gray-600 dark:text-gray-300 text-lg">
        No blog posts yet. Check back soon!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: articlesTemp } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').all()
})

console.log('articles', articlesTemp)

const articles = computed(() =>
  articlesTemp.value?.map(
      ({ title,
         description,
         path,
         meta: { date, tags}
      }) => ({
      title, description, date, tags, path
    })
  ) || []
)


const formatDate = (dateString: string | Date) => {
  if (!dateString) return 'No date'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return 'Invalid date'
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
