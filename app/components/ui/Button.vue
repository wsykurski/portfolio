<template>
  <component
    :is="asComponent"
    :to="to"
    :type="nativeType"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-2',
      'whitespace-nowrap select-none',
      'rounded-ui border px-4 py-2 text-sm font-semibold',
      'uppercase tracking-tactical',
      'transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-olive/80 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
      disabled ? 'opacity-60 pointer-events-none' : '',
      variantClass,
      className,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

type Variant = 'primary' | 'ghost' | 'danger'

interface Props {
  to?: string
  variant?: Variant
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  variant: 'primary',
  disabled: false,
  type: 'button',
  className: '',
})

const asComponent = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'))
const nativeType = computed(() => (props.to ? undefined : props.type))

const variantClass = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'border-line/70 bg-transparent text-ink hover:bg-surface-elevated hover:border-line'
    case 'danger':
      return 'border-signal-danger/40 bg-signal-danger/10 text-ink hover:bg-signal-danger/15'
    case 'primary':
    default:
      return 'border-accent-olive/40 bg-accent-olive/15 text-ink hover:bg-accent-olive/20'
  }
})
</script>
