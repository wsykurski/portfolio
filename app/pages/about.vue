<template>
  <UnderConstruction
    :title="t('nav.about')"
    :message="t('underConstruction.about')"
  />
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>
