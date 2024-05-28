import ru from '~/plugins/i18n/ru.json';
import en from '~/plugins/i18n/en.json';

export default defineI18nConfig(() => ({
  fallbackLocale: 'ru',
  messages: {
    ru,
    en,
  },
}))