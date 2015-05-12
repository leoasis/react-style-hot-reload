var webpack = require('webpack');
var ReactStylePlugin = require('react-style-webpack-plugin');

var config = {
  entry: 'index',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/' // Required for webpack-dev-server
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-style$': __dirname + '/vendor/react-style'
    }
  },
  plugins: [
    // new ReactStylePlugin('bundle.css'), // Avoiding ReactStyle plugin since it doesn't play well with hot reload
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', './react-style-hot-loader', ReactStylePlugin.loader(), 'babel?{stage: 0}']}
    ]
  }
};

module.exports = config;
