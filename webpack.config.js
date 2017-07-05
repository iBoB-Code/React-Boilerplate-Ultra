const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['./src/index.jsx', './src/index.scss', 'webpack-hot-middleware/client?reload=1'],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets: ['es2015', 'stage-3', 'react'],
          plugins: ['transform-decorators-legacy'],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
  ],
};
