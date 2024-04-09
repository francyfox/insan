<script setup lang="ts">
import { formatCount } from '~/server/app/util';

const data = [
  {
    icon: '/img/png/Star.png',
    alt: 'звезда',
    title: 1240567,
    description: 'Человек поддержали фонд'
  },
  {
    icon: '/img/png/Profile.png',
    alt: 'люди',
    title: 125789,
    description: 'Человек получили помощь'
  },
  {
    icon: '/img/png/Activity.png',
    alt: 'действия',
    title: '12 лет',
    description: 'Помогаем людям'
  }
]
</script>

<template>
  <section class="section section-advantages">
    <div class="container">
      <div class="advantage-list row">
        <div v-for="(item, index) in data"
             :key="index"
             class="advantage-list-item row card-shadow-md"
        >
          <nuxt-img :src="item.icon"
                    :alt="item.alt"
          />

          <div class="col">
            <div class="advantage-list-item-title">
              {{ typeof item.title === 'number' ? formatCount(item.title) : item.title }}
            </div>
            <div class="advantage-list-item-description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-advantages {
  margin-bottom: 100px;
}

.advantage-list {
  gap: 4px;

  @media (max-width: 980px) {
    gap: 20px;
    flex-direction: column;
  }

  &-item {
    padding: 15px 24px;
    gap: 18px;
    background: var(--light-100);
    border-radius: var(--radius-xl);

    @media (max-width: 980px) {
      gap: 40px;
    }

    img {
      flex-shrink: 0;
      min-width: 71px;
      object-fit: contain;
    }

    &-title {
      font-size: 33px;
      font-weight: 600;
      color: var(--dark-700);
    }

    &-description {
      font-size: var(-fz-sm);
      color: var(--light-400);
      font-weight: 500;
    }

    .col {
      justify-content: center;
    }
  }
}
</style>