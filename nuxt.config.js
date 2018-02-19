const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'spa',

  env: {
    debug: process.env.debug
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Marie Sharp - Proud Products of Belize',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Marie Sharp´s Habanero Chili Sauce: Das Original im Direktimport. Fruchtig, feurig und natürlich ohne Zusatzstoffe: So geschmackvoll kann scharf sein!' },
      { hid: 'keywords', name: 'keywords', content: '' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Gochi+Hand|Molle:400i|Permanent+Marker|Rock+Salt|Schoolbell|Sedgwick+Ave+Display' }
    ],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        type: 'text/javascript',
      },
    ],
  },
  extend(config, { isServer }) {
    if (isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, [/^vue-awesome/, /^vue-bulma/]]
        })
      ]
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/breakpoints.js',
    '~plugins/markdown-helpers.js',
    { src: '~/plugins/vue-markdown.js', ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', ['./assets/scss/abstracts/_settings.scss', './assets/scss/abstracts/_mixins.scss']],
    'nuxt-netlify-cms',
    'nuxtent',
    '@nuxtjs/router',
    'nuxt-vuex-router-sync',
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-markdown'],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7'],
        grid: true
      }),
    ],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Netlify CMS
  */
  nuxtent: {
    content: [
      [
        'pages',
        {
          page: '/_slug',
          permalink: '/:slug',
          generate: ['get', 'getAll'],
          isPost: false,
        },
      ],
      [
        'products',
        {
        page: '/shop/_slug',
        permalink: "shop/:slug",
        generate: ['get', 'getAll'],
        isPost: false,
      }]
    ],
  },
}
