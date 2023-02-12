const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8089/',
  },
  devServer: {
    port: 8089,
    historyApiFallback: true //fix cannot find routes upon reload
    // historyApiFallback: {
    //   index: 'index.html',
    // },
  },
  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'subApp',
      filename: 'remoteEntry.js',
      exposes: {
        './SubApp': './src/bootstrap',
      },
      // shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
