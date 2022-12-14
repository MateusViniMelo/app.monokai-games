export default {
  // Target: https://go.nuxtjs.dev/config-target
  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'free-games-information',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  loading:{
    color: "#712cf9",
    height: "5px"

  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_GAMES
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_GAMES
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
