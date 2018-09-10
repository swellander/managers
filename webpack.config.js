const path = require('path');

module.exports = {
  entry: './client/src',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
