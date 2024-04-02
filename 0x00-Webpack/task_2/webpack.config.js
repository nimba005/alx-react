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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // Output images to an 'images' folder
              publicPath: 'images', // Set public path for image URLs
              // Optimize images for production
              optimization: {
                minimize: true,
              },
            },
          },
        ],
      },
    ],
  },
  // ... other configurations
};