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
            ]
        }
    },

    sentry: {
        sourceMapsUploadOptions: {
            org: 'ghartemann',
            project: 'trickledown-nuxt'
        },
        options: {
            telemetry: false
        }
    },

    sourcemap: {
        client: 'hidden'
    }
})