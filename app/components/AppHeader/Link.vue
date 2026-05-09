<template>
  <NuxtLink
    :to="to"
    :class="[
      'group relative inline-flex items-center',
      'px-2 py-1',
      'text-xs md:text-sm font-semibold',
      'uppercase tracking-tactical',
      'transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-olive/80 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
    ]"
  >
    {{ text }}
    <span
      aria-hidden="true"
      :class="[
        'pointer-events-none absolute -bottom-1 left-2 right-2 h-px',
        'bg-accent-olive/80',
        'transition-opacity',
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
      ]"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string
  text: string
}

const props = defineProps<Props>()

const route = useRoute()
const isActive = computed(() => {
  if (typeof props.to !== 'string') return false
  if (props.to === '/') return route.path === '/'
  return route.path.startsWith(props.to)
})
</script>
