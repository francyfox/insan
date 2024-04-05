import { defineStore } from 'pinia'
export const useDeviceStore = defineStore('device', () => {
  const mediaQuery = ref({
    twoXl: false,
    xl: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    xxs: false,
  })

  return {
    mediaQuery
  }
})

