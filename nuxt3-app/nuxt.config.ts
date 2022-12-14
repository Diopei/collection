// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        // 配置网页头部 以下是默认值
        head: {
            "charset": "utf-8",
            "viewport": "width=device-width, initial-scale=1",
            "meta": [
                { name: 'description', content: 'My amazing site.' },
            ],
            "link": [],
            "style": [],
            "script": [],
            bodyAttrs: {
                class: 'test123444'
            },
        },
    },
    css: [
        // SCSS file in the project
        '~/assets/css/main.scss',
    ],
    // ... other options
    buildModules: [
        '@pinia/nuxt',
    ],
})
