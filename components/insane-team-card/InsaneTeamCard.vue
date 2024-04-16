<script setup >
const props = defineProps(['employeeData']);
</script>

<template>
  <div class="card">
    <div class="card__preview">
      <img :src="employeeData?.image" :alt="employeeData?.name">
    </div>

    <div class="card__description">
      <p>{{ employeeData?.name }} </p>
      <span>{{ employeeData?.position }}</span>
    </div>


    <div class="card__action">
      <ul>
        <li>
          <a :href="employeeData?.socialLinks[0]" class="card-link">
            <svgo-icon-facebook-black class="icon"/>
          </a>
        </li>
        <li>
          <a :href="employeeData?.socialLinks[1]" class="card-link">
            <svgo-icon-whatsapp-black class="icon"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0 0 46px 0 rgba(49, 79, 124, 0.12);
  background: #fff;
  border-radius: 20px;
  padding-bottom: 20px;

  &__preview {
    max-width: 304px;
    width: 100%;
    aspect-ratio: 1 / 1;

    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      max-width: unset;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__description {
    text-align: center;
    margin-bottom: 24px;

    p {
      font-weight: 700;
      font-size: 20px;
    }

    span {
      font-weight: 400;
      font-size: 18px;
    }
  }

  &__action {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
}

.card-link {
  transition: opacity .2s ease-in-out;
  opacity: 1;

  &:hover {
    opacity: .8;
  }

  @media (max-width: 768px) {
    &:hover {
      opacity: 1;
    }

    &:active {
      opacity: .8;
    }
  }
}
</style>