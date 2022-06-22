const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean:true,
   },
   devServer: {
      static: './dist',
      port: 8080,
      open: true
    },
   plugins: [
      new HtmlWebpackPlugin({
         template:'./src/index.html'
      }),
   ],
   module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
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
    }
};