// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],
  modules: ['nuxt-swiper', '@nuxtjs/i18n'],
  dayjs: {
    locales: ["ru", "ro"],
    defaultLocale: "ro",
    plugins: [],
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ro',
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
    vueI18n: '~/i18n.options.ts',
  },
  runtimeConfig: {
    public: {
      siteUrl: "http://localhost:3000",
      contentfulSpace: "",
      contentfulAccessToken: "",
      gtmId: "",
    },
    private: {
      telegramToken: "",
      telegramChatId: "",
    },
  },
  nitro: {
    preset: 'vercel-edge',
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
