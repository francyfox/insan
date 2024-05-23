<script setup lang="ts">
import { NPopover } from 'naive-ui'
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/png/app.png', { width: 660, height: 343, format: 'webp' })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <section class="section section-app">
    <div class="container">
      <div class="app-list row">
        <div class="app-list-item card-shadow-md col">
          <div class="col">
            <div class="app-list-item-title">
              Будь ближе
            </div>

            <div class="app-list-item-description">
              Скачайте наше мобильное приложение <br> и помогайте в любое удобное для вас время
            </div>
          </div>

          <client-only>
            <n-popover trigger="click">
              <template #trigger>
                <insane-button variant="primary"
                >
                  Скачать
                </insane-button>
              </template>

              <ul class="col">
                <li>
                  <nuxt-link href="https://play.google.com/store/apps/details?id=diit.ru.insan&hl=gsw"
                             external
                             target="_blank"
                             rel="nofollow noopener"
                  >
                    <svgo-icon-gp width="148" height="45" />
                  </nuxt-link>
                </li>
                <li>
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
                </li>
              </ul>

            </n-popover>
          </client-only>
        </div>

        <div class="app-list-item card-shadow-md col"
             :style="backgroundStyles"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-app {
  margin-bottom: 100px;
}

.app-list {
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &-item {
    width: 100%;
    padding: 44px 33px;
    align-items: flex-start;
    background: var(--light-100);
    border-radius: var(--radius-xl);

    > .col {
      margin-bottom: auto;
    }

    &:last-child {
      min-height: 343px;
      background-size: calc(100% - 10px);
      background-position: bottom;
      background-repeat: no-repeat;

      @media (max-width: 980px) {
        background-size: calc(120% - 10px);
      }

      @media (max-width: 768px) {
        min-height: 250px;
        background-size: 400px;
      }
    }

    &-title {
      margin-bottom: 52px;
      font-size: var(--fz-lg);
      font-weight: 600;
      color: var(--dark-900);
    }

    &-description {
      margin-bottom: 40px;
      font-size: var(--fz-md);
      color: var(--dark-900);

      @media (max-width: 768px) {
        font-size: var(--fz-xs);
      }
    }

    .insane-button {
      width: 100%;
      max-width: 186px;
    }
  }
}
</style>