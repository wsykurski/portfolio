<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] px-6 py-12">
    <UiCard class-name="max-w-lg w-full text-center">
      <UiBadge
        variant="warn"
        class-name="mx-auto"
      >
        {{ t('underConstruction.badge') }}
      </UiBadge>
      <h1 class="mt-6 text-3xl md:text-4xl font-bold text-ink">
        {{ title }}
      </h1>
      <p class="mt-4 text-ink-muted">
        {{ t('underConstruction.body') }}
      </p>
      <p
        v-if="message"
        class="mt-3 text-sm text-ink-subtle"
      >
        {{ message }}
      </p>
      <div class="mt-8 flex justify-center">
        <UiButton
          to="/"
          variant="primary"
        >
          {{ t('underConstruction.back') }}
        </UiButton>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

interface Props {
  title: string
  message?: string
}

defineProps<Props>()

const { t } = useI18n()
</script>
