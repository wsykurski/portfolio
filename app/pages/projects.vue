<template>
  <UnderConstruction
    :title="t('nav.projects')"
    :message="t('underConstruction.projects')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('seo.titleProjects')),
})
</script>
