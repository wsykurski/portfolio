<template>
  <UnderConstruction
    :title="t('nav.projects')"
    :message="t('underConstruction.projects')"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

usePageSeoTitle('seo.titleProjects')
</script>
