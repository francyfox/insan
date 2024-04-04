import { NuxtLink } from '#components'
import type { VNode } from 'vue'
// TODO: need types
export function renderChildren(children: any[]): VNode<any> {
  const ulTree = children.map((i: any) => {
    const liPropsClass = (i.children)
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
      e.preventDefault()

      const parent = e.target.parentElement

      closeAllOpenedMenu(parent)
    })
  }
}