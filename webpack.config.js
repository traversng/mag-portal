// webpack should be in the node_modules directory, install if not.
var webpack = require("webpack");

module.exports = {
    entry: './public/app',
    output: {
        path: './public/dist',
        filename: 'app.bundle.js'
    },
    devtool: 'sourcemap',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
          }
        ],
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
          { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
          { test: /\.html$/, loader: 'raw' },
          { test: /\.js$/, loader: 'babel', exclude: [/app\/lib/, /node_modules/], query: { presets: ['es2015'] }}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};
