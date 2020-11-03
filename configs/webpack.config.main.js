const path = require('path')
const baseConfig = require('./webpack.config.base')
const {merge} = require('webpack-merge')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '..', 'app/main.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'app'),
    filename: 'main.js',
  },
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  },
})
