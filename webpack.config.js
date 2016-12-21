const webpack = require('webpack')
const path = require('path')

const IS_PROD = process.argv.indexOf('-p') > 0

module.exports = {
  entry: './app/client.js',

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    modules: [
      path.join(__dirname),
      'node_modules'
    ]
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: 'buble-loader'
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader'
      }
    ]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   riot: 'riot',
    //   page: 'page'
    // }),
  ].concat(IS_PROD ? [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'production'
      })
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ] : []),

  stats: { children: false },

  devtool: IS_PROD ? false : '#eval-source-map'
}
