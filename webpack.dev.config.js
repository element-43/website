'use strict';

const autoprefixer = require('autoprefixer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const strings = require('./config/strings');

const distPath = path.join(__dirname, 'dist', 'public');
const srcPath = path.join(__dirname, 'src', 'public');
const uriLimit = 50000;

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // Development specific.
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(srcPath, 'index.jsx')
    ],
    module: {
        rules: [
            // Templates.
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },

            // Scripts.
            {
                test: /.jsx?$/,
                use: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },

            // Stylesheets.
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            modules: true
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', query: { importLoaders: 2 } },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            },

            // Assets.
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
            },

            // Misc.
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: distPath,
        publicPath: '/'
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: path.resolve(srcPath, 'favicon.png'),
            title: strings.appTitle
        }),
        new HtmlWebpackPlugin({
            title: strings.appTitle,
            inject: 'body',
            template: path.resolve(srcPath, 'index.hbs'),
            minify: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: path.resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => [
                    autoprefixer({ browsers: ['last 3 versions'] })
                ]
            }
        })
    ]
};
