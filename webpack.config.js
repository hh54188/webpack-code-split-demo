const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app_a: "./src/index_a.js",
    app_b: "./src/index_b.js",
    app_c: "./src/index_c.js"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    jquery: "jQuery"
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    open: true,
    hot: true,
    overlay: {
      error: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["app_a"],
      template: path.join(__dirname, "public/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
