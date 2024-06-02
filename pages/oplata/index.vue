<script setup lang="ts">
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import {usePagesStore} from "~/store/pages";

const pagesStore = usePagesStore();

const pageContent = computed(() => pagesStore.pageContent);

await pagesStore.getPageContent('oplata');

const title = computed(() => pagesStore.pageContent.title)

definePageMeta({
  title: 'pages.title.oplata'
})
</script>

<template>
  <div>
    <section-common>
      <template #header>
        {{ title }}
      </template>
    </section-common>

    <div class="section section-pay">
      <div class="container">
        <insane-content>
          <aside v-html="pageContent?.description"/>
        </insane-content>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-pay {
  margin-bottom: 100px;

  .content {
    margin: 0;
  }
}
</style>