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
    title: 'Выплата закята',
    to: '/',
  },
  {
    title: 'О фонде',
    to: '/',
    children: [
      {
        title: 'test',
        to: '/'
      }
    ]
  },
  {
    title: 'Еще',
    to: '/',
    children: []
  },
] as HeaderMenuItem[]