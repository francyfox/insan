<script setup lang="ts">
import { useNavigationStore } from '~/store/navigation';
import { useCommonStore } from '~/store/common';

const localePath = useLocalePath()
const store = useNavigationStore()
const { navigation } = storeToRefs(store)
const storeCommon = useCommonStore()
const { common } = storeToRefs(storeCommon)

const navColumns = computed(() => {
  return {
    first: navigation.value.slice(0, 5),
    second: navigation.value.slice(5, 10),
  }
})

const contacts = computed(() => {
  const phone = common.value?.contacts?.phone.trim()
  const social = [
    {
      attr: {
        title: 'vk',
        href: common.value?.contacts?.vk,
      },
      icon: 'icon-vk'
    },
    {
      attr: {
        title: 'youtube',
        href: common.value?.contacts?.youtube,
      },
      icon: 'icon-youtube'
    },
    {
      attr: {
        title: 'Одноклассники',
        href: common.value?.contacts?.ok,
      },
      icon: 'icon-ok'
    },
  ]

  return {
    phone,
    social
  }
})
</script>

<template>
  <div class="row footer-list">
    <div class="col footer-list-item">
      <insane-logo />

      <a :href="`tel:${contacts?.phone}`"
         class="link phone"
      >
        {{ contacts?.phone }}
      </a>

      <ul class="social-list">
        <li v-for="(item, index) in contacts?.social"
            :key="index"
        >
          <nuxt-link v-bind="item.attr"
             target="_blank"
             rel="nofollow noopener"
          >
            <component :is="`svgo-${item.icon}`"
                       :fontControlled="false"
                       class="social-list-icon"
            />
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="col footer-list-item">
      <nav class="col">
        <nuxt-link v-for="(item, index) in navColumns.first"
                   :to="localePath(item.slug)"
                   :key="index"
        >
          {{ item.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="col footer-list-item">
      <nav class="col">
        <nuxt-link v-for="(item, index) in navColumns.second"
                   :to="localePath(item.slug)"
                   :key="index"
        >
          {{ item.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="col footer-list-item">
      <div class="footer-list-item-title">
        {{ $t('footer.app') }}
      </div>

      <div class="col footer-list-item-store">
        <nuxt-link href="https://play.google.com/store/apps/details?id=diit.ru.insan&hl=gsw"
                   external
                   target="_blank"
                   rel="nofollow noopener"
        >
          <svgo-icon-gp width="148" height="45" />
        </nuxt-link>

        <nuxt-link href="https://apps.apple.com/ru/app/%D0%B8%D0%BD%D1%81%D0%B0%D0%BD/id1380177168"
           external
           target="_blank"
           rel="nofollow noopener"
        >
          <nuxt-img class="mobile-market"
                    src="/img/png/appstore.png"
                    width="148"
                    height="45"
                    alt="App Store"
                    loading="lazy"
                    format="webp"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>