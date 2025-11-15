// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Quantum Mobile Detailing',
      meta: [
        {
          name: 'description',
          content:
            'Quantum Mobile Detailing provides premium mobile car detailing across Saint Helens and the Oregon Northwest.',
        },
      ],
    },
  },
})
