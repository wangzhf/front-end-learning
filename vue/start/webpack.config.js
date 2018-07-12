const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 

    output: {
        path: path.join(__dirname, 'dist'), 
        filename: '[name].bundle.js'
    }, 

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader', 
                exclude: /node_modules/
            }, 
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            }
        ]
    }, 

    resolve: {
        extensions: ['.js', '.vue'], 
        alias: {
            filter: path.join(__dirname, './src/filters'), 
            components: path.join(__dirname, './src/components'),
            vue: 'vue/dist/vue.js'
        }
    }, 

    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}