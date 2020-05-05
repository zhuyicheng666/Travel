
// vue.config.js

// 参考文档地址：https://cli.vuejs.org/zh/config/

module.exports = {

  devServer: {

    /**

     * Name : devServer.proxy

     * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。

     * 这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。

     * Type: Object || string

     */

    /**  eg2 :

         *  如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象。

         *  完整的选项可以查阅 http-proxy-middleware 。查阅地址：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
         */
    proxy: {

      '/api': {

        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }

      }

    }

  }
}
