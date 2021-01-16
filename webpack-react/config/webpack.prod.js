const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const containerEnv = require('./env/.env.production.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${containerEnv.STATIC_URL}/`,
  },
  plugins: [
    new webpack.EnvironmentPlugin(containerEnv),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {},
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
