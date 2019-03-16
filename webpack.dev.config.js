const path = require('path') //nodejs 文件模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js', // 入口
    output: { // 出口
        path: __dirname,// 当前目录
        filename: './release/bundle.js'
    },
    module: { 
        rules: [{ //es6 解析
            test: /\.js?$/, // 需要检验哪些文件
            exclude: /(node_modules)/, // node_modules 可以略过
            loader: 'babel-loader'
        }]
    },
        plugins:[
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, './release'), // 根目录
            open: true, // 自动打开浏览器
            port: 9000
        } 
}