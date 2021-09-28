const path = require("path");
const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,
    devtool: env.NODE_ENV !== "production" ? "inline-source-map" : false,
    devServer: {
      open: "google-chrome",
      historyApiFallback: true,
      port: 8000,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.[contenthash].css",
      }),
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        chunks: ["big-deals"],
        inject: "body",
      }),
    ],
    entry: {
      "big-deals": "./src/index.js",
    },
    output: {
      filename: "[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(sass|css|scss)$/,
          use: [
            env.NODE_ENV !== "production"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
