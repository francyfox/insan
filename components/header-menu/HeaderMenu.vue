<script lang="ts">
import { defineComponent } from 'vue';
import { h } from 'vue';
import InsaneButton from '~/components/insane-button/InsaneButton.vue';
import { menuHandler, renderChildren } from '~/components/header-menu/header-menu.service';

export default defineComponent({
  props: ['data'],
  setup(menuProps) {
    return () => {
      const props = {
        isLink: true,
        class: 'header-menu-item card-shadow-md',
        variant: 'menu',
        role: 'link'
      } as any

      const ulComponent = h('ul', { role: 'list', class: 'header-menu font-arial' })
      const liComponent = h('li', {})

      const children = menuProps.data.map((i: any) => {
        const { to } = i
        const liProps = (i?.children) ? { class: 'has-child' } : {} as any
        const children = (i?.children)
            ? [h(InsaneButton, {...props, to }, () => i.title), renderChildren(i.children.filter((j: any) => j))]
            : h(InsaneButton, {...props, to }, () => i.title)
        return h(liComponent, liProps, children)
      })

      return h(ulComponent, {}, children)
    }
  },
  updated() {
    const menuChildren = this.$el.querySelectorAll('a')
    menuHandler(menuChildren)
  },
})
</script>

<style lang="scss">
@import "header-menu.style";
</style>