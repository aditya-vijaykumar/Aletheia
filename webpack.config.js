const path = require('path');

module.exports = Object.assign(require('./webpack.config.js'), {
  entry: './app.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
