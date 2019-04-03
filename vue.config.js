module.exports = {
    devServer: {
      proxy: {
        '^/posts': {
          target: 'https://opeak.ca',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }