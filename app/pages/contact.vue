<template>
  <UnderConstruction
    :title="t('nav.contact')"
    :message="t('underConstruction.contact')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('seo.titleContact')),
})
</script>
