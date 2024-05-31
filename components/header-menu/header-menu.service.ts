import { NuxtLink } from '#components'
import type { VNode } from 'vue'
import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';
import { useLocalePath } from '#i18n';
// TODO: need types
export function renderChildren(children: any[]): VNode<any> {
  const localePath = useLocalePath()

  const ulTree = children.map((i: any) => {
    const liPropsClass = (i?.children)
      ? 'sub-menu-item has-child'
      : 'sub-menu-item'
    const liComponent = h('li', { class: liPropsClass })
    const { title, slug } = i
    const props = {
      isLink: true,
      variant: 'menu',
      role: 'link',
      to: (i?.children) ? '' : localePath(slug),
      style: (i?.children) ? 'cursor: pointer;' : '',
      onClick: (e: any) => menuHandler(e.target)
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

export function menuHandler(target: HTMLElement) {
  const parent = target.parentElement

  if (parent?.classList.contains('has-child')) {
    closeAllOpenedMenu(parent)
  } else {
    const nav = target.closest('.header-menu') as HTMLElement

    for (const item of nav.querySelectorAll('.opened')) {
      item.classList.remove('opened')
    }
  }
}

export const flexMenu = (title: string = 'Еще'): HeaderMenuItem => {
  return {
    title,
    to: '#',
    children: [],
  }
}

export function mountFlexMenu(data: HeaderMenuItem[], menuRef: HTMLElement, flexName: string) {
  const liNodeList: NodeListOf<HTMLElement> = menuRef.querySelectorAll('.header-menu > li')
  const menuComputedWidth = parseInt(window.getComputedStyle(menuRef).width.replace('px', ''))
  const flexButton = flexMenu(flexName)
  const excessIndexes: number[] = []
  let maxWidth: number = 300

  for (const [index, li] of liNodeList.entries()) {
    if (maxWidth <= menuComputedWidth) {
      maxWidth += li.offsetWidth
    } else {
      flexButton.children?.push(data[index])
      excessIndexes.push(index)
    }
  }
  console.log(flexButton.children)

  const flexedData = data.slice(0, excessIndexes[0])

  return menuComputedWidth <= maxWidth
    ? [...flexedData, flexButton]
    : data
}