var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = {
  context: __dirname + '/app',
  entry: './js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version' },
      { test: /\.png/, loader: 'url-loader?limit=10000'}
    ]
  },
  plugins: [
    new BowerWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    })
  ],
  devServer: {
    port: 8081
  }
};


if (process.argv.join('').indexOf('production') !== -1) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]);
}
else {
  config.debug = true;
  config.devtool = 'source-map';
  config.output.publicPath = 'http://localhost:8081/'
}

module.exports = config;