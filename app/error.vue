<template>
  <div class="min-h-dvh bg-canvas text-ink flex flex-col items-center justify-center px-6 py-12">
    <UiCard class-name="max-w-lg w-full text-center">
      <UiBadge
        :variant="badgeVariant"
        class-name="mx-auto"
      >
        {{ statusCode }}
      </UiBadge>
      <h1 class="mt-6 text-3xl md:text-4xl font-bold text-ink">
        {{ heading }}
      </h1>
      <p class="mt-4 text-ink-muted">
        {{ detail }}
      </p>
      <div class="mt-8 flex justify-center">
        <UiButton
          variant="primary"
          @click="clearAndGoHome"
        >
          {{ t('underConstruction.back') }}
        </UiButton>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()

const statusCode = computed(() => props.error.statusCode ?? 500)

const badgeVariant = computed(() => (statusCode.value === 404 ? 'warn' : 'danger'))

const heading = computed(() =>
  statusCode.value === 404 ? t('error.notFoundTitle') : t('error.genericTitle'),
)

const detail = computed(() => {
  if (import.meta.dev && props.error.message) {
    return props.error.message
  }
  return statusCode.value === 404 ? t('error.notFoundMessage') : t('error.genericMessage')
})

usePageSeoTitle('seo.titleError')

function clearAndGoHome() {
  clearError({ redirect: '/' })
}
</script>
