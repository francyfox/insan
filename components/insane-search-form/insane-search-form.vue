<script setup lang="ts">
import { NFormItem, NInput, NForm, type FormRules } from 'naive-ui';
import { useSearchStore } from '~/store/search';

const {t} = useI18n()
const form = ref({
  search: ''
})
const rules: FormRules = {
  search: {
    required: true,
    message: t('form.required'),
    min: 3,
    trigger: ['input'],
  },
}
const formRef = ref()
const router = useRouter()
const route = useRoute()
const store = useSearchStore()
const { searchData, totalCount } = storeToRefs(store)

if (route.query.query) {
  form.value.search = route.query.query
  await store.getSearch(form.value.search)
}

onUnmounted(() => {
  totalCount.value = null
  searchData.value = []
})

const onSearch = async (e: any) => {
  e.preventDefault()

  formRef.value?.validate(async (errors) => {
    if (!errors) {
      if (form.value.search.length < 3) {
        totalCount.value = null
        searchData.value = []
      } else {
        searchData.value = Array.from({ length: 4}, () => null)
        await store.getSearch(form.value.search)
      }

      await router.push({
        query: {
          query: form.value.search
        }
      })
    }
  })
}
</script>

<template>
  <div class="search-wrapper">
    <n-form class="search-form"
            :model="form"
            :rules="rules"
            ref="formRef"
            @submit="onSearch"
    >
      <n-form-item :show-label="false" path="search">
        <div class="search-form-actions row">
          <n-input v-model:value="form.search"
                   type="text"
                   :minlength="3"
                   :placeholder="t('form.search.placeholder')"
                   :input-props="{ type: 'search' }"
          />
          <insane-button type="submit" variant="primary">Найти</insane-button>
        </div>
      </n-form-item>
    </n-form>

    <div v-if="searchData[0] === null || totalCount" class="title-h3">
      {{ $t('form.search.find')}}: {{ totalCount }}
    </div>

    <div class="search-data">
      <lazy-insane-card v-for="(item, index) in searchData"
                        :key="index"
                        :data="item"
                        :is-loading="searchData[0] === null"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
  min-height: 30vh;
  margin-bottom: 100px;

  .title-h3 {
    margin-bottom: 20px;
  }
}

.search-form {
  width: 100%;

  &-actions {
    gap: 20px;

    .insane-button {
      min-width: 180px;
    }

    :deep(.n-input .n-input__input-el) {
      height: 100% !important;
    }
  }
}

.search-data {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;

  @media (max-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>