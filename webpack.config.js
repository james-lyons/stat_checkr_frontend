const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
      publicPath: '/',
      assetModuleFilename: 'images/[hash][ext][query]',
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
   module: {
      rules: [
         { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader' },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            type: 'asset',
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
      contentBase: `${__dirname}/dist`,
      historyApiFallback: true,
      compress: true,
      port: 8080,
   },
   mode: process.env_NODE_ENV === 'production' ? 'production' : 'development',
};
