// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/global.scss'],
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
    vueI18n: '~/i18n.options.ts',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables/_variables.scss" as *;',
        },
      },
    },
  },
});
