class FuckSmartisanPlugin {
  constructor (options) {
  }

  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      console.log(Object.keys(compilation.assets))
      callback()
    })
  }
}

module.exports = FuckSmartisanPlugin
