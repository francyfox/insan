import { SectionStepsData } from '~/components/sections/about-page/SectionSteps.vue';

export default {
  title: 'Вариантов оказания помощи несколько',
  description: 'Выбрав любой удобный для вас способ, вы можете быть уверены, что совершенное вами благодеяние дойдет до адресата.',
  caption: 'Мы ценим каждое пожертвование независимо от суммы',
  steps: [
    {
      title: 'Короткий номер',
      description: 'Пожертвовать через звонок на короткий номер',
      image: {
        alt: 'стрелка',
        src: '/img/Send.png',
        width: 53,
        height: 64,
      }
    },
    {
      title: 'Автоплатеж',
      description: 'Регулярное списывание денежных средств на пожертвование',
      image: {
        alt: 'чекбокс',
        src: '/img/Message.png',
        width: 59,
        height: 52,
      }
    },
    {
      title: 'Система мгновенной помощи',
      description: 'Через приложение или на сайте фонда, где указаны реквизиты фонда',
      image: {
        alt: 'график',
        src: '/img/Chart.png',
        width: 60,
        height: 57,
      }
    },
    {
      title: 'Личная доставка продуктов',
      description: null,
      image: {
        alt: 'сумки',
        src: '/img/Bag.png',
        width: 60,
        height: 51,
      }
    },
  ]
} as unknown as SectionStepsData