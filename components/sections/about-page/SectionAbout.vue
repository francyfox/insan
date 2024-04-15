<script setup lang="ts">
import { useMessage } from 'naive-ui'
import type { Ref } from 'vue'
import InsaneCountersData from '~/components/insane-counters/insane-counters.data';
export interface AboutSectionData {
  title: string;
  description: string;
}

const message = useMessage()
const aboutData: Ref<AboutSectionData | null> = ref(null)
const countersData = InsaneCountersData

const { data, error, pending } = useApi('/about', {
  method: 'GET'
}) // TODO: вынести наверх когда будет АПИ

if (error.value) {
  message.error('Не удалось загрузить ')
}

aboutData.value = data as unknown as AboutSectionData
</script>

<template>
  <section class="section section-about">
    <div class="container">
      <div class="about-list row">
        <Suspense>
          <div class="about-list-item col">
            <h1 v-if="aboutData!.value.title" class="about-list-item-title title-h1">
              {{ aboutData!.value.title }}
            </h1>

            <main v-if="aboutData!.value.description" class="about-list-item-description"
                  v-html="aboutData!.value.description"
            >
            </main>

            <insane-counters :data="countersData" />
          </div>
        </Suspense>

        <div class="about-list-item">
          <nuxt-img width="630"
                    height="640"
                    src="https://picsum.photos/630/640"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>