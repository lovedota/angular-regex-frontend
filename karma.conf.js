var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var ProvidePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
});

module.exports = function(karma) {
  karma.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/js/main-karma-webpack.js'
    ],
    reporters: ['dots'],
    preprocessors: {
      'app/js/main-karma-webpack.js': ['webpack'],
      'app/js/**/*_test.js': ['webpack']
    },
    webpack: {
      normal: {},
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
      },
      plugins: [new BowerWebpackPlugin(), ProvidePlugin]
    },
    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher")
    ],
    browsers: ['PhantomJS'],
    logLevel: 'LOG_DEBUG',
    singleRun: false,
    autoWatch: true,
    browserNoActivityTimeout: 50000
  });
};
