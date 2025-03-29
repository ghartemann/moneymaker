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

    modules: ['@vesp/nuxt-fontawesome'],
    fontawesome: {
        icons: {
            solid: [
                'shoe-prints',
                'horse-head',
                'bread-slice',
                'bus',
                'house',
                'mobile-screen',
                'car',
                'burger',
                'plane',
                'ship',
                'building',
                'globe',
                'soccer-ball',
                'dove',
                'trash-can'
            ],
        }
    }
})