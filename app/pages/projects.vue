<template>
  <UnderConstruction
    :title="t('nav.projects')"
    :message="t('underConstruction.projects')"
  />
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>
