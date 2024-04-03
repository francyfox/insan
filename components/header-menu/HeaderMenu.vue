<script setup lang="ts">
import { h, type VNode } from 'vue';
import HeaderMenuData from '~/components/header-menu/header-menu.data';
import InsaneButton from '~/components/insane-button/InsaneButton.vue';
import { menuHandler, renderChildren } from '~/components/header-menu/header-menu.service';

const menuRef = ref()
const menuTree = (): VNode<any> => {
  const data = HeaderMenuData

  const props = {
    isLink: true,
    class: 'header-menu-item',
    variant: 'menu',
    role: 'link'
  } as any

  const ulComponent = h('ul', { role: 'list', class: 'header-menu' })
  const liComponent = h('li', {})

  const children = data.map((i) => {
    const { to } = i
    const liProps = (i.children) ? { class: 'has-child' } : {} as any
    const children = (i.children)
        ? [h(InsaneButton, {...props, to }, () => i.title), renderChildren(i.children)]
        : h(InsaneButton, {...props, to }, () => i.title)
    return h(liComponent, liProps, children)
  })

  return h(ulComponent, {}, children)
}

onMounted(() => {
  const menuChildren = menuRef.value.querySelectorAll('a')
  menuHandler(menuChildren)
})
</script>

<template>
  <menu-tree ref="menuRef" />
</template>

<style lang="scss">
@import "header-menu.style";
</style>