const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: {
        app: './src/index.js'
    }, 

    // 
    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist', 
        hot: true
    },

    module: {
        rules: [
            {
                include: path.resolve('dist', 'math'),
                sideEffects: false
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }, 
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }), 
        new webpack.NamedModulesPlugin(), 
        new webpack.HotModuleReplacementPlugin()
    ]
}