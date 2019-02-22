const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './crx',
    compress: true,
    port: 9000,
    hot: true
  }
  // plugins: [new webpack.HotModuleReplacementPlugin()]
})
