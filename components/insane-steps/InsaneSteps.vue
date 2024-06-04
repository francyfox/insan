<script setup lang="ts">
interface Props {
  collections: Array<{ title: string, desc: string, icon: string }>
}

defineProps<Props>();
</script>

<template>
  <div class="story-list col">
    <div v-for="(item, index) in collections" :key="index" class="story-list-item">
      <div class="row">
        <nuxt-img :src="item?.icon" class="story-list-item-image img-contain"/>

        <div class="story-list-item-header col">
          <div class="story-list-item-title title-h3">
            {{ item.title }}
          </div>

          <div v-if="item.desc" class="story-list-item-description">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.story-list {
  gap: 16px;

  &-item {
    > .row {
      margin-bottom: 16px;
      gap: 36px;
    }

    &:not(:first-child) img {
      margin-left: -7px;
      width: 75px;
      height: 65px;
    }

    &:after {
      margin-left: 30px;
      content: '';
      display: flex;
      width: 2px;
      height: 100px;
      background: var(--dark-900);
    }

    &:last-child {
      &:after {
        display: none;
      }

      > .row {
        margin-bottom: 0;
      }
    }

    &-image {
      width: 60px;
    }
  }
}
</style>