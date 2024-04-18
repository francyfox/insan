<script setup lang="ts">
import InsaneTabs from '~/components/insane-tabs/InsaneTabs.vue';
import { createZakyatData } from '~/server/app/module/faker/faker.zakyat';

definePageMeta({
  title: 'Закят'
})

const data = createZakyatData()
</script>

<template>
  <NuxtLayout>
    <template #header>
      Закят
    </template>

    <section class="section section-zakyat">
      <div class="container">
        <div class="zakyat-list">
          <div class="zakyat-list-item">
            <insane-tabs :data="data.tabs" />
          </div>

          <div class="zakyat-list-item">
            <div class="zakyat-list-item-header">
              <div class="zakyat-list-item-header-title">
                Рассчитать закят
              </div>
              <div class="zakyat-list-item-header-nisab">
                <strong>
                  Нисаб:
                </strong>

                <span>
                  {{ data.nisab }}
                </span>

                <zakyat-form :data="data" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>