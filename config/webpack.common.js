const webpack = require('webpack');
const helpers = require('./helpers');
var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [helpers.root('src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.ts$/,
        loader: 'angular2-template-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\leaflet.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.css$/,
        loaders: 'to-string-loader',
        exclude: /\leaflet.css$/
      },
      {
        test: /\.css$/,
        loaders: 'css-loader',
        exclude: /\leaflet.css$/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.(png)$/,
        loader: 'url-loader?limit=25000',
        query: { mimetype: "image/png" }
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('src'), // location of your src
    ),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendor', 'polyfills']
    }),

    new CopyWebpackPlugin([
      {
        from: 'node_modules/leaflet/dist/images',
        to: 'assets/leaflet/images'
      },
      {
        from: 'src/assets/favicon.png',
        to: 'favicon.png'
      },
      {
        from: 'src/assets/robots.txt',
        to: 'robots.txt'
      },
      {
        from: 'src/assets/sitemap.xml',
        to: 'sitemap.xml'
      }
    ], {
        copyUnmodified: true
      }
    ),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'hinnasto/index.html',
      chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'saapuminen/index.html',
      chunksSortMode: 'dependency'
    })
  ],

  node: {
    global: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
