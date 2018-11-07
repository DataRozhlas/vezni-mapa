const path = require('path');

module.exports = {
  entry: './js/script.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },

  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
           path.resolve(__dirname, "js")
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};