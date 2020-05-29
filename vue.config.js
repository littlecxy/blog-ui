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
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
        proxy: {
          '/api': {
            target: '',
            changeOrigin: true,
            pathRewrite: { }
          }
        }
      }
    
}