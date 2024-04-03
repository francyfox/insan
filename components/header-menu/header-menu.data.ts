import type { HeaderMenuItem } from '~/components/header-menu/header-menu.type';

export default [
  {
    title: 'Я хочу помочь',
    to: '/'
  },
  {
    title: 'Мне нужна помощь',
    to: '/'
  },
  {
    title: 'Программы фонда',
    to: '/'
  },
  {
    title: 'Eще',
    to: '/',
    children: [
      {
        title: 'Выплата закята',
        to: '/',
        children: [
          {
            title: 'SSS',
            to: '/',
          }
        ]
      }
    ]
  },
] as HeaderMenuItem[]