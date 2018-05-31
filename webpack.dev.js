const pathLib = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const CleanPlugin = require('clean-webpack-plugin');
const config = require('./config');

const ROOT_PATH = pathLib.resolve(__dirname);
const ENTRY_PATH = pathLib.resolve(ROOT_PATH, 'app');
const OUTPUT_PATH = pathLib.resolve(ROOT_PATH, 'build');
console.log(pathLib.resolve(ENTRY_PATH, 'index.js'));

module.exports = {
    entry: {
        index: [
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?path=http://${config.host}:${config.port}/__webpack_hmr`,
            'babel-polyfill',
            pathLib.resolve(ENTRY_PATH, 'index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: '/',
        filename: '[name]-[hash:8].js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-0']
                }
            },
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader?sourceMap']}]
    },
    plugins: [
        new CleanPlugin(['build']),
        new ProgressBarPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "progress.env.NODE_ENV": JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            title: "Todo Manager",
            showErrors: true,
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        }),
        new OpenBrowserPlugin({
            url: `http://${config.host}:${config.port}`
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.css', 'jsx']
    }
};
