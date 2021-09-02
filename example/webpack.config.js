/*
 * @Description: 
 * @Date: 2021-09-02 19:12:43
 * @LastEditTime: 2021-09-02 19:13:40
 * @LastEditors: zhaodan01
 */
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "./index.html"
})
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].[hash:6].js"
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin, new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 8000
  }
}
