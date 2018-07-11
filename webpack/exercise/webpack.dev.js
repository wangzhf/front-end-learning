const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', 

    devServer: {
        contentBase: './dist'
    }, 

    plugins: [
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用, 
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true, 
            skipWaiting: true
        })
    ]
});