const webpack = require("webpack"),
path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    mode: "development",
    devtool: "source-map",
    
    resolve: {
        extensions: ['.ts', '.js'],
      },

    module: {
      rules: [
        {
          test: "/\.js$/",
          exclude: /node_modules/,
          loader: "babel-loader"

        },
        {
          test: /\.s[ac]ss$/i,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          } //added by CF
      ]

    },

    plugins: [new HtmlWebpackPlugin(

      {
      template: "./src/client/views/index.html",
      filename: "./index.html"
      }
    )],

}