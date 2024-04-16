<script setup lang="ts">
import { createNeedHelpPersons } from '~/server/app/module/faker/faker.help-list';

const data = createNeedHelpPersons(8)
</script>

<template>
  <section class="section section-help">
    <div class="container">
      <div class="help-list col">
        <div class="main-page-header row">
          <div class="title-h1">
            Им нужна твоя помощь
          </div>

          <nuxt-link to="/list-need"
                     class="link"
          >
            Все сборы
          </nuxt-link>
        </div>
        <div class="help-list-body">
          <insane-card v-for="(item, index) in data"
                       :key="index"
                       :data="item"
                       :is-loading="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-help {
  margin-bottom: 100px;
}

.help-list {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 12px;

    @media (max-width: 1320px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .card {
      background: transparent;
      box-shadow: none;

      &:nth-child(n + 7) {
        @media (max-width: 1320px) {
          display: none;
        }
      }

      &:nth-child(n + 3) {
        @media (max-width: 768px) {
          display: none;
        }
      }

      &-carousel {
        height: 260px;
      }

      &-body {
        padding: 8px 13px;

        &-title {
          font-size: var(--fz-xs);
        }
      }
    }
  }
}
</style>