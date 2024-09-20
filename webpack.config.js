/*
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  ----> First version of the webpack.config.js file, the file under this one includes css and tailwind style config into its loaders

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: [
            'babel-loader',
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
  },
};
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Use babel-loader for JavaScript files
      },
      {
        test: /\.css$/, // Regex to test for .css files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader', // Resolves CSS imports
          {
            loader: 'postcss-loader', // Processes CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'), // Add Tailwind CSS
                  require('autoprefixer'), // Add Autoprefixer
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Preserve the original file name and path
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
  },
};
