import ru from '~/plugins/i18n/ru';
import en from '~/plugins/i18n/en';

export default defineI18nConfig(() => ({
  fallbackLocale: 'ru',
  messages: {
    ru,
    en,
  },
}))