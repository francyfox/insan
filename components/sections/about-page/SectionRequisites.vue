<script setup lang="ts">
interface Props {
  requisites: { companyName: string, ogrn: string, inn: string }
  bankDetails: {
    title: string,
    сorrespondentAccount: string,
    checkingAccount: string,
    bankName: string,
    bic: string
  }
  address: { title: string, moscow: string }
  contacts: { title: string, phone: string, email: string }
  documents: Array<{ title: string, path: string }>
  benefitText: string
}

defineProps<Props>();

const documentsListVisible = ref(false);
</script>

<template>
  <section class="section section-requisites">
    <div class="container">
      <div class="requisites-list col">
        <div class="requisites-list-item">
          <div class="requisites-list-item-title title-h2">
            {{ benefitText }}
          </div>
        </div>

        <div class="requisites-list-item">
          <div class="requisites-content">
            <div class="requisites-content-item">
              <aside>
                <div class="item item--left">
                  <p>
                    <span>Полное наименование:</span>
                    {{ requisites?.companyName }}
                  </p>
                </div>

                <div class="item item--left">
                  <p>
                    <span>ОГРН:</span>
                    {{ requisites?.ogrn }}
                  </p>
                </div>

                <div class="item item--left">
                  <p>
                    <span>ИНН:</span>
                    {{ requisites?.inn }}
                  </p>
                </div>

                <div class="item item--left">
                  <p>
                    {{ bankDetails?.title }}
                  </p>
                  <p>
                    <span>к/c:</span>
                    {{ bankDetails?.сorrespondentAccount }}
                  </p>

                  <p>
                    <span>р/c:</span>
                    {{ bankDetails?.checkingAccount }}
                  </p>

                  <p>
                    {{ bankDetails?.bankName }}
                  </p>

                  <p>
                    <span>БИК:</span>
                    {{ bankDetails?.bic }}
                  </p>
                </div>

                <div class="item item--left">
                  <span>Вся: </span>
                  <button @click="documentsListVisible = !documentsListVisible" class="button button-documents">
                    Документация
                  </button>
                </div>
              </aside>
            </div>

            <div class="requisites-content-item">
              <div class="item">
                <span>{{ address?.title }}</span>
                <p>{{ address?.moscow }}</p>
              </div>

              <div class="item">
                <span>{{ contacts?.title }}</span>
                <p>{{ contacts?.phone }}</p>
                <p>{{ contacts?.email }}</p>
              </div>
            </div>
          </div>

          <transition>
            <ul v-if="documentsListVisible" name="list" tag="ul" class="documents-list">
              <li v-for="(item, index) in documents" :key="index">
                <a :href="item?.path" target="_blank">
                  <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.75 12.125H13C12.2044 12.125 11.4413 11.8089 10.8787 11.2463C10.3161 10.6837 10 9.92065 10 9.125V0.375C10 0.308696 9.97366 0.245107 9.92678 0.198223C9.87989 0.151339 9.8163 0.125 9.75 0.125H4C2.93913 0.125 1.92172 0.546427 1.17157 1.29657C0.421427 2.04672 0 3.06413 0 4.125V24.125C0 25.1859 0.421427 26.2033 1.17157 26.9534C1.92172 27.7036 2.93913 28.125 4 28.125H18C19.0609 28.125 20.0783 27.7036 20.8284 26.9534C21.5786 26.2033 22 25.1859 22 24.125V12.375C22 12.3087 21.9737 12.2451 21.9268 12.1982C21.8799 12.1513 21.8163 12.125 21.75 12.125Z"
                        fill="url(#paint0_linear_3528_20278)"/>
                    <path
                        d="M21.2013 9.91193L12.2131 0.923801C12.1956 0.906425 12.1734 0.894604 12.1492 0.889825C12.1251 0.885045 12.1 0.887519 12.0772 0.896937C12.0545 0.906355 12.035 0.922295 12.0212 0.942755C12.0075 0.963215 12.0001 0.98728 12 1.01193V9.12505C12 9.39027 12.1054 9.64462 12.2929 9.83216C12.4804 10.0197 12.7348 10.1251 13 10.1251H21.1131C21.1378 10.1249 21.1618 10.1176 21.1823 10.1038C21.2028 10.0901 21.2187 10.0706 21.2281 10.0478C21.2375 10.025 21.24 9.99999 21.2352 9.97581C21.2304 9.95163 21.2186 9.92941 21.2013 9.91193Z"
                        fill="url(#paint1_linear_3528_20278)"/>
                    <defs>
                      <linearGradient id="paint0_linear_3528_20278" x1="20.4264" y1="0.124994" x2="-5.89639"
                                      y2="14.4034"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8DBEFF"/>
                        <stop offset="1" stop-color="#6B8BB7"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_3528_20278" x1="20.5769" y1="0.887449" x2="10.8893" y2="7.57547"
                                      gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8DBEFF"/>
                        <stop offset="1" stop-color="#6B8BB7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {{ item?.title }}
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.section-requisites {
  padding-top: 40px;
  margin-bottom: 100px;
}

.requisites-list {
  gap: 140px;

  &-item {
    &-title {
      margin: 0 auto;
      max-width: 820px;
      text-align: center;
      font-weight: 500;
      line-height: 48px;
    }
  }
}

.requisites-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  &-item {
    &:last-child {
      margin-left: auto;
      max-width: 488px;

      @media (max-width: 980px) {
        margin-left: 0;
        max-width: 100%;
      }
    }

    aside {
      font-size: var(--fz-sm);
    }
  }

  @media (max-width: 390px) {
    gap: 80px;
  }
}

.item {
  font-size: 18px;
  margin-bottom: 24px;

  &--left {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
}

.button-documents {
  position: relative;
  z-index: 3;
  background-color: transparent;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    display: inline-block;
    content: "";

    width: 100%;
    height: 1px;

    background: linear-gradient(90deg, #50b3b1 0%, #3681b9 100%);
  }
}

.documents-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 30px;

  li {
    a {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      transition: color .3s ease-in-out;

      &:hover {
        color: #6AB1B1;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>