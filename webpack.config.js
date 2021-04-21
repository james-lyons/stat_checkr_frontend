const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
   module: {
      rules: [
         { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader' },
         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
         {
            test: /\.(woff(2)?|ttf|png|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{ loader: 'file-loader' }],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Development',
         template: 'public/index.html',
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      port: 8080,
   },
   mode: process.env_NODE_ENV === 'production' ? 'production' : 'development',
};
