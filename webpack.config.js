// NOTE: This is a Webpack 2 configuration file for react-map-gl
const { resolve } = require('path');
const webpack = require('webpack');

// Otherwise modules imported from outside this directory does not compile.
// Also needed if modules from this directory were imported elsewhere
// Seems to be a Babel bug
// https://github.com/babel/babel-loader/issues/149#issuecomment-191991686
const BABEL_CONFIG = {
  presets: [
    'es2015',
    'react',
    'stage-1',
  ].map(name => require.resolve(`babel-preset-${name}`)),
};

const config = {
  // Example entry point
  entry: {
    app: ['babel-polyfill', resolve('./src/index.js')],
  },

  // Silence excessive webpack dev server warnings
  devServer: {
    stats: {
      warnings: false,
    },

    contentBase: [
      __dirname,
      resolve(__dirname, '../'),
    ],
    port: 8080,
    proxy: {
      '/mytaxi': { target: 'http://localhost:5000' },
      '/car2go': { target: 'http://localhost:5000' },
    },
  },

  devtool: 'source-maps',

  module: {
    rules: [{
      // Compile ES2015 using bable
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: BABEL_CONFIG,
      }],
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader'],
    }],
  },

  resolve: {
    modules: [
      // Always resolve module to this app's node_modules first
      resolve('./node_modules'),
      'node_modules',
    ],
    alias: {
      // used by Mapbox
      webworkify: 'webworkify-webpack-dropin',
      // From mapbox-gl-js README. Required for non-browserify bundlers (e.g. webpack):
      'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    },
  },

  // Allow setting mapbox token using environment variables
  plugins: [
    new webpack.EnvironmentPlugin(['MapboxAccessToken']),
    new webpack.LoaderOptionsPlugin({ minimize: false, debug: true }),
  ],
};

module.exports = config;
