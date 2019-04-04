module.exports = {
    devServer: {
      proxy: {
        '^/posts': {
          target: 'https://opeak.ca',
          ws: true,
          changeOrigin: true
        },
        '^/uploads': {
          target: 'https://opeak.ca',
          ws: true,
          changeOrigin: true
        },
        '^/abouts': {
          target: 'https://opeak.ca',
          ws: true,
          changeOrigin: true
        },
        '^/projects': {
          target: 'https://opeak.ca',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }