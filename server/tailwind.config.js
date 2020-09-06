/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      'tiny': '.675rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      colors: {
        link_words_gray: '#898989',
        link_words_bg_hover_gray: '#e6e6e6',
        school_blue: '#182F59',
        school_gold: '#ECC33D',
        links_area: '#F5F5F5'

      }
    }
  },
  variants: {},
  plugins: []
}
