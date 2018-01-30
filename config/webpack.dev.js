const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: ENV
};
module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
      },
      debug: true
    }),
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV)
      },
      metadata: METADATA
    }),
  ],

  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      poll: 1000
    },
    inline: true
  },
});
