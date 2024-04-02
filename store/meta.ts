import { defineStore } from 'pinia';

export const useMetaStore = defineStore('meta', () => {
  const breadcrumbs = ref([])

  return {
    breadcrumbs,
  }
})