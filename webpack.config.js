const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // mode: 'development',
  entry: {
    background: './src/backgound/index.js',
    popup: './src/popup/index.js',
    option: './src/option/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  //   hot: true
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'assets/background.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'assets/popup.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Chrome Extension',
      filename: 'assets/options.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
