/** Keys under `seo.*` used as the primary document title segment (layout merges via titleTemplate). */
export type SeoTitleMessageKey
  = 'seo.titleHome' | 'seo.titleProjects' | 'seo.titleAbout' | 'seo.titleContact' | 'seo.titleError'

export function usePageSeoTitle(titleKey: SeoTitleMessageKey) {
  const { t } = useI18n()
  useSeoMeta({
    title: computed(() => t(titleKey)),
  })
}
