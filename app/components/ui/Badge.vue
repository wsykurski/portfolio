<template>
  <span
    :class="[
      'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs',
      'uppercase tracking-tactical',
      variantClass,
      className,
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
type Variant = 'neutral' | 'olive' | 'ok' | 'warn' | 'danger'

interface Props {
  variant?: Variant
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral',
  className: '',
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'olive':
      return 'border-accent-olive/40 bg-accent-olive/10 text-ink'
    case 'ok':
      return 'border-signal-ok/35 bg-signal-ok/10 text-ink'
    case 'warn':
      return 'border-signal-warn/35 bg-signal-warn/10 text-ink'
    case 'danger':
      return 'border-signal-danger/35 bg-signal-danger/10 text-ink'
    case 'neutral':
    default:
      return 'border-line/70 bg-canvas-soft/40 text-ink-muted'
  }
})
</script>
