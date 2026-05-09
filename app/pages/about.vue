<template>
  <UnderConstruction
    :title="t('nav.about')"
    :message="t('underConstruction.about')"
  />
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports'

const { t } = useI18n()

useHead(() => ({
  title: t('seo.titleAbout'),
}))
</script>
