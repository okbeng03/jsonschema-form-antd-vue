const util = require('./examples/build/util')

module.exports = {
  pages: util.getEntries('./examples/pages/*/*.js'),
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
