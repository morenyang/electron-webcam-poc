const path = require('path')

module.exports = {
  entry: './app/main.ts',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'main.js',
  },
  target: 'electron-main',
  module: {
    rules: [
      {test: /\.ts$/, include: path.resolve('./app'), loader: 'babel-loader'},
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
}
