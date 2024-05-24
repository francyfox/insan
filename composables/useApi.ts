import type { UseFetchOptions } from 'nuxt/app';
export function useApi<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}

export function useLazyApi<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return useLazyFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  })
}