const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js', 
        vendor: [
            'lodash'
        ]
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }), 
        new webpack.HashedModuleIdsPlugin()
    ], 

    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                // key 为entry中定义的 入口名称
                vendor: {
                    test: /[\\/]node_modules[\\/]/, 
                    name: 'vendor', 
                    chunks: 'all'
                }
            }
        }
    }
}