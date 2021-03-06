import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import {
  Configuration,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import merge from 'webpack-merge';
import WebpackNotifierPlugin from 'webpack-notifier';

// Config.
import commonConfig from './common.config';

// Constants.
import * as WebpackConstants from './constants';

const config: Configuration = merge(commonConfig, {
  devServer: {
    contentBase: WebpackConstants.DIST_PATH,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: parseInt(process.env.PORT, 10),
  },

  devtool: 'cheap-module-source-map',

  entry: [
    `webpack-dev-server/client?${WebpackConstants.LOCALHOST}:${process.env.PORT}`,
    'webpack/hot/only-dev-server',
    resolve(WebpackConstants.SRC_PATH, 'index.ts'),
  ],

  mode: 'development',

  output: {
    filename: 'bundle.js',
    path: WebpackConstants.DIST_PATH,
    publicPath: '/',
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: false,
      template: resolve(WebpackConstants.SRC_PATH, 'index.hbs'),
      title: WebpackConstants.TITLE,
    }),
    new HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      contentImage: resolve(__dirname, 'unicorn.png'),
      title: 'UNICORN POWER_UP!!!',
    }),
  ],
});

export default config;
