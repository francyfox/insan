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
      <div class="about-list">
        <Suspense>
          <div class="about-list-item col card-shadow-md">
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
                    class="img-cover"
                    src="https://picsum.photos/630/640"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-about {
  padding-bottom: 100px;
}

.about-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  &-item {
    &:first-child {
      padding: 40px;
      background: var(--light-100);
      border-radius: var(--radius-xl);
    }

    &-title {
      margin-bottom: 20px;
    }

    &-description {
      margin-bottom: 36px;
      line-height: 1.5;
      font-size: var(--fz-sm);

      p {
        margin-bottom: 20px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>