import { NuxtLink } from '#components'
import type { VNode } from 'vue'
import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';
// TODO: need types
export function renderChildren(children: any[]): VNode<any> {
  const ulTree = children.map((i: any) => {
    const liPropsClass = (i?.children)
      ? 'sub-menu-item has-child'
      : 'sub-menu-item'
    const liComponent = h('li', { class: liPropsClass })
    const { title, to } = i
    const props = {
      isLink: true,
      variant: 'menu',
      role: 'link',
      to
    } as any

    const children = (i.children)
      ? [h(NuxtLink, props, () => title), renderChildren(i.children)]
      : h(NuxtLink, props, () => title)

    return h(liComponent, {}, children)
  })

  return h('ul', { role: 'list', class: 'sub-menu card-shadow-md' }, ulTree)
}

export function closeAllOpenedMenu(parent: HTMLElement) {
  parent.classList.toggle('opened')
  const openedList = parent.querySelectorAll('.opened')

  for(const item of openedList) {
    item.classList.remove('opened')
  }
}

export function menuHandler(menuChildren: HTMLElement[]) {
  for (const clild of menuChildren) {
    clild.addEventListener('click', (e: any) => {

      const parent = e.target.parentElement

      if (parent.classList.contains('has-child')) {
        closeAllOpenedMenu(parent)
      }
    })
  }
}

export const flexMenu = (title: string = 'Еще'): HeaderMenuItem => {
  return {
    title,
    to: '#',
    children: []
  }
}

export function mountFlexMenu(data: HeaderMenuItem[], menuRef: HTMLElement, flexWidth: number = 300) {
  const liNodeList: NodeListOf<HTMLElement> = menuRef.querySelectorAll('.header-menu > li')
  const menuComputedWidth = parseInt(window.getComputedStyle(menuRef).width.replace('px', '')) - 50
  const flexButton = flexMenu()
  const excessIndexes: number[] = []
  let maxWidth: number = flexWidth

  for (const [index, li] of liNodeList.entries()) {
    if (maxWidth < menuComputedWidth) {
      maxWidth += li.offsetWidth
    } else {
      flexButton.children?.push(data[index])
      excessIndexes.push(index)
    }
  }

  const flexedData = data.slice(0, excessIndexes[0])

  return menuComputedWidth <= maxWidth
    ? [...flexedData, flexButton]
    : data
}