const pkg = require('./package')


module.exports = { 
  /*
  ** 构建模式
  */
  mode: 'universal',

  /*
  ** 服务配置
  */
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  /*
  ** 页面默认head配置，可在页面组件中覆盖
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** 定制进度条颜色
  */
  loading: {
    color: '#08b620',
    height: '5px'
  },

  /*
  ** 全局css
  */
  css: [
    'ant-design-vue/dist/antd.less'
  ],

  /*
  ** 挂载APP前的附加项
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios'
  ],

  /*
  ** 添加的模块
  */
  modules: [
    // 文档: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  /*
  ** axios模块的配置
  */
  axios: {
    // 文档: https://github.com/nuxt-community/axios-module#options
    debug: false,
    proxy: true,
    credentials: true,
    prefix: '/api/',
    retry: { retries: 3 },
  },

  /*
  ** 代理配置
  */
  proxy: {
    '/api/': { target: 'http://y7ysyd.natappfree.cc', pathRewrite: { '^/api/': '/' } }
  },

  /*
  ** 全局路由设置
  */
  router: {
    middleware: 'check-auth'
  },

  /*
  ** 全局注入less变量和混入
  */
  styleResources: {
    // 文档: https://github.com/nuxt-community/style-resources-module
    less: [
      './assets/less/variables.less',
      './assets/less/mixins.less'
    ]
  },

  /*
  ** webpack构建配置
  */
  build: {
    /*
    ** 分析依赖优化
    */
    analyze: false,

    /*
    ** 优化CSS
    */
    optimizeCSS: true,

    /*
    ** 加载器配置
    */
    loaders: {
      less: {
        modifyVars: {
          'primary-color': '#08b620'
        },
        javascriptEnabled: true
      }
    },

    /*
    ** 扩展项
    */
    extend(config, ctx) {
      // 添加并运行eslint规则
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
