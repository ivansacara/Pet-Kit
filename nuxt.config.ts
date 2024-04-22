// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    _generate: false,
    app: {
        head: {
            htmlAttrs: {
                lang: 'ro'
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Petkit Moldova",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {property: 'og:type', content: 'website'},
                {property: 'og:site_name', content: 'PetKit'},
                {property: 'og:url', content: 'https://petkit.md'},
                // Add more default meta tags as needed

                // Apple Touch Icon
                {name: 'apple-touch-icon', content: '/apple-touch-icon.png'},
                {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png",},
                // Favicon
                {name: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {name: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: "shortcut icon", href: "/favicon.ico",},
                // Manifest
                {rel: 'manifest', href: '/site.webmanifest'},

                // Safari Pinned Tab
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},

                // Microsoft Tile Color
                {name: 'msapplication-TileColor', content: '#da532c'},

                // Theme Color
                {name: 'theme-color', content: '#ffffff'},
            ],
            link: [
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Questrial&family=Roboto:wght@100&display=swap'
                }
            ],
            script: [
                {
                    hid: "gtmHead",
                    innerHTML: `
                 (function (w, d, s, l, i) { w[l] = w[l] || [];
	                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-MGS8L6SK');`,
                },
            ],
        },
    },
    devtools: {enabled: true},
    css: ['~/assets/styles/global.scss',
        'vue-final-modal/style.css',],
    modules: ['nuxt-swiper', '@nuxtjs/i18n', 'nuxt-gtag', '@nuxtjs/sitemap'],
    gtag: {
        id: process.env.NUXT_PUBLIC_GTM_ID
    },
    // sitemap: {
    //     autoI18n: true,
    //     includeAppSources: true,
    //     hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://petkit.md', // Замените на адрес вашего сайта
    //     // Дополнительные параметры по вашему усмотрению
    // },
    sitemap: {
        autoI18n: true,
        hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://petkit.md', // Замените на адрес вашего сайта
        includeAppSources: true,
        gzip: true,
        routes: async () => {
            const axios = require('axios');
            const {data} = await axios.get('https://cdn.contentful.com/spaces/33x2fmup01q1/environments/master/entries?access_token=bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA&content_type=product')
            return data.items.map((item: any) => {
                `/products/${item.fields.slug}`
            })
        }
    },
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL,
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
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
            NUXT_PUBLIC_CONTENTFUL_SPACE: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE,
            NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
            TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
            TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
            gtmId: "",
        },
    },
    nitro: {
        preset: 'vercel',
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
