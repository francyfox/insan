<script setup lang="ts">
import { createProgramList } from '~/server/app/module/faker/faker.programs';

const data = createProgramList(6)
</script>

<template>
<section class="section section-program">
  <div class="container">
    <div class="program-list col">
      <div class="main-page-header row">
        <div class="title-h1">
          Программы фонда
        </div>

        <nuxt-link to="/"
                   class="link"
        >
          Все программы
        </nuxt-link>
      </div>

      <div class="program-list-body">
        <insane-program v-for="(item, index) in data"
                        :key="index"
                        :data="item"
        />
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.section-program {
  margin-bottom: 60px;
}

.program-list {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .card {
      &:nth-child(n + 5) {
        @media (max-width: 1280px) {
          display: none;
        }
      }

      &:nth-child(n + 3) {
        @media (max-width: 768px) {
          display: none;
        }
      }

      &-title {
        @media (max-width: 1280px) {
          font-size: 28px;
        }
      }

      &-description {
        @media (max-width: 768px) {
          font-size: var(--fz-xs);
        }
      }
    }
  }
}
</style>