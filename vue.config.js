const { VUE_APP_SERVER } = process.env

module.exports = {
  devServer: {
    //CORS 해결하기위한 프록시
    proxy: {
      '/serverApi': {
        target: VUE_APP_SERVER,
        changeOrigin: true,
        pathRewrite: {
          '^/serverApi': '' //없애준다
        }
      }
    }
  }
}
