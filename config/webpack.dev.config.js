// webpack开发环境配置
let webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    baseConfig = require('./webpack.base.config');


baseConfig.entry = {
    'main': path.resolve(__dirname, '../src/app/index.js'),
    'vue': ['vue', 'vue-property-decorator', 'vue-class-component']
};

// 文件映射
baseConfig.devtool = 'source-map';

baseConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/app/index.html'),
        inject: 'body',
        //favicon: path.join(__dirname, '../src/favicon.ico'),
        chunks: ['vue', 'main'],
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vue'],
        minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
);






module.exports = baseConfig;
