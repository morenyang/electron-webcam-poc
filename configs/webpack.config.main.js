const path = require('path')
const baseConfig = require('./webpack.config.base')
const {merge} = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '..', 'app/main.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'app'),
    filename: 'main.js',
  },
  target: 'electron-main',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
})
