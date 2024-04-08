<script setup lang="ts">
import { createNeedHelpPersons } from '~/server/app/module/faker/faker.help-list';

const data = createNeedHelpPersons(8)
</script>

<template>
  <section class="section section-help">
    <div class="container">
      <div class="help-list col">
        <div class="help-list-header row">
          <div class="title-h1">
            Им нужна твоя помощь
          </div>

          <nuxt-link to="/"
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
  &-header {

  }

  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 12px;

    .card-carousel {
      height: 260px;
    }

    .card-body {
      &-title {
        font-size: var(--fz-xs);
      }
    }
  }
}
</style>