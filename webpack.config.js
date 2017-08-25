const path = require('path');
// node本身基于commonjs规范  所以require module.exports
// import htmlWebpackPlugin from 'html-webpack-plugin'; 不支持
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    //入口
    entry:{
        main:'./src/main.js'
    },
    //出口
    output:{
        //所有资源产出目录
        path:path.join(__dirname,'dist'),
        //js文件的产出
        filename:'build.js'
    },
    //模块（解析文件)
    module:{
        loaders:[
            {
                //css的处理
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                //less的处理
                test:/\.less$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            //处理文件
            {
                //less的处理
                test:/\.(jpg|svg|png|gif|ttf)$/,
                // loader:'url-loader?limit=4096',//4kb以下base64，以上文件
                loader:'url-loader',
                options:{
                    limit:4096
                }
            },
            {
                //js的处理
                test:/\.js$/,
                loader:'babel-loader',
                //排除路径 node_module以下不需要处理
                exclude:/node_modules/,
                // presets 关键字  plugins  函数
               //options见.babelrc配置文件
            },
            //vue文件处理
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },

    //处理index.html文件的生成
    plugins:[

        //html-webpack-plugin
        new htmlWebpackPlugin({
            //参照谁生成
            template:'./src/index.html'
        })

    ]

}