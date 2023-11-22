import ru from './locales/ru.json';
import ro from './locales/ro.json';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@nuxtjs/i18n'],
  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ro',
        file: 'ro.json',
      },
      {
        code: 'ru',
        file: 'ru.json',
      },
    ],
    defaultLocale: 'ro',
    vueI18n: './i18n.options.ts',
  },
});
