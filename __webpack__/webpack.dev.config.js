import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import WebpackNotifierPlugin from 'webpack-notifier';

// Config.
import { endpoints, port } from '../src/common/defaults';

// Common config.
import common, { distPath, srcPath, title } from './common.config';

const localhost = 'http://localhost';
const webPort = 1337;

export default merge(common, {
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: webPort,
    proxy: {
      // Proxy all api calls to the running server.
      [`${endpoints.api.base}/**`]: {
        logLevel: 'debug',
        secure: false,
        target: `http://[::1]:${port}`,
      },
    },
  },

  devtool: 'cheap-module-source-map',

  entry: [
    `webpack-dev-server/client?${localhost}:${webPort}`,
    'webpack/hot/only-dev-server',
    resolve(srcPath, 'index.ts'),
  ],

  mode: 'development',

  output: {
    filename: 'bundle.js',
    path: distPath,
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title,
      isDevelopment: true,
      inject: 'body',
      template: resolve(srcPath, 'index.hbs'),
      minify: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      title: 'UNICORN POWER_UP!!!',
      contentImage: resolve(__dirname, 'unicorn.png'),
      alwaysNotify: true,
    }),
  ],
});
