<template>
  <UnderConstruction
    :title="t('nav.contact')"
    :message="t('underConstruction.contact')"
  />
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>
