const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = {
  host: HOST,
  port: PORT,
  ENV: ENV
};
module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src'
      },
      htmlLoader: {
        minimize: false
      }
    }),
    new WebpackMd5Hash(),
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV)
      }
    })
  ],

});
