//webpack.config.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isWatch = process.argv.find(arg => arg.includes("-w")) ? true : false




module.exports = {
  externals: [],
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/app.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".d.ts"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: "index.html"
  })
  ],
};