<template>
  <header :class="['mb-6', className]">
    <div
      v-if="eyebrow"
      class="text-xs uppercase tracking-tactical text-ink-subtle"
    >
      {{ eyebrow }}
    </div>
    <div class="mt-2 flex items-end justify-between gap-6">
      <h2 class="text-2xl md:text-3xl font-bold text-ink">
        {{ title }}
      </h2>
      <slot name="right" />
    </div>
    <div class="mt-4 h-px w-full bg-line/80" />
    <p
      v-if="subtitle"
      class="mt-4 max-w-3xl text-sm md:text-base text-ink-muted"
    >
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  eyebrow?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  subtitle: undefined,
  eyebrow: undefined,
  className: '',
})
</script>
