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
    title: 'РНОАР',
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-6MSWZRHBDD'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', 
      content: 'РНОАР осуществляет консультационную деятельность по вопросам анализа и управления риском, \
        по применению риск-ориентированного подхода в контрольно-надзорной деятельности различных организаций, \
        разрабатывает практические документы в сфере техносферной безопасности, проводит оценку природных рисков для конкретных территорий. \
        Имеется возможность силами Общества проводить работы по идентификации рисков для территорий и опасных производственных объектов, \
        разрабатывая при этом паспорта безопасности территорий муниципальных образований, устанавливать зоны затоплений, \
        зоны опасных факторов природных и техногенных пожаров, зоны токсических рисков, \
        устанавливать возможные зоны воздействия поражающих факторов техногенных взрывов, зоны радиационных рисков, гидродинамических аварий и др. \
        Имеется опыт и соответствующий научный потенциал для разработки Планов мероприятий по локализации и ликвидации последствий аварий на опасных производственных объектах, \
        на гидротехнических сооружениях, Планов предупреждения и ликвидации разливов нефти и нефтепродуктов, \
        Деклараций пожарной безопасности и многих других документов в сфере техносферной безопасности.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }, { src: '~plugins/ya.js', mode: 'client' }],

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
