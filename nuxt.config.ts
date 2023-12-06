// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],
  modules: ['nuxt-swiper', '@nuxtjs/i18n'],
  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'ro',
        iso: 'ro-MD',
        file: 'ro.json',
      },
      {
        code: 'ru',
        iso: 'ru-MD',
        file: 'ru.json',
      },
    ],
    defaultLocale: 'ro',
    vueI18n: '~/i18n.options.ts',
  },
  env: {
    CTF_SPACE_ID: "33x2fmup01q1",
    CTF_CDA_ACCESS_TOKEN: "bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA",

    LANGS: {
      ru: "ru-MD",
      ro: "ro-MD",
    },
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
