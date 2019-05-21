const util = require('./build/util')

module.exports = {
  pages: process.env.NODE_ENV === 'production'
    ? {
      index: './packages/index.js',
      ...util.getEntries('./packages/components/*/*.js')
    }
    : util.getEntries('./examples/pages/*/*.js'),
  outputDir: process.env.NODE_ENV === 'production' ? 'es' : 'dist',
  filenameHashing: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    extract: {
      filename: '[name]/index.css'
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals({
        vue: 'Vue'
      })
      config.output.filename('[name]/index.js')
      config.plugins.delete('copy')
      config.optimization.delete('minimizer')
      config.optimization.delete('splitChunks')

      const entry = Object.keys(util.getEntries('./packages/components/*/*.js'))
      entry.unshift('index')

      for (let i = 0, len = entry.length; i < len; i++) {
        const item = entry[i]
        config.plugins.delete(`html-${item}`)
        config.plugins.delete(`preload-${item}`)
        config.plugins.delete(`prefetch-${item}`)
      }
    }
  }
}
