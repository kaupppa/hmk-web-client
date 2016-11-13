const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
  title: 'Rekisteröity hieroja Minna Kauppinen (ent. Paaso), Lauttasaari',
  description: 'Klassista hierontaa ja intialaista päähierontaa lauttasaaressa, hyvien kulkuyhteyksien varrella.' +
  ' Ajanvaraus numerosta 050 5477 811. Osoite Lauttasaarentie 37, 00200 Helsinki'
};

module.exports = {
  metadata: METADATA,
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules'],
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
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
        loaders: ['to-string-loader', 'css-loader'],
        exclude: /\leaflet.css$/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.(png)$/,
        loader: 'url?limit=25000',
        query: { mimetype: "image/png" }
      }
    ]

  },

  plugins: [
    new ForkCheckerPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
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
    })

  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
