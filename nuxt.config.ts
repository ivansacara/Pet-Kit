// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  _generate: false,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Petkit",
      meta: [
        { name: "description", content: "My amazing site." },
        { name: "msapplication-TileColor", content: "#86bb46" },
        { name: "destheme-colorcription", content: "#ffffff" },
        { property: 'og:url', content: 'petkit.md' },
        { property: 'og:title', content: 'Petkit' },
        { property: 'og:image', content: 'favicon.ico' },
        { property: 'og:type', content: 'website' },
      ],
      // script: [
      //   {
      //     hid: "gtmHead",
      //     innerHTML: `
      //       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      //       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      //       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      //       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      //       })(window,document,'script','dataLayer','${process.env.NUXT_PUBLIC_GTM_ID}');`,
      //   },
      // ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],
  modules: ['nuxt-swiper', '@nuxtjs/i18n'],
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
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://petkit.md",
      NUXT_PUBLIC_CONTENTFUL_SPACE: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE,
      NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      gtmId: "",
    },
  },
  nitro: {
    preset: 'vercel-edge',
    // prerender: {
    //   crawlLinks: true,
    //   routes: ["/"],
    // },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables/_variables.scss" as *;',
        },
      },
    },
  }
});
