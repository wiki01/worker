const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/users': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost:3000'
      }
    }
  }
})
