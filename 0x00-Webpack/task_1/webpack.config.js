const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production for optimization
  entry: './js/dashboard_main.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Target all JavaScript files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel for transpiling ES6 code
          options: {
            presets: ['@babel/preset-env'], // Use the @babel/preset-env preset for ES6 transpilation
          },
        },
      },
    ],
  },
};