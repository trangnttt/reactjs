const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[contenthash].js",
    publicPath: '/',
    clean: true,
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
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
        test: /\.(scss|css)$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: './src/assets/scss/abstracts/_abstracts.scss',
          }
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|jpg|png|gif|svg)$/,
        use: "url-loader",
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/images", to: "./assets/images" },
      ],
    }),
  ],
};
