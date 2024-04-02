<script setup lang="ts">
import { createArticle } from '~/server/app/module/faker/faker.articles'
import { useMetaStore } from '~/store/meta'
import { crumbsReplaceSlug } from '~/server/app/util';

const storeMeta = useMetaStore()
const { breadcrumbs } = storeToRefs(storeMeta)
const data = createArticle()

const route = useRoute()

const slug = route.params.slug as string
const title: string = data.title

// breadcrumbs.value = crumbsReplaceSlug(breadcrumbs.value, slug, title)

useSeoMeta({
  title,
})
</script>

<template>
  <NuxtLayout>
    <template #header>
      {{ data.title }}
    </template>

    <div class="section section-articles">
      <div class="container">
        <insane-content>
          <h1>Тест</h1>
          <h2>Тест</h2>
          <h3>Тест</h3>
          <h4>Тест</h4>
          <h5>Тест</h5>
          <h6>Тест</h6>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum nibh ac ullamcorper suscipit. Curabitur eu varius eros. Pellentesque et dolor condimentum, vulputate mi vel, gravida magna. Ut dolor eros, faucibus et dui sed, vestibulum fringilla tortor. Nulla cursus suscipit lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit, turpis vitae venenatis ultrices, nunc est rhoncus velit, nec vestibulum felis mauris nec augue. Praesent non luctus est, at sollicitudin nisi. Nullam et lacinia risus. Etiam et rhoncus justo. Suspendisse ultrices iaculis lacus eget semper. Aenean a ligula dapibus, laoreet eros quis, mattis mi. Nunc ac tortor sit amet ipsum dapibus pulvinar quis commodo metus. Curabitur ex ipsum, fermentum congue felis vel, ullamcorper tempor ex.
          </p>
          <img width="200" height="200" :src="data.image" alt="" align="left">
          <p>
            Fusce accumsan lorem sed <strong>mollis</strong> <i>elementum</i>. Nam <a href="/">consectetur</a> lorem ac metus porta consequat. Morbi posuere scelerisque neque, vel molestie quam luctus quis. Curabitur varius, eros in tempor dapibus, arcu arcu tempus ipsum, at malesuada dui mi cursus mi. Curabitur consequat augue ut mi consectetur tristique. Aliquam in elit felis. Aliquam maximus erat ut ex laoreet efficitur. Sed fermentum pellentesque lobortis. Integer eleifend euismod quam, eget fermentum lectus pretium eu. Sed convallis hendrerit ipsum ut imperdiet. Ut aliquet venenatis turpis id rutrum.
          </p>
          <img width="200" height="200" :src="data.image" alt="" align="right">
          <p>
            Duis ullamcorper tellus quis ipsum finibus, ut suscipit erat vehicula. Vivamus aliquam enim vitae augue cursus, in rutrum nisi vulputate. Duis consequat tincidunt justo in venenatis. Nulla vestibulum magna a ex varius elementum. Donec vestibulum elit ut massa efficitur, non tincidunt libero vulputate. Suspendisse risus ex, porta bibendum sapien id, convallis lacinia urna. Vestibulum vitae neque enim.
          </p>
          <p>
            Maecenas ac consequat tellus. Sed eget volutpat nisi. Duis in tellus sed diam varius accumsan quis sit amet mi. Aenean tincidunt hendrerit velit, vitae consectetur sapien tempor at. Cras porttitor lacinia blandit. Fusce efficitur tellus erat, ac cursus massa fermentum et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent congue mauris sed quam hendrerit, sit amet condimentum ipsum vulputate. Pellentesque eget metus ex. Sed pellentesque consectetur suscipit.
          </p>
          <img width="200" height="200" :src="data.image" alt="" align="center">
          <p>
            In ut iaculis metus. Quisque lacinia eleifend placerat. Nunc sed molestie tortor. Nam tortor justo, blandit ut neque et, rutrum porta tellus. Ut velit dolor, lobortis id nibh sed, ullamcorper faucibus turpis. Sed sit amet scelerisque tortor, ut rutrum erat. Vestibulum eget dignissim urna. Fusce mauris nisi, lobortis dignissim tempus ut, egestas vitae urna. Sed nec tortor eget ipsum condimentum convallis. Mauris aliquet massa accumsan justo blandit pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras massa dolor, consectetur et nisl ac, fermentum tempus ipsum. Morbi pretium diam at nisi accumsan, non pretium purus dictum. Morbi lacinia magna imperdiet mi posuere, ac vehicula quam aliquam. Ut ac nulla ipsum. Aenean urna urna, rutrum a odio a, bibendum ornare dolor.
          </p>
          <ul>
            <li>Тест</li>
            <li>Тест</li>
            <li>Тест</li>
            <li>
              Тест
              <ul>
                <li>Тест</li>
                <li>Тест</li>
                <li>Тест</li>
                <li>Тест</li>
              </ul>
            </li>
          </ul>

          <ol>
            <li>Тест</li>
            <li>Тест</li>
            <li>Тест</li>
            <li>
              Тест
              <ol>
                <li>Тест</li>
                <li>Тест</li>
                <li>Тест</li>
                <li>Тест</li>
              </ol>
            </li>
          </ol>

          <div class="row">
            <insane-button variant="primary"
                           :is-link="true"
                           to="/"
            >
              Помочь
            </insane-button>
          </div>
        </insane-content>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.content .insane-button {
  width: 292px;
  margin-top: 60px;
}
</style>