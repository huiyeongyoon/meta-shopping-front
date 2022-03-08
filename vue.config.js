const { VUE_APP_SERVER } = process.env
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/style.scss"; `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: VUE_APP_SERVER,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../meta-shopping-server/team_first_project01/public'
}
