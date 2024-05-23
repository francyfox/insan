<script setup lang="ts">
import FeedbackForm from '~/components/feedback-form/feedback-form.vue';
import Content from '~/pages/feedback/content';
import SectionCommon from '~/components/sections/common/SectionCommon.vue';

definePageMeta({
  title: 'Мне нужна помощь',
  breadcrumb: {
    ariaLabel: 'Мне нужна помощь'
  }
})

const files = [
  {
    name: 'Бланк заявления',
    url: '/files/bank-request.pdf'
  },
  {
    name: 'Необходимые документы',
    url: '/files/bank-request.pdf'
  }
]
</script>

<template>
  <div>
    <section-common>
      <template #header>
        Мне нужна помощь
      </template>
    </section-common>

    <section class="section section-feedback">
      <div class="container">
        <div class="feedback-list row">
          <div class="feedback-list-item card-shadow-md">
            <div class="title-h4">
              Нужна помощь
            </div>

            <div class="row">
              <div class="col">
                <feedback-form />
              </div>
              <div class="feedback-list-item-image col">
                <nuxt-img src="/img/png/Heart.png"
                          width="210"
                          height="164"
                          alt="heart"
                />
              </div>
            </div>
          </div>
          <div class="feedback-list-item col card-shadow-md">
            <div class="title-h4">
              Обращение к нуждающимся
            </div>

            <main class="content">
              <aside v-html="Content"
                     class="content-body font-montserrat"
              />
            </main>

            <div class="document row font-montserrat">
              <div class="document-title">
                Скачать:
              </div>

              <ul class="document-list row">
                <li v-for="(item, index) in files"
                    :key="index"
                    class="document-list-item">
                  <a :href="item.url"
                     download
                     class="row"
                  >
                    <svgo-icon-file class="icon"/>

                    <strong>
                      {{ item.name }}
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.feedback-list {
  margin-bottom: 100px;
  gap: 20px;

  @media (max-width: 980px) {
    flex-wrap: wrap;
  }

  &-item {
    width: 100%;
    padding: 46px 60px 46px 33px;
    background: var(--light-100);
    border-radius: var(--radius-xl);

    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }


    &-image {
      @media (max-width: 1320px) {
        display: none !important;
      }
    }

    .content {
      margin-bottom: 43px;
      padding: 0;
      font-size: var(--fz-xs);
    }

    .title-h4 {
      margin-bottom: 40px;
      font-size: var(--fz-l);

      @media (max-width: 980px) {
        font-size: var(--fz-lg);
      }
    }

    &:last-child {
      max-width: 550px;

      @media (max-width: 980px) {
        max-width: 100%;
      }
    }

    img {
      margin-left: auto;
    }

    aside {
      p {
        margin-bottom: 25px;
      }
    }
  }
}

.document {
  gap: 20px;
  
  &-list {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start !important;

    &-item {
      font-size: var(--fz-xs);

      a {
        gap: 4px;
        font-size: var(--fz-xss);
        transition: color .2s ease-in-out;

        &:hover {
          color: var(--primary-light);

          strong {
            text-decoration: none;
          }
        }

        strong {
          text-decoration: underline 1px var(--primary);
          text-underline-offset: 4px;
        }

        .icon {
          width: 18px;
          height: 18px;
          color: var(--primary-light);
        }
      }
    }
  }
}
</style>