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
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../meta-shopping-server/public'
}
