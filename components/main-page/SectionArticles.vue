<script setup lang="ts">
import { createArticleList } from '~/server/app/module/faker/faker.articles';

const isLoading = ref(false)

const data = createArticleList(3)
</script>

<template>
  <section class="section section-articles">
    <div class="container">
      <div class="articles col">
        <div class="main-page-header row">
          <div class="title-h1">
            Новости и события
          </div>

          <nuxt-link class="link"
                     to="/"
          >
            Все новости
          </nuxt-link>
        </div>

        <div class="articles-body">
          <insane-article v-for="(item, index) in data"
                          :key="index"
                          :data="item"
                          :is-loading="isLoading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-articles {
  margin-bottom: 100px;
}

.articles {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    .article {
      gap: 0;

      &-body {
        padding: 17px 14px 23px;

        &-text, .insane-button {
          display: none !important;
        }

        &-title {
          font-size: var(--fz-md);
          color: var(--dark-800);
          font-weight: 400;
        }
      }
    }

    .article-image {
      height: 360px;
    }
  }
}
</style>