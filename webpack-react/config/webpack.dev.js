const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const containerEnv = require('./env/.env.development.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${containerEnv.PORT}/`,
  },
  devServer: {
    port: containerEnv.PORT,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.EnvironmentPlugin(containerEnv),
    // docs: https://webpack.js.org/concepts/module-federation
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {},
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
