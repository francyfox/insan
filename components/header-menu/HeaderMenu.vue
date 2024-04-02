<script setup lang="ts">
import { h, type VNode } from 'vue';
import HeaderMenuData from '~/components/header-menu/header-menu.data';
import InsaneButton from '~/components/insane-button/InsaneButton.vue';
import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';

const subTree = (child?: HeaderMenuItem[]): VNode<any> => {
  const data = HeaderMenuData
  console.log(child)
  const props = {
    isLink: true,
    class: 'header-menu-item',
    variant: 'menu',
    role: 'link'
  }

  const ulComponent = h('ul', { role: 'list', class: 'header-menu sub' })
  const liComponent = h('li', {})

  const children = data.map((i) => {
    if (i.children) {
    //   // subTree()
    //
    //   return h(liComponent, {}, subTree(i.children))
    }

    return h(liComponent, {}, h(InsaneButton, props, () => i.title))
  })

  return h(ulComponent, {}, children)
}
function openSubMenu(event: Event) {
}
</script>

<template>
  <ul class="header-menu font-arial" role="list">
<!--    <li v-for="(item, index) in HeaderMenuData"-->
<!--        :key="index"-->
<!--    >-->
<!--      <insane-button :to="item.to"-->
<!--                     :is-link="true"-->
<!--                     class="header-menu-item"-->
<!--                     variant="menu"-->
<!--                     v-on:mouseover="openSubMenu"-->
<!--                     role="link"-->
<!--      >-->
<!--        {{ item.title }}-->
<!--      </insane-button>-->

<!--    </li>-->

    <sub-tree />
  </ul>
</template>

<style scoped lang="scss">

</style>