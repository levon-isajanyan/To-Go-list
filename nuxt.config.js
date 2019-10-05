
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Walkers join',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/static/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css' //Fortawesome style
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/Vue-material', // Vue-material plugin load in webpack
    '@/plugins/Vue-fontawesome', // Vue-fontawesome plugin load
    {
      src:'@/plugins/Google-map', //Google map src
      ssr: true // Server side rendering
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // NuxtJS Sass loader module
    [
      'nuxt-sass-resources-loader',
      ['@/assets/scss/sassMixins.scss', '@/assets/scss/sassVariables.scss']
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
