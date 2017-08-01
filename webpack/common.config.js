import autoprefixer from 'autoprefixer';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

// Config.
import { strings } from '../src/common/index';

const uriLimit = 50000;

export const distPath = join(__dirname, '..', 'dist', 'client');
export const srcPath = join(__dirname, '..', 'src', 'client');
export const commonLoaders = [
    // Handlebars.
    {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
    },

    // Assets.
    {
        test: /\.gif/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/gif'
        }
    },
    {
        test: /\.jpg/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/jpeg'
        }
    },
    {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/png'
        }
    },
    {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/svg+xml'
        }
    },
    {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/font-woff'
        }
    },
    {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/font-woff2'
        }
    },
    {
        test: /\.[ot]tf$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/octet-stream'
        }
    },
    {
        test: /\.eot$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'application/vnd.ms-fontobject'
        }
    }
];
export const commonPlugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title: strings.document.title
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
        }
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: () => [
                autoprefixer({ browsers: ['last 3 versions'] })
            ]
        }
    })
];
export const commonResolve = {
    extensions: ['.js', '.jsx']
};
export const devtool = 'source-map';
