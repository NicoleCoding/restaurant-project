const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'

    }),
    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'src/**/*.js'),
        path.join(__dirname, 'src/**/*.html')
      ]),
    }),
]
};