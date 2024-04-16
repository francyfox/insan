<script setup lang="ts">
import SectionHero from '~/components/sections/about-page/SectionHero.vue';
import SectionAbout from '~/components/sections/about-page/SectionAbout.vue';
import SectionDirection from '~/components/sections/about-page/SectionDirection.vue';
import InsaneDirectionsData from '~/components/insane-directions/insane-directions.data'
import SectionTarget from '~/components/sections/about-page/SectionTarget.vue';
import SectionSteps from '~/components/sections/about-page/SectionSteps.vue';
import { targetData } from '~/server/app/module/faker/faker.target';
import stepsData from '~/server/app/module/faker/faker.steps';
import SectionRequisites from '~/components/sections/about-page/SectionRequisites.vue';
import RequisitesData from '~/server/app/module/faker/faker.requisites'

definePageMeta({
  title: 'О Нас',
})
</script>

<template>
  <NuxtLayout>
    <section-hero />
    <section-about />
    <section-direction :data="InsaneDirectionsData" />
    <section-target :data="targetData" />
    <section-steps :data="stepsData" />
    <section-requisites :data="RequisitesData" />
  </NuxtLayout>
</template>

<style lang="scss">
  .section {
    .title-h1 {
      font-size: 48px;

      @media (max-width: 1280px) {
        font-size: 38px;
      }

      @media (max-width: 768px) {
        font-size: 26px;
      }
    }
  }
</style>