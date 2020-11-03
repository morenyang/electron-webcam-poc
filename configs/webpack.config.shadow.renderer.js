const baseConfig = require('./webpack.config.base')
const {merge} = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {spawn} = require('child_process')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '..', 'app/shadow/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'app/shadow/dist'),
    filename: 'index.[hash:8].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'app/shadow/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '..', 'app/shadow/dist'),
    hot: true,
    port: 3011,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
  },
})
