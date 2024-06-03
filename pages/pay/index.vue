<script setup lang="ts">
import InsaneTabComponment from "~/components/insane-zakat/InsaneTabComponent.vue";
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { useZakatTabsStore } from '~/store/zakat';
import { useSettingsStore } from '~/store/settings';

const settingsStore = useSettingsStore()
const { settings } = storeToRefs(settingsStore)
const store = useZakatTabsStore()
const { getZakatTabs } = store
const { zakatTabs } = storeToRefs(store)
const currentTab = ref(0);

const nisab = computed(() => Number(settings.value?.nisab) )

const data = {
  nisab,
  tax: 0.025,
}

await getZakatTabs()

definePageMeta({
  title: 'pages.title.pay',
})
</script>

<template>
  <section-common>
    <template #header>
      {{ $t('pages.title.pay') }}
    </template>
  </section-common>

  <section class="section zakat">
    <div class="container">
      <div class="zakat-tabs">
        <button v-for="(item, index) in zakatTabs"
                @click="currentTab = index"
                class="zakat-button"
                type="button"
                :class="{'zakat-button--active': currentTab === index}">
          {{ item?.title }}
        </button>
      </div>

      <div class="zakat__content">
        <div class="tabs-content">
          <InsaneTabComponment :current-tab="zakatTabs[currentTab]"/>
        </div>

        <client-only>
          <div class="zakyat-list-item">
            <div class="zakyat-list-item-header">
              <div class="zakyat-list-item-header-title title-h3">
                {{ $t('form.zakat.title') }}
              </div>
              <div class="zakyat-list-item-header-nisab">
                <strong>
                  {{ $t('form.zakat.nisab')}}:
                </strong>

                <span>
                  {{ data.nisab }}
                </span>
              </div>

              <lazy-zakyat-form :data="data" />
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: block;
  justify-content: unset;
}

.zakat {
  margin-bottom: 100px;

  &__heading {
    margin-bottom: 60px;
  }
  
  &__content {
    display: flex;
    gap: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.zakat-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.zakat-button {
  font-size: 14px;
  border-radius: 60px;
  letter-spacing: -0.01em;
  background-color: #FFFFFF;
  padding: 16px;

  transition: box-shadow .2s linear;

  &--active {
    box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  }
}

.zakyat-list-item {
  max-width: 462px;
  width: 100%;
  height: 100%;

  border-radius: 36px;
  padding: 60px 40px;
  box-shadow: 0 0 48px 0 rgba(49, 79, 124, 0.12);
  background: #fff;

  &-header-nisab {
    margin-bottom: 40px;
    font-size: var(--fz-sm);
  }

  @media (max-width: 1200px) {
    padding: 60px 20px;
    max-width: unset;
  }
}

</style>