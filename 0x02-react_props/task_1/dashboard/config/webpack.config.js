const path = require('path');

module.exports = {
  mode: 'development', // Set mode to development for hot reloading
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rule for image files
        use: [
          {
            loader: 'file-loader', // Use file-loader
            options: {
              name: '[name].[ext]', // Output filename format with extension
              outputPath: 'assets', // Output path for images
            },
          },
        ],
      },
    ],
  },
  devServer: {
  static: {
    directory: './dist', // Content base for the dev server
  },
  hot: true, // Enable hot module replacement
},
 
  devtool: 'inline-source-map', // Enable inline source maps
};