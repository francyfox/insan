<script setup lang="ts">
import { h } from 'vue'
import { useModal } from 'naive-ui'
import { NuxtLink } from '#components';


const modal = useModal()
const route = useRouter()

const siteMap = () => {
  return route.getRoutes().map((i) => h('a', { href: i.path.replace(':slug()', 'test'), class: 'link' }, i.path))
}
function showModal() {
  modal.create({
    title: 'Карта сайта',
    content: () => h('nav', { class: 'col' }, siteMap()),
    preset: 'dialog',
    class: 'insane-modal',
  })
}
</script>

<template>
  <a href="#"
     class="link insane-sitemap"
     @click.prevent="showModal"
  >
    <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="currentColor"></path></svg>
    </span>
    <nuxt-link></nuxt-link>
  </a>
</template>

<style lang="scss">
.insane-sitemap {
  margin-left: auto;
  opacity: .5;
}

.insane-modal {
  width: 100%;
  max-width: 980px;
}
</style>