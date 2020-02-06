module.exports = {
  outputDir: '../static',
  indexPath: '../templates/test/index.html',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/static/'
    : '/'
}
