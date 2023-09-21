const webpack = require("webpack"),
path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'),
{CleanWebpackPlugin} = require("clean-webpack-plugin"),
CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/client/index.js",
    mode: "development",
    devtool: "source-map",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: 'var',
      library: 'Client',
      clean: true
  },
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
          use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
          } //added by CF
      ]

    },

    plugins: [new HtmlWebpackPlugin(

      {
      template: "./src/client/views/index.html",
      filename: "./index.html"
      }
    ),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
  })  ,
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css'
})
  
  
  
  ],
  optimization: {
    minimizer: [

      new CssMinimizerPlugin(),
    ],
    minimize: true,
    

  }

}