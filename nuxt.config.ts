// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // Disable SSR for mobile app
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
        '@sentry/nuxt/module'
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
            ],
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover' }
            ]
        }
    },

    sentry: {
        sourceMapsUploadOptions: {
            org: 'ghartemann',
            project: 'trickledown-nuxt'
        }
    },

    components: [
        '~/components'
    ],

    sourcemap: {
        client: 'hidden'
    }
})
