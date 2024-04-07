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
    title: 'Еще',
    to: '#',
    children: [
      {
        title: 'Выплата закята',
        to: '/',
      },
      {
        title: 'О фонде',
        to: '#',
        children: [
          {
            title: 'test',
            to: '/'
          }
        ]
      },
    ]
  },
] as HeaderMenuItem[]