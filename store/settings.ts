import { defineStore } from 'pinia'
import type { Ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
  const settings: Ref<{
    nisab: number,
    kurban_price_setting: { price: number }[]
  } | null> = ref(null)

  async function getSettings() {
    const { data, error, pending } = await useApi('/settings', {
      method: 'GET',
    })

    if (error.value) {
      showError({
        fatal: true,
        statusCode: error.value.statusCode,
      })
    }

    settings.value = data.value
  }

  return {
    settings,
    getSettings
  }
})