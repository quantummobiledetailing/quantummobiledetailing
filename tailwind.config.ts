import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#ef4444',
          secondary: '#fb7185',
          accent: '#fecaca',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.35)',
      },
    },
  },
  plugins: [],
}
