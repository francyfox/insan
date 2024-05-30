<script setup lang="ts">
import { usePartnersStore } from '~/store/partners';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

const store = usePartnersStore()
const { getPartners } = store

const route = useRoute()
const currentPage = computed(() => route.query.page ? Number(route.query.page) : 1)
const pageCount = ref(1)
const isLoading = ref(true)
const responseData = ref(Array.from({ length: 20 }, () => null))

const getData = async () => {
  const { data, error, pending } = await getPartners(currentPage.value, 20)

  if (error.value) {
    showError({
      fatal: true,
      statusCode: error.value.statusCode,
    })
  }

  pageCount.value = data.value?.num_pages

  isLoading.value = pending.value
  return data.value?.data
}

responseData.value = await getData()

watch(currentPage, async () => {
  responseData.value = await getData()
})

definePageMeta({
  title: 'pages.title.partner',
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ $t('pages.title.partner')}}
      </template>
    </section-common>
    <section class="partners section">
      <div class="container">
        <div class="partners__content">
          <ul class="partners__list">
            <li v-for="(partner, index) in responseData" :key="index" class="partners-card partners__item">
              <div class="partners-card__preview">
                <nuxt-img :src="partner?.img"
                          :alt="partner?.name"
                          loading="lazy"
                          format="webp"
                          width="170"
                          height="170"
                          fit="contain"
                          background="white"
                />
              </div>

              <div class="partners-card__title">
                <p>
                  {{ partner?.name }}
                </p>
              </div>
            </li>
          </ul>

          <InsanePagination v-model="route.query.page"
                            :page-count="pageCount"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.partners {
  margin-bottom: 100px;

  .container {
    display: block;
  }

  &__heading {
    margin-bottom: 60px;

    @media (max-width: 430px) {
      margin-bottom: 40px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    margin-bottom: 116px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 430px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      width: 100%;
    }

  }
}

.partners-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;
  border-radius: 20px;
  padding: 75px 19px;

  @media (max-width: 1000px) {
    padding: 75px 12px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }

  &__preview {
    max-width: 170px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
}
</style>