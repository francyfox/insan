import { defineStore } from 'pinia';

export const useMetaStore = defineStore('meta', () => {
  const {t} = useI18n()

  const breadcrumbs = computed(() => (items: any[]) => {

    return items.map((i: any) => {
      const route = useRoute()
      console.log(route)
      return {
        ...i,
        ariaLabel: /^\d+$/.test(i.ariaLabel) ? t('pages.title.unknown') : t(i.ariaLabel)
      }
    })
  })

  return {
    breadcrumbs,
  }
})