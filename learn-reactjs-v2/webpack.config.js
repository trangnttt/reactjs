const path = require("path");
//những plugin đã cài
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
//   entry: './src/index.js', //file input
  entry:  ['./src/index.js', './src/assets/scss/style.scss' ], //file input

  output: {
    path: path.join(__dirname, "/dist"), //đường dẫn chứa file output có thể là 'public'
    filename: "[name].[contenthash].js", //file output (code được Webpack tự động sinh ra).
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single", 
    splitChunks: { //plugin này sẽ tự động tách những phần trùng lặp ra một file riêng
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
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/assets/images", to: "./assets/images" },
    //   ],
    // }),
  ],
};
