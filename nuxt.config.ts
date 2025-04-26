// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    modules: [
        '@nuxt/ui',
        '@sentry/nuxt/module',
        '@nuxtjs/i18n'
    ],

    app: {
        head: {
            title: 'TrickleDown.js',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/icon.png'
                },
            ]
        }
    },

    sentry: {
        sourceMapsUploadOptions: {
            org: 'ghartemann',
            project: 'trickledown-nuxt'
        }
    },

    sourcemap: {
        client: 'hidden'
    },

    i18n: {
        defaultLocale: 'en',
        compilation: {
            strictMessage: false,
            escapeHtml: false
        },
        locales: [
            {code: 'en', name: 'English', file: 'en.json'},
            {code: 'fr', name: 'French', file: 'fr.json'}
        ],
        lazy: true,
        skipSettingLocaleOnNavigate: true
    }
});