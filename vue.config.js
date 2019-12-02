module.exports = {
  outputDir: 'lib',
  assetsDir: 'static',
  pages: {
    index: {
      entry: 'src/package/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['index']
    }
  },
  css: {
    extract: false
  }
}