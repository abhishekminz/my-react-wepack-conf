const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.mode,
    entry: {
      index: './src/index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ 
        // dry: false, 
        // cleanStaleWebpackAssets: true, 
        cleanOnceBeforeBuildPatterns: ['**/*'], 
      }),
      new HtmlWebpackPlugin({template: './template/index.html'})
    ]
  };
}