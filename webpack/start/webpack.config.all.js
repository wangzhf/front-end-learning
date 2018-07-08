const path = require('path');

module.exports = {
    // 模式
    mode: 'development', // "production" | "development" | "none"
    // 入口
    entry: './app/entry', // string | object | array
    // entry: ["./app/entry1", "./app/entry2"],
    // entry: {
    //   a: "./app/entry-a",
    //   b: ["./app/entry-b1", "./app/entry-b2"]
    // },

    output: {
        // 所有输出文件的目标路径，必须是绝对路径（使用Node.js的path模块）
        path: path.resolve(__dirname, 'dist'), 
        // 
        filename: 'bundle.js', 
        // 输出解析文件的目录，url相对于HTML页面
        publicPath: '/assets/', 
        // 指定导出库（exported library）的类型
        libraryTarget: 'umd',
        // libraryTarget: "umd2", // 通用模块定义
        // libraryTarget: "commonjs2", // exported with module.exports
        // libraryTarget: "commonjs-module", // 使用 module.exports 导出
        // libraryTarget: "commonjs", // 作为 exports 的属性导出
        // libraryTarget: "amd", // 使用 AMD 定义方法来定义
        // libraryTarget: "this", // 在 this 上设置属性
        // libraryTarget: "var", // 变量定义于根作用域下
        // libraryTarget: "assign", // 盲分配(blind assignment)
        // libraryTarget: "window", // 在 window 对象上设置属性
        // libraryTarget: "global", // property set to global object
        // libraryTarget: "jsonp", // jsonp wrapper

        /* 高级输出配置 */
        /*
        // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息
        pathinfo: true, 

        // 附加分块（additional chunk）的文件名模板
        chunkFilename: '[id].js', 
        chunkFilename: '[chunkhash].js', // 长效缓存

        // 用于加载分块的JSONP函数名
        jsonpFunction: 'myWebpackJsonp', 

        // sourcemap位置的文件名模板
        sourceMapFilename: '[file].map', 
        sourceMapFilename: 'sourcemaps/[file].map',

        // devtool中模块的文件名模板（用于冲突）
        devtoolModuleFilenameTemplate: 'webpack', // [resource-path]?[hash]

        // 在UMD库中使用命名的AMD模块
        umdNamedDefine: true, 

        crossOriginLoading: 'use-credentials', 
        crossOriginLoading: 'anonymous', 
        crossOriginLoading: false,
        */

        /* 专家级输出配置 */
        /*
        // 为这些模块使用1:1映射SourceMaps（快速）
        devtoolLineToLine: {
            test: /\.jsx$/
        },
        
        // HMR清单的文件名模板 
        hotUpdateMainFilename: '[hash].hot-update.json', 

        // HMR分块的文件名模板 
        hotUpdateChunkFilename: '[id].[hash].hot-update.js', 

        // 包内前置式模块资源具有更好的可读性
        sourcePrefix: '\t',
        */
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
                test: /\.jsx?$/, 
                include: [
                    path.resolve(__dirname, 'app')
                ], 
                exclude: [
                    path.resolve(__dirname, 'app/demo-files')
                ], 

                // issuer 条件（导入源）
                issuer: {test, include, exclude}, 

                // 标识应用这些规则，即使规则覆盖（高级选项）
                enforce: 'pre', 
                enforce: 'post', 

                // 应该应用的loader，它相对于上下文解析
                // 为了更清晰，`-loader`后缀在 webpack2 中不再是可选的
                loader: 'babel-loader', 

                // loader可选项
                options: {
                    presets: ['es2015']
                }
            }, 

            {
                test: /\.html$/,
                test: '\.html$', 
                
                // 应用多个 loader 和选项
                use: [
                    'htmllint-loader', 
                    {
                        loader: 'html-loader', 
                        options: [

                        ]
                    }
                ]
            }, 

            // 只使用这些嵌套规则之一
            { oneOf: [ /* rules */] },
            // 使用所有这些嵌套规则（合并可用条件）
            { rules: [ /* rules */] },
            // 仅当所有条件都匹配时才匹配
            { resource: { and: [ /* 条件 */] } },
            { resource: { or: [ /* 条件 */] } },
            // 任意条件匹配时匹配（默认为数组）
            { resource: [ /* 条件 */] },
            { resource: { not: [/* 条件 */] }, }
        ], 

        /* 高级模块配置（点击展示） */

        noParse: [
            /special-library\.js$/
        ],
        // 不解析这里的模块

        // specifies default behavior for dynamic requests
        unknownContextRequest: ".",
        unknownContextRecursive: true,
        unknownContextRegExp: /^\.\/.*$/,
        unknownContextCritical: true,
        exprContextRequest: ".",
        exprContextRegExp: /^\.\/.*$/,
        exprContextRecursive: true,
        exprContextCritical: true,
        wrappedContextRegExp: /.*/,
        wrappedContextRecursive: true,
        wrappedContextCritical: false,
    }, 

    // 解析模块请求的选项
        // （不适用于对 loader 解析）
    resolve: {
        
        // 用于查找模块的目录
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],

        // 使用的扩展名
        extensions: [".js", ".json", ".jsx", ".css"],

        // 模块别名列表
        alias: {

            // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
            "module": "new-module",

            // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
            "only-module$": "new-module",
            
            // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
            // 模块别名相对于当前上下文导入
            "module": path.resolve(__dirname, "app/third/module.js"),    
        },

        /* 可供选择的别名语法 */

        alias: [
            {
                // 旧的请求
                name: "module",

                // 新的请求
                alias: "new-module",

                // 如果为 true，只有 "module" 是别名
                // 如果为 false，"module/inner/path" 也是别名
                onlyModule: true
            }
        ],

        /* 高级解析选项（点击展示） */

        // 遵循符号链接(symlinks)到新位置
        symlinks: true,

        // 从 package 描述中读取的文件
        descriptionFiles: ["package.json"],

        // 从描述文件中读取的属性
        // 当请求文件夹时
        mainFields: ["main"],

        // 从描述文件中读取的属性
        // 以对此 package 的请求起别名
        aliasFields: ["browser"],

        // 如果为 true，请求必不包括扩展名
        // 如果为 false，请求可以包括扩展名
        enforceExtension: false,

        moduleExtensions: ["-module"],
        // 类似 extensions/enforceExtension，但是用模块名替换文件
        enforceModuleExtension: false,

        // 为解析的请求启用缓存
        // 这是不安全，因为文件夹结构可能会改动
        // 但是性能改善是很大的
        unsafeCache: true,
        unsafeCache: {},

        // predicate function which selects requests for caching
        cachePredicate: (path, request) => true,

        // 应用于解析器的附加插件
        plugins: [
            // ...
        ]
    },

    performance: {
        hints: "warning", // 枚举
        hints: "error", // 性能提示中抛出错误
        hints: false, // 关闭性能提示
        maxAssetSize: 200000, // 整数类型（以字节为单位）
        maxEntrypointSize: 400000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },

    // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // 牺牲了构建速度的 `source-map' 是最详细的。
    devtool: "source-map", // enum
    devtool: "inline-source-map", // 嵌入到源文件中
    devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
    devtool: "hidden-source-map", // SourceMap 不在源文件中引用
    devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
    devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
    devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
    

    // webpack 的主目录
    // entry 和 module.rules.loader 选项
    // 相对于此目录解析
    context: __dirname, // string（绝对路径！）

    // 包(bundle)应该运行的环境
    // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
    target: "web", // 枚举
    target: "webworker", // WebWorker
    target: "node", // node.js 通过 require
    target: "async-node", // Node.js 通过 fs and vm
    target: "node-webkit", // nw.js
    target: "electron-main", // electron，主进程(main process)
    target: "electron-renderer", // electron，渲染进程(renderer process)
    target: (compiler) => { /* ... */ }, // 自定义
    

    externals: ["react", /^@angular\//],
    externals: "react", // string（精确匹配）
    externals: /^[a-z\-]+($|\/)/, // 正则
    externals: { // 对象
        angular: "this angular", // this["angular"]
        react: { // UMD
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        }
    },
    // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
    externals: (request) => { /* ... */ return "commonjs " + request },

    // 精确控制要显示的 bundle 信息
    stats: "errors-only",
    stats: { //object
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true,
        // ...
    },

    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },

    // 附加插件列表
    plugins: [
        // ...
    ],


    /* 高级配置 */

    // 独立解析选项的 loader
    resolveLoader: { /* 等同于 resolve */ },

    // 限制并行处理模块的数量
    parallelism: 1, // number

    // 捕获时机信息
    profile: true, // boolean

    // 在第一个错误出错时抛出，而不是无视错误。
    bail: true, //boolean

    // 禁用/启用缓存
    cache: false, // boolean

    // 启用观察
    watch: true, // boolean

    watchOptions: {
        // 将多个更改聚合到单个重构建(rebuild)
        aggregateTimeout: 1000, // in ms

        // 启用轮询观察模式
        // 必须用在不通知更改的文件系统中
        // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透过网络，
        // 让不同的机器、不同的作业系统、可以彼此分享个别的档案 ( share file )）
        poll: true,
        poll: 500, // 间隔单位 ms
        },

    node: {
        // Polyfills and mocks to run Node.js-
        // environment code in non-Node environments.

        console: false, // boolean | "mock"
        global: true, // boolean | "mock"
        process: true, // boolean
        __filename: "mock", // boolean | "mock"
        __dirname: "mock", // boolean | "mock"
        Buffer: true, // boolean | "mock"
        setImmediate: true // boolean | "mock" | "empty"
    },

    recordsPath: path.resolve(__dirname, "build/records.json"),
    recordsInputPath: path.resolve(__dirname, "build/records.json"),
    recordsOutputPath: path.resolve(__dirname, "build/records.json"),
    // TODO
};