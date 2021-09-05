/* eslint-disable no-undef */
const colors = require('./src/styles/colors');
const screens = require('./src/styles/screens');
const container = require('./src/styles/container');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        danger: colors.danger,
        warning: colors.warning,
        success: colors.success,
        info: colors.info,
        gray: colors.gray,
      },
      screens,
    }
  },
  variants: {
    extend: {
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    container,
  ],
  mode: 'jit'
};