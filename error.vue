<script setup lang="ts">
import type { NuxtError } from '#app'
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

useHead({
  script: [
    { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'}
  ]
})

const props = defineProps({
  error: Object as () => NuxtError
})

const { finish } = useLoadingIndicator()

finish({ force: true })

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <nuxt-layout>
    <section-common>
      <template #header>
        Ошибка {{ error.statusCode }}
      </template>
    </section-common>

    <section class="section-error">
      <div class="container">
        <div class="col">
          <div class="message-container">
            <lottie-player src="/animation/error.json" background="transparent"  speed="1"  style="width: 150px; height: 150px;" loop autoplay></lottie-player>
            <div class="title-h5 message">{{ error?.statusMessage }}</div>
            <p>Попробуйте сделать другой запрос или вы можете</p>
            <insane-button type="button" variant="primary" @click="handleError">Вернуться на главную страницу</insane-button>
          </div>
        </div>
      </div>
    </section>
  </nuxt-layout>
</template>

<style scoped lang="scss">
.section-error {
  padding-bottom: 50px;
}

.message-container {
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.message {
  margin-bottom: 8px;
}

lottie-player {
  margin-right: 20px;
  display: inline;
  float: left;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.insane-button {
  margin-top: 30px;
}
</style>