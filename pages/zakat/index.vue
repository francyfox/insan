<script setup lang="ts">
import InsaneTabComponment from "~/components/insane-zakat/InsaneTabComponent.vue";
import SectionCommon from '~/components/sections/common/SectionCommon.vue';
import { createZakyatData } from '~/server/app/module/faker/faker.zakyat';

const currentTab = ref('whatIsZakat');

const tabsValues = {
  whatIsZakat: 'Что такое закят?',
  payableFrom: 'С чего выплачивают закят?',
  recipients: 'Кто получает закят?',
  zakatUlitr: 'Закят уль-Фитр',
  alms: 'Милостыня (садака)'
}

const tabsInfo = [
  {
    title: 'whatIsZakat'
  },
  {
    title: 'payableFrom'
  },
  {
    title: 'recipients',
  },
  {
    title: 'zakatUlitr'
  },
  {
    title: 'alms'
  }
]

const data = createZakyatData()

definePageMeta({
  title: 'Закят',
  breadcrumb: {
    ariaLabel: 'Закят'
  }
})
</script>

<template>
  <section-common>
    <template #header>
      Закят
    </template>
  </section-common>

  <section class="section zakat">
    <div class="container">
      <div class="zakat-tabs">
        <button @click="currentTab = 'whatIsZakat'" class="zakat-button"
                :class="{'zakat-button--active': currentTab === 'whatIsZakat'}">Что такое
          закят?
        </button>
        <button @click="currentTab = 'payableFrom'" class="zakat-button"
                :class="{'zakat-button--active': currentTab === 'payableFrom'}">С чего
          выплачивают
          закят?
        </button>
        <button @click="currentTab = 'recipients'" class="zakat-button"
                :class="{'zakat-button--active': currentTab === 'recipients'}">Кто получает
          закят?
        </button>
        <button @click="currentTab = 'zakatUlitr'" class="zakat-button"
                :class="{'zakat-button--active': currentTab === 'zakatUlitr'}">Закят уль-Фитр
        </button>
        <button @click="currentTab = 'alms'" class="zakat-button"
                :class="{'zakat-button--active': currentTab === 'alms'}">Милостыня (садака)
        </button>
      </div>

      <div class="zakat__content">

        <div class="tabs-content">
          <InsaneTabComponment :current-tab="currentTab"/>
        </div>

        <client-only>
          <div class="zakyat-list-item">
            <div class="zakyat-list-item-header">
              <div class="zakyat-list-item-header-title title-h3">
                Рассчитать закят
              </div>
              <div class="zakyat-list-item-header-nisab">
                <strong>
                  Нисаб:
                </strong>

                <span>
                  {{ data.nisab }}
                </span>
              </div>

              <zakyat-form :data="data" />
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