export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'finalbiome',
    title: 'finalbiome',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Decentralized game deployment platform' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'finalbiome' },
      { hid: 'og-desc', property: 'og:description', content: 'Decentralized game deployment platform' },
      { hid: 'og-image', property: 'og:image', content: 'https://finalbiome.net/finalbiome-preview1200x630.jpg' },
      { hid: 'og-url', property: 'og:url', content: 'https://finalbiome.net/' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'canonical', href: 'https://finalbiome.net/' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preload', as: 'style', onload: "this.onload=null;this.rel='stylesheet'", href: 'https://fonts.googleapis.com/css?family=Noto+Sans:300,400,700,400italic,700italic&subset=latin,latin-ext&display=swap' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8GEYRKY3BT',
        async: true,
        strategy: 'lazyOnload'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/globals.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // https://github.com/nuxt-community/vuetify-module#defaultassets
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate'
    ]
  }
}
