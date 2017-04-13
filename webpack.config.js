'use strict';

const autoprefixer = require('autoprefixer');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const webpack = require('webpack');
const webpackCombineLoaders = require('webpack-combine-loaders');

const defaults = require('./config/defaults');
const strings = require('./config/strings');

const distPath = path.join(__dirname, 'dist', 'public');
const srcPath = path.join(__dirname, 'src', 'public');
const uriLimit = 50000;

const cssLoader = webpackCombineLoaders([
    {
        loader: 'css-loader',
        query: {
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            minimize: true,
            modules: true
        }
    },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' }
]);
const sassLoader = webpackCombineLoaders([
    {
        loader: 'css-loader',
        query: {
            importLoaders: 2,
            minimize: true
        }
    },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' }
]);

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // Production specific.
    devtool: false,
    entry: {
        main: path.resolve(srcPath, 'index.jsx'),
        vendor: [
            // Rule of thumb: add any vendor files that are > 50kb (except lodash, that is handled by da plugin)
            'bluebird',
            'react',
            'react-dom',
            'react-router'
        ]
    },
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssLoader
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: sassLoader
                })
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
        path: distPath,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanPlugin(distPath),
        new ExtractTextPlugin({
            filename: 'styles.[hash].css',
            allChunks: true
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(srcPath, 'favicon.png'),
            title: strings.appTitle
        }),
        new HtmlWebpackPlugin({
            title: strings.appTitle,
            gaTrackingId: defaults.googleAnalytics.trackingId, // Supply the Google Analytics tracking Id to inject the GA script.
            inject: 'body',
            template: path.resolve(srcPath, 'index.hbs'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
            }
        }),
        new VisualizerPlugin({ filename: path.join('..', '..', 'stats', 'stats.html') }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity,
            filename: '[name].[hash].js',
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 50000, // 50kb
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: true
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
