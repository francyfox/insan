<script setup lang="ts">
import FooterBaseData from '~/components/footer-base/footer-base.data';
import AmoCrmImage from '~/assets/img/png/amocrm.png?url'
</script>

<template>
  <footer class="section section-footer">
    <div class="container bg-light card-shadow-md">
      <div class="row footer-list">
        <div class="col footer-list-item">
          <div class="col">
            <insane-logo />

            <a :href="FooterBaseData.phone.tel"
               class="link"
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

          <div class="row">
            <a href="/"
               target="_blank"
               rel="nofollow noopener"
            >
              <nuxt-picture format="avif,webp"
                            src="/png/amocrm.png"
              />
            </a>

            <a href="/"
               target="_blank"
               rel="nofollow noopener"
            >
              <nuxt-picture format="avif,webp"
                            src="/png/wazzup.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "footer-base.style";
</style>