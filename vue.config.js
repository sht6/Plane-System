module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      "/api": {
        // 要代理的服务器地址  这里不用写 api
        target:
          " https://mock.mengxuegu.com/mock/656dcedabe3e30497c65395d/example",
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // 去掉api
          "^/api": "/",
        },
      },
    },
    open: true, // 自动打开浏览器
    compress: true, // 启动 gzip 压缩
    hot: true,
  },
};
