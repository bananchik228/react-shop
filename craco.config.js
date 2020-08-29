const path = require('path')

module.exports = {
  webpack: {
    alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@images': path.resolve(__dirname, './src/images'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@styles': path.resolve(__dirname, './src/styles')
    } 
  }
}