const cheerio = require('cheerio')

class FuckSmartisanPlugin {
  constructor (options) {
  }

  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      let $ = cheerio.load(compilation.assets['index.html'].source())
      $('#root').after(`
        <script>
          console.log('fuck smartisan')
        </script>
      `)
      let newTemp = $.html()
      compilation.assets['index.html'] = {
        source: () => {
          return newTemp
        },
        size: () => {
          return Buffer.byteLength(newTemp, 'utf8')
        }
      }
      callback()
    })
  }
}

module.exports = FuckSmartisanPlugin
