import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';
import VisualizerPlugin from 'webpack-visualizer-plugin';
import webpack from 'webpack';
import webpackCombineLoaders from 'webpack-combine-loaders';

// Config.
import { strings } from '../src/common/index';

// Common config.
import { commonLoaders, commonPlugins, commonResolve, devtool, distPath, srcPath } from './common.config';

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

export default {
    devtool: devtool,

    entry: {
        main: resolve(srcPath, 'index.jsx'),
        vendor: [
            // Rule of thumb: add any vendor files that are > 50kb
            'bluebird',
            'lodash',
            'moment',
            'react',
            'react-dom',
            'velocity-animate'
        ]
    },

    module: {
        rules: commonLoaders.concat([
            {
                test: /.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: extract({
                    fallback: 'style-loader',
                    use: cssLoader
                })
            },
            {
                test: /\.scss$/,
                use: extract({
                    fallback: 'style-loader',
                    use: sassLoader
                })
            }
        ])
    },

    output: {
        path: distPath,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    plugins: commonPlugins.concat([
        new CleanPlugin(['dist'], {
            exclude: ['common', 'server'],
            root: join(__dirname, '..')
        }),
        new ExtractTextPlugin({
            filename: 'styles.[hash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: strings.document.title,
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
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
            sourceMap: true,
            mangle: true
        }),
        new VisualizerPlugin({
            filename: '../../stats/stats.html'
        }),
    ]),

    resolve: commonResolve
};
