<script setup lang="ts">
import FooterBaseData from '~/components/footer-base/footer-base.data'

const copyright = FooterBaseData.copyright
    .replace('{year}', String(new Date().getFullYear()))
</script>

<template>
  <div class="row brand-list">
    <div class="brand-list-item offset">
      <a href="/"
         target="_blank"
         rel="nofollow noopener"
      >
        <nuxt-img src="/img/png/amocrm.png"
                  width="80"
                  height="20"
                  loading="lazy"
                  alt="amocrm"
        />
      </a>

      <a href="/"
         target="_blank"
         rel="nofollow noopener"
      >
        <nuxt-img src="/img/png/wazzup.png"
                  width="93"
                  height="20"
                  alt="wazzup"
                  loading="lazy"
        />
      </a>
    </div>

    <div class="row brand-list-item">
      <span class="offset">{{ copyright }}</span>
    </div>

    <div class="brand-list-item">
      <span class="offset">
        разработка сайта
      </span>

      <a href="/"
         target="_blank"
         rel="nofollow noopener"
      >
        <svgo-icon-djigit width="78" height="28" />
      </a>
    </div>

    <div class="brand-list-item">
      <insane-sitemap />
    </div>
  </div>
</template>

<style scoped lang="scss">
.offset {
  position: relative; top: 5px;
}
</style>