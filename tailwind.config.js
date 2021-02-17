const colors = require('windicss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        192: '48rem',
        256: '64rem',
      },
      colors: {
        brand: colors.blue,
        cta: colors.red,
        info: colors.lightBlue,
        warning: colors.yellow,
        success: colors.green,
        danger: colors.rose,
      },
      screens: {
        landscape: { raw: '(orientation: landscape)' },
        portrait: { raw: '(orientation: portrait)' },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
  ],
}
