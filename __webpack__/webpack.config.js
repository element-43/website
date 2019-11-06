import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import merge from 'webpack-merge';

// Common config.
import common, { distPath, srcPath, title } from './common.config';

export default merge(common, {
  devtool: 'source-map',

  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // Rule of thumb: add any vendor files that are > 50kb
          test: /axios|moment|react|react-dom|react-router-dom/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  output: {
    path: distPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title,
      inject: 'body',
      template: resolve(srcPath, 'index.hbs'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
      },
    }),
  ],
});
