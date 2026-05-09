<template>
  <div
    :class="[
      'rounded-ui border bg-surface text-ink shadow-ui',
      'border-line/80',
      'transition-colors',
      hoverable ? 'hover:border-line hover:bg-surface-elevated' : '',
      padded ? 'p-6' : '',
      className,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hoverable?: boolean
  padded?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  hoverable: false,
  padded: true,
  className: '',
})
</script>
