<template>
  <UnderConstruction
    :title="t('nav.contact')"
    :message="t('underConstruction.contact')"
  />
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports'

const { t } = useI18n()

useHead(() => ({
  title: t('seo.titleContact'),
}))
</script>
