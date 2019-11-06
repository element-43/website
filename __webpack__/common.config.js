import autoprefixer from 'autoprefixer';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

export const distPath = join(__dirname, '..', 'dist', 'web');
export const srcPath = join(__dirname, '..', 'src', 'web');
export const title = 'Element 43';
const uriLimit = 65000;

export default {
  module: {
    rules: [
      // Templating.
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },

      // Scripts.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: join(
            __dirname,
            '..',
            '__typescript__',
            'tsconfig.web.json'
          ),
        },
      },

      // Assets.
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: uriLimit,
        },
      },
      {
        test: /\.(ttf?.+|woff?.+|woff2?.+)$/,
        loader: 'url-loader',
        options: {
          limit: uriLimit,
        },
      },
    ],
  },

  plugins: [
    new FaviconsWebpackPlugin({
      logo: resolve(srcPath, 'favicon.png'),
      title,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer({ browsers: ['last 3 versions'] })],
      },
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
