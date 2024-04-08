<script setup lang="ts">
import { createProgramList } from '~/server/app/module/faker/faker.programs';

const data = createProgramList(6)
</script>

<template>
<section class="section section-program">
  <div class="container">
    <div class="program-list col">
      <div class="program-list-header row">
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

<style scoped lang="scss">
.program-list {
  &-body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
}
</style>