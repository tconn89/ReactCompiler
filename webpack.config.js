var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  target: 'node',
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }]
  }
};