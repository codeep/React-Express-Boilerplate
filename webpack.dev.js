const pathLib = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            '@babel/polyfill',
            pathLib.resolve(ENTRY_PATH, 'index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            }
        ]
    },
    devServer: {
        contentBase: pathLib.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: config.port
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: '/',
        filename: '[name]-[hash:8].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                index: {
                    name: 'index',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition();
                        return chunks.some(chunk => {
                            return chunk.name === 'index' && /[\\/]node_modules[\\/]/.test(name);
                        });
                    }
                },
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: 2,
                    enforce: true,
                    test(module, chunks) {
                        return chunks.some(chunk => chunk.name === 'vendor');
                    }
                }
            }
        }
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new CleanPlugin(['build']),
        new ProgressBarPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "progress.env.NODE_ENV": JSON.stringify('development')
        }),
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.css', 'jsx']
    }
};
