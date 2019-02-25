const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    background: './js/background/index.js',
    popup: './js/popup/index.js',
    option: './js/option/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../crx/static'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /(\.png|\.jpg|\.gif|\.svg)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../crx/*')]),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'background.html',
      // template: 'src/html/background.html',
      chunks: ['background']
    }),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'popup.html',
      template: 'html/popup.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'option.html',
      template: 'html/option.html',
      chunks: ['option']
    })
  ]
}
