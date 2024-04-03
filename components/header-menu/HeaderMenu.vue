<script setup lang="ts">
import { h, type VNode } from 'vue';
import HeaderMenuData from '~/components/header-menu/header-menu.data';
import InsaneButton from '~/components/insane-button/InsaneButton.vue';
import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';

const subTree = (): VNode<any> => {
  const data = HeaderMenuData

  const props = {
    isLink: true,
    class: 'header-menu-item',
    variant: 'menu',
    role: 'link'
  }

  const ulComponent = h('ul', { role: 'list', class: 'header-menu' })
  const liComponent = h('li', {})

  const children = data.map((i) => {
    const children = (i.children)
        ? [h(InsaneButton, props, () => i.title), renderChildren(i.children)]
        : h(InsaneButton, props, () => i.title)
    return h(liComponent, {}, children)
  })

  return h(ulComponent, {}, children)
}

function renderChildren(children: any[]) {
  const ulTree = children.map((i: any) => {
    const liComponent = h('li', {})
    const { title, to } = i
    const props = {
      isLink: true,
      class: 'header-menu-item',
      variant: 'menu',
      role: 'link',
      to
    }

    const children = (i.children)
        ? [h(InsaneButton, props, () => i.title), renderChildren(i.children)]
        : h(InsaneButton, props, () => i.title)

    return h(liComponent, {}, h(InsaneButton, props, children))
  })

  return h('ul', { role: 'list', class: 'header-menu sub' }, ulTree)
}
function openSubMenu(event: Event) {
}
</script>

<template>
  <sub-tree />
</template>

<style scoped lang="scss">

</style>