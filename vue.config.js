module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // 要公用的scss的路径
                    resources: './src/assets/scss/global.scss'
                })
                .end()
        })
    },
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        // port: "8080", // 代理断就
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
          "/api": {
            target:
              "http://localhost:3000", // 目标代理接口地址
            secure: false,
            changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
            ws: true, // 是否启用websockets
            pathRewrite: {
              "^/api": "/"
            }
          }
        }
      }
    
}