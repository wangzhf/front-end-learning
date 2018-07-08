const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 模式
    mode: 'development', // "production" | "development" | "none"
    // 入口
    // 单个入口
    //entry: './app/main.js', // string | object | array
    // 多个入口
    entry: {
        main: './app/main.js', 
        calc: './app/calc.js'
    },
    // entry: ["./app/entry1", "./app/entry2"],
    // entry: {
    //   a: "./app/entry-a",
    //   b: ["./app/entry-b1", "./app/entry-b2"]
    // },

    output: {
        // 所有输出文件的目标路径，必须是绝对路径（使用Node.js的path模块）
        path: path.resolve(__dirname, 'dist'),
        // 如果多个入口时，使用[name]来设置名称
        filename: '[name].js',
        
        // 附加分块（additional chunk）的文件名模板
        //chunkFilename: '[id].js', 
        //chunkFilename: '[name].js', // 长效缓存

        // sourcemap位置的文件名模板
        sourceMapFilename: '[file].map', 
        sourceMapFilename: 'sourcemaps/[file].map',

    },

    // 模块配置
    module: {
        // 模块规则（配置loader、解析器等选项）
        rules: [
            {
                // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
                // test和include具有相同的作用，都是鼻血匹配选项
                // exclude是必不匹配选项（优先于test和include）
                // 最佳实践：
                // - 只在test和文件名匹配中使用正则表达式
                // - 在include和exclude中使用绝对路径数组
                // - 尽量避免 exclude，更倾向于使用include
                test: /\.js$/,  // test属性必须配置，值为正则表达式，用于匹配文件
                exclude: /node_module/,  // 对于匹配的文件进行过滤，排除node_module目录下的文件
                include: path.resolve(__dirname, 'src'),  // 指定匹配文件的范围

                // 应该应用的loader，它相对于上下文解析
                // 为了更清晰，`-loader`后缀在 webpack2 中不再是可选的
                // loader属性必须配置，值为字符串，对于匹配的文件使用babel-loader和eslint-loader处理，处理顺序从右向左，先eslint-loader，后babel-loader，loader之间用！隔开，loader与options用？隔开
                loader: 'babel-loader?fakeoption=true!eslint-loader',  

                // loader可选项
                options: {
                    
                }
            },

            {
                test: /\.html$/,
                // 应用多个 loader 和选项
                use: [
                    'htmllint-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            failOnError: true,
                            failOnWarning: true,
                        }
                    }
                ]
            },
            {test: /\.css$/, use: 'css-loader'}
        ],

    },
    // 附加插件列表
    plugins: [
        // 生成入口html文件，由于webpack输出的js文件需要插入到html文件，以构成web入口；
        // 该插件默认有一个html文件模板，但是一般情况下需要为其指定一个html文件作为模板，
        // webpack打包输出的js文件会插入到body结束标签之前。
        new HtmlWebpackPlugin({template: './src/index.html'}), 

        // 已过时,use config.optimization.splitChunks instead
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })

        // 重新打包时清除之前的文件
        new CleanWebpackPlugin(
            [
                'dist/*.js', 
                'dist/*.html', 
                'dist/*.css'
            ], 
            {
                verbose: true, 
                dry: false
            }
        ),
    ],

    optimization: {
        splitChunks: {
            // name为true时，将会自动使用cacheGroups的key以及chunk的名字拼接，如：commons-calc-main.js
            name: true,
            // 指定拼接name时的分隔符
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // 指定名字
                    // name: 'vendors',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
};