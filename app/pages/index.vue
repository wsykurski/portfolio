<template>
  <div class="container mx-auto px-6 py-12 md:py-20">
    <UiSectionHeader
      title="MISSION BRIEF"
      eyebrow="OPERATIONS"
      subtitle="Objective: deliver reliable, maintainable web systems. Stack focus: Nuxt, Vue, TypeScript."
    >
      <template #right>
        <UiBadge variant="olive">
          OPERATIONAL
        </UiBadge>
      </template>
    </UiSectionHeader>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <UiCard
        class-name="lg:col-span-7"
      >
        <div class="flex items-start justify-between gap-6">
          <div>
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              Role
            </div>
            <h1 class="mt-2 text-4xl md:text-6xl font-bold text-ink">
              Web Developer
            </h1>
            <p class="mt-4 text-base md:text-lg text-ink-muted max-w-2xl">
              Specialized in Nuxt and scalable state management. Built for performance, clarity, and long-term maintenance.
            </p>
          </div>

          <div class="hidden md:flex items-center gap-3">
            <UiButton
              to="/projects"
              variant="primary"
            >
              View projects
            </UiButton>
            <UiButton
              to="/contact"
              variant="ghost"
            >
              Contact
            </UiButton>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              Stack
            </div>
            <div class="mt-2 font-semibold text-ink">
              Nuxt · Vue · TS
            </div>
          </div>
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              Mode
            </div>
            <div class="mt-2 font-semibold text-ink">
              SSR / SPA / Static
            </div>
          </div>
          <div class="rounded-ui border border-line/70 bg-canvas-soft/30 px-4 py-3">
            <div class="text-xs uppercase tracking-tactical text-ink-subtle">
              Priority
            </div>
            <div class="mt-2 font-semibold text-ink">
              Quality & delivery
            </div>
          </div>
        </div>
      </UiCard>

      <UiCard
        hoverable
        class-name="lg:col-span-5"
      >
        <div class="text-xs uppercase tracking-tactical text-ink-subtle">
          Status
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <UiBadge variant="neutral">
            Nuxt_4
          </UiBadge>
          <UiBadge variant="neutral">
            Tailwind
          </UiBadge>
          <UiBadge variant="neutral">
            TypeScript
          </UiBadge>
        </div>
        <div class="mt-6 text-sm text-ink-muted">
          Clear interfaces. Predictable state. Tactical UI. No noise.
        </div>
      </UiCard>

      <div class="lg:col-span-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <ContentSection
            title="Nuxt"
            icon="⚡"
          >
            <p>
              SEO-friendly delivery, SSR-first patterns, and clean routing/layouts.
            </p>
          </ContentSection>

          <ContentSection
            title="State"
            icon="🍍"
          >
            <p>
              Scalable state patterns and composables aligned with Nuxt conventions.
            </p>
          </ContentSection>

          <ContentSection
            title="Stack"
            icon="🚀"
          >
            <p>
              Vue 3, TypeScript, Tailwind CSS, and pragmatic tooling.
            </p>
          </ContentSection>

          <ContentSection
            title="Delivery"
            icon="📁"
          >
            <p>
              Projects and contributions focused on maintainability and outcome.
            </p>
          </ContentSection>
        </div>
      </div>
    </div>
  </div>
</template>
