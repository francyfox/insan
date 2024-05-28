<script setup lang="ts">
const formatCopyright = (i: string) => i.replace('{year}', String(new Date().getFullYear()))

</script>

<template>
  <div class="brand-list row">
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
                  format="webp"
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
                  format="webp"
        />
      </a>
    </div>

    <div class="brand-list-item row">
      <span class="offset">{{ formatCopyright($t('footer.copyright')) }}</span>
    </div>

    <div class="brand-list-item">
      <span class="offset">
        {{ $t('footer.djigit') }}
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