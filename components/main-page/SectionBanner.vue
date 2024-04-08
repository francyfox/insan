<script setup lang="ts">
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/png/adult-and-child-hands.jpg', { width: 1320, height: 567 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <section class="section section-banner">
    <div class="container">
      <div class="banner" :style="backgroundStyles">
        <div class="banner-list col">
          <h1 class="banner-list-title title-h1">
            Стань частью добра вместе с фондом  «Инсан»
          </h1>

          <main class="banner-list-description">
            Быть добрым несложно, нужно только представить себя на месте другого человека
          </main>

          <div class="row">
            <insane-button variant="hero"
                           class="banner-list-button"
                           :is-link="true"
                           to="/"
            >
              <span>Помочь</span>
              <svgo-icon-care class="icon" />
            </insane-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-banner {
  padding: 40px 0;
}

.banner {
  padding: 82px 42px 62px;
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--radius-xl);

  &-list {
    justify-content: space-between;
    box-sizing: border-box;

    &-title {
      margin-bottom: 53px;
      max-width: 604px;
      color: var(--light-100) !important;
      line-height: 1.1;
    }

    &-description {
      margin-bottom: 60px;
      max-width: 550px;
      color: var(--light-100);
      font-size: 21px;
      line-height: 1.3;
    }

    &-button {
      width: 100%;
      max-width: 248px;

      .icon {
        width: 28px;
        height: 28px;
        fill: transparent;
        stroke: currentColor;

        * {
          fill: transparent;
          stroke: currentColor;
        }
      }
    }
  }
}
</style>