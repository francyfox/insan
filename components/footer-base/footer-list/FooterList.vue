<script setup lang="ts">
import FooterBaseData from '~/components/footer-base/footer-base.data';
</script>

<template>
  <div class="row footer-list">
    <div class="col footer-list-item">
      <insane-logo />

      <a :href="FooterBaseData.phone.tel"
         class="link phone"
      >
        {{ FooterBaseData.phone.name }}
      </a>

      <ul class="row social-list">
        <li v-for="(item, index) in FooterBaseData.social"
            :key="index"
        >
          <a v-bind="item.attr"
             target="_blank"
             rel="nofollow noopener"
          >
            <component :is="`svgo-${item.icon}`"
                       :fontControlled="false"
                       class="social-list-icon"
            />
          </a>
        </li>
      </ul>
    </div>

    <div class="col footer-list-item">
      <nav class="col">
        <nuxt-link v-for="(item, index) in FooterBaseData.menu.first"
                   v-bind="item"
                   :key="index"
        >
          {{ item.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="col footer-list-item">
      <nav class="col">
        <nuxt-link v-for="(item, index) in FooterBaseData.menu.second"
                   v-bind="item"
                   :key="index"
        >
          {{ item.title }}
        </nuxt-link>
      </nav>
    </div>

    <div class="col footer-list-item">
      <div class="footer-list-item-title">
        У нас есть приложение
      </div>

      <svgo-icon-gp class="mobile-market" />
      <nuxt-img class="mobile-market" src="/img/png/appstore.png" format="webp, avif" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>