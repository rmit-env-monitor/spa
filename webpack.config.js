const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: [
    "./src/index.jsx",
    "./dist/css/index.scss",
    "./dist/css/font-awesome-4.7.0/css/font-awesome.min.css",
    "./node_modules/react-placeholder/lib/reactPlaceholder.css",
    "./node_modules/react-dates/lib/css/_datepicker.css"
  ],

  output: {
    path: path.resolve(__dirname, "./bundles"),
    filename: "index.js",
    publicPath: "/"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: "index.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "index.html",
      inject: "body"
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: "file-loader",
        options: {
          limit: 25000
        }
      }
    ]
  }
};

module.exports = config;
