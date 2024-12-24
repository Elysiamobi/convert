const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/convert': {
        target: 'http://localhost:8010', // 后端地址
        changeOrigin: true, // 确保代理时修改源头为目标地址
        pathRewrite: { '^/convert': '/convert' }, // 保持路径一致
      },
    },
  },
});
