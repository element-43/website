import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

// Config.
import { defaults, strings } from '../src/common/index';

// Common config.
import { commonLoaders, commonPlugins, commonResolve, devtool, distPath, srcPath } from './common.config';

const port = 1337;
const localhost = 'http://localhost';

export default {
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        port: port,
        proxy: {
            // Proxy all api calls to the running server.
            [defaults.endpoints.api.base]: {
                target: `${localhost}:${process.env.APP_PORT}`,
                secure: false
            }
        }
    },

    devtool: devtool,

    entry: [
        `webpack-dev-server/client?${localhost}:${port}`,
        'webpack/hot/only-dev-server',
        resolve(srcPath, 'index.jsx')
    ],

    module: {
        rules: commonLoaders.concat([
            {
                test: /.jsx?$/,
                use: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
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
            }
        ])
    },

    output: {
        filename: 'bundle.js',
        path: distPath,
        publicPath: '/'
    },

    plugins: commonPlugins.concat([
        new HtmlWebpackPlugin({
            title: strings.document.title,
            isDevelopment: true,
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        })
    ]),

    resolve: commonResolve
};
