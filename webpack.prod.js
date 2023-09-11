const webpack = require("webpack"),
path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    
    resolve: {
        extensions: ['.ts', '.js'],
      },

    module: {
      rules: [
        {
          test: "/\.js$/",
          exclude: /node_modules/,
          loader: "babel-loader"

        }

      ]

    }

}