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
  position: relative;
  padding: 82px 42px 62px;
  width: 100%;
  height: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--radius-xl);
  overflow: hidden;

  @media (max-width: 980px) {
    padding: 100px 14px 87px;
  }

  &:after {
    @media (max-width: 980px) {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  &-list {
    position: relative;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 1;

    &-title {
      margin-bottom: 53px;
      max-width: 604px;
      color: var(--light-100) !important;
      line-height: 1.1;

      @media (max-width: 768px) {
        margin-bottom: 60px;
      }
    }

    &-description {
      margin-bottom: 60px;
      max-width: 550px;
      color: var(--light-100);
      font-size: 21px;
      line-height: 1.3;

      @media (max-width: 768px) {
        margin-bottom: 40px;
        font-size: var(--fz-smx);
      }
    }

    &-button {
      width: 100%;
      max-width: 248px;

      @media (max-width: 980px) {
        max-width: 200px;
      }


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