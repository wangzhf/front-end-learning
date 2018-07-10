const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Code Spliting'
        })
    ], 

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    //test: /[\\/]node_modules[\\/]/,
                    // 指定名字
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
}