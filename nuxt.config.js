var fs = require('fs')
var path = require('path')

var routes = function (dir, main_route='') {
  var contentDir = path.join(__dirname, `/content/${dir}`)
  var contentFiles = fs.readdirSync(contentDir)
  return contentFiles.map(filename => {
    return {
      route: `${main_route}/${path.basename(filename, '.md')}`,
      payload: fs.readFileSync(path.join(contentDir, filename))
    }
  })
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'rnoar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },

  generate: {
    // routes: routes('articles', '/news'),
    routes: [...routes('pages'), ...routes('articles', '/news')],
    fallback: true
  }
}
