const path = require('path')
const glob = require('glob')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? '.'
    : '.'

  return path.posix.join(assetsSubDirectory, _path)
}

exports.getEntries = (globPath) => {
  var entries = {}
  /**
   * 读取src目录,并进行路径裁剪
   */
  glob.sync(globPath).forEach(function (entry) {
    var tmp = entry.split('/').splice(-3)
    var moduleName = tmp.slice(1, 2)

    entries[moduleName] = entry
  })

  return entries
}
