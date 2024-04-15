<script setup lang="ts">
import SectionHero from '~/components/sections/about-page/SectionHero.vue';
import SectionAbout from '~/components/sections/about-page/SectionAbout.vue';
import SectionDirection from '~/components/sections/about-page/SectionDirection.vue';
import InsaneDirectionsData from '~/components/insane-directions/insane-directions.data'
import SectionTarget, { type SectionTargetData } from '~/components/sections/about-page/SectionTarget.vue';

definePageMeta({
  title: 'О Нас',
})

const targetData = {
  title: 'Наша цель',
  description: '<p> Знакомя людей с историями подопечных, нам удается привлечь общественное внимание' +
      'к проблемам малоимущих граждан. </p>' +
      '<p>Следуя этому вектору работы, фонд развивает культуру закята через разъяснение его ценности и важности. ' +
      'Оказываемая через Фонд «Инсан» помощь имеет целенаправленный, аргументированный, адресный характер.</p>' +
      '<p>Фондом проводится тщательная проверка всех обращений: анкетирование и выездная инспекционная поездка. Это делается для полной прозрачности нашей работы, для установления действительного положения дел у подопечных, для проведения более полного набора вспомогательных мер \n' +
      'и мероприятий.</p>',
  image: {
    alt: 'image',
    src: 'https://picsum.photos/630/640',
    width: 630,
    height: 640,
  }
} as unknown as SectionTargetData


</script>

<template>
  <NuxtLayout>
    <section-hero />
    <section-about />
    <section-direction :data="InsaneDirectionsData" />
    <section-target :data="targetData" />
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>