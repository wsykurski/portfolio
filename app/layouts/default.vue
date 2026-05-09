<template>
  <div class="min-h-screen bg-slate-50 dark:bg-canvas text-slate-950 dark:text-ink flex flex-col">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
