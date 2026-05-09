<template>
  <UnderConstruction
    :title="t('nav.about')"
    :message="t('underConstruction.about')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('seo.titleAbout')),
})
</script>
