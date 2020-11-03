// refs https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/master/internals/scripts/BabelRegister.js
const path = require('path')

module.exports = require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  cwd: path.join(__dirname, '..'),
})
