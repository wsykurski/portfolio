<template>
  <div class="container mx-auto px-6 py-12 md:py-20">
    <UiSectionHeader
      :title="t('home.sectionTitle')"
      :eyebrow="t('home.sectionEyebrow')"
      :subtitle="t('home.sectionSubtitle')"
    >
      <template #right>
        <UiBadge variant="olive">
          {{ t('home.statusOperational') }}
        </UiBadge>
      </template>
    </UiSectionHeader>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <UiCard
        class-name="lg:col-span-7"
      >
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              {{ t('home.role') }}
            </div>
            <h1 class="mt-2 text-4xl md:text-6xl font-bold text-ink">
              {{ t('home.headline') }}
            </h1>
            <p class="mt-4 text-base md:text-lg text-ink-muted max-w-2xl">
              {{ t('home.lead') }}
            </p>
          </div>

          <div class="hidden md:flex items-center gap-3 shrink-0">
            <UiButton
              to="/projects"
              variant="primary"
            >
              {{ t('home.ctaProjects') }}
            </UiButton>
            <UiButton
              to="/contact"
              variant="ghost"
            >
              {{ t('home.ctaContact') }}
            </UiButton>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              {{ t('home.statStack') }}
            </div>
            <div class="mt-2 font-semibold text-ink">
              {{ t('home.statStackValue') }}
            </div>
          </div>
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              {{ t('home.statMode') }}
            </div>
            <div class="mt-2 font-semibold text-ink">
              {{ t('home.statModeValue') }}
            </div>
          </div>
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              {{ t('home.statPriority') }}
            </div>
            <div class="mt-2 font-semibold text-ink">
              {{ t('home.statPriorityValue') }}
            </div>
          </div>
        </div>
      </UiCard>

      <UiCard
        hoverable
        class-name="lg:col-span-5"
      >
        <div class="text-xs uppercase tracking-tactical text-ink-subtle">
          {{ t('home.statusLabel') }}
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <UiBadge variant="neutral">
            {{ t('home.tagNuxt') }}
          </UiBadge>
          <UiBadge variant="neutral">
            {{ t('home.tagTailwind') }}
          </UiBadge>
          <UiBadge variant="neutral">
            {{ t('home.tagTs') }}
          </UiBadge>
        </div>
        <div class="mt-6 text-sm text-ink-muted">
          {{ t('home.statusBlurb') }}
        </div>
      </UiCard>

      <div class="lg:col-span-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <ContentSection
            :title="t('home.capNuxtTitle')"
            icon="⚡"
          >
            <p>
              {{ t('home.capNuxtBody') }}
            </p>
          </ContentSection>

          <ContentSection
            :title="t('home.capStateTitle')"
            icon="🍍"
          >
            <p>
              {{ t('home.capStateBody') }}
            </p>
          </ContentSection>

          <ContentSection
            :title="t('home.capStackTitle')"
            icon="🚀"
          >
            <p>
              {{ t('home.capStackBody') }}
            </p>
          </ContentSection>

          <ContentSection
            :title="t('home.capDeliveryTitle')"
            icon="📁"
          >
            <p>
              {{ t('home.capDeliveryBody') }}
            </p>
          </ContentSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>
